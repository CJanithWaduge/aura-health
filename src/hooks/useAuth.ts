import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/services/firebase';

// Maps Firebase auth errors to calm, user-friendly messages conforming to the Trust pillar
const getFriendlyErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'The email address provided is not valid. Please check and try again.';
    case 'auth/user-disabled':
      return 'This account has been temporarily disabled. Please contact support.';
    case 'auth/user-not-found':
      return 'We couldn\'t find an account matching that email address.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'The email or password you entered is incorrect.';
    case 'auth/too-many-requests':
      return 'Too many login attempts. For your security, please wait a moment before trying again.';
    case 'auth/network-request-failed':
      return 'Network connection issue. Please check your internet connection and try again.';
    default:
      return 'An unexpected error occurred. Please try again later.';
  }
};

// Mock function for triggering an email alert
const sendSecurityEmailAlert = (email: string) => {
  // In a real application, this would call a backend endpoint to send an email.
  console.log(`[SECURITY ALERT] Triggering email alert for 5 failed attempts on: ${email}`);
};

interface AuthResult {
  user: User | null;
  role: string | null;
  error: string | null;
}

export const ensureUserProfileExists = async (user: User) => {
  if (!user || !user.emailVerified) return null;

  try {
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // First verified login: create the profile
      const pendingRegStr = typeof window !== 'undefined' ? localStorage.getItem('pendingUserRegistration') : null;
      let pendingReg = null;
      if (pendingRegStr) {
        try { pendingReg = JSON.parse(pendingRegStr); } catch (e) {}
      }

      const newUserData = {
        uid: user.uid,
        email: user.email,
        role: pendingReg?.role || 'patient',
        displayName: pendingReg?.displayName || user.displayName || 'User',
        createdAt: serverTimestamp(),
        ...(pendingReg?.role === 'doctor' && pendingReg?.slmcId ? { slmcId: pendingReg.slmcId } : {})
      };

      await setDoc(userDocRef, newUserData, { merge: true });

      if (typeof window !== 'undefined') {
        localStorage.removeItem('pendingUserRegistration');
      }

      return newUserData.role;
    }

    return userDoc.data().role || null;
  } catch (error) {
    console.error("Error ensuring user profile exists:", error);
    return null;
  }
};

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [failedAttempts, setFailedAttempts] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('failedAttempts') || '0', 10);
    }
    return 0;
  });

  const [lockoutTimer, setLockoutTimer] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const lockUntil = parseInt(localStorage.getItem('lockoutUntil') || '0', 10);
      const remaining = Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
      return remaining;
    }
    return 0;
  });

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (lockoutTimer > 0) {
      timerId = setTimeout(() => {
        setLockoutTimer((prev) => {
          if (prev <= 1) {
            localStorage.removeItem('lockoutUntil');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [lockoutTimer]);

  const updateFailedAttempts = (attempts: number) => {
    setFailedAttempts(attempts);
    if (typeof window !== 'undefined') {
      localStorage.setItem('failedAttempts', attempts.toString());
    }
  };

  const triggerLockout = () => {
    setLockoutTimer(30);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lockoutUntil', (Date.now() + 30 * 1000).toString());
    }
  };

  const signIn = async (email: string, password: string): Promise<AuthResult> => {
    if (lockoutTimer > 0) {
      const waitMsg = `Too many attempts. Retry in ${lockoutTimer}s`;
      setError(waitMsg);
      return { user: null, role: null, error: waitMsg };
    }

    setLoading(true);
    setError(null); // Clear previous errors cleanly
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Reset attempts on successful login
      updateFailedAttempts(0);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('lockoutUntil');
      }

      let userRole = null;
      try {
        if (userCredential.user.emailVerified) {
          userRole = await ensureUserProfileExists(userCredential.user);
        } else {
          // Attempt to fetch role if doc exists, for unverified users who might already have a doc from old logic
          const userDocRef = doc(db, 'users', userCredential.user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            userRole = userDoc.data().role || null;
          }
        }
      } catch (firestoreErr) {
        console.error("Firestore sync failed for role fetch", firestoreErr);
      }

      return { user: userCredential.user, role: userRole, error: null };
    } catch (err: any) {
      const newAttempts = failedAttempts + 1;
      updateFailedAttempts(newAttempts);

      let customError = getFriendlyErrorMessage(err?.code || 'unknown');

      if (newAttempts === 3) {
        triggerLockout();
        customError = `Too many attempts. Please breathe and try again in 30s.`;
      } else if (newAttempts === 5) {
        sendSecurityEmailAlert(email);
        triggerLockout();
        customError = `Too many attempts. Please breathe and try again in 30s.`;
      } else if (newAttempts > 3) {
        triggerLockout();
        customError = `Too many attempts. Please breathe and try again in 30s.`;
      }

      setError(customError);
      return { user: null, role: null, error: customError };
    } finally {
      // Ensure loading state correctly completes to allow Zen-style graceful transition
      setLoading(false);
    }
  };

  return { signIn, loading, error, lockoutTimer, failedAttempts, ensureUserProfileExists };
};
