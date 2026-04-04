'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/services/firebase';
import { ensureUserProfileExists } from '@/hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // Not authenticated, redirect to login
        router.push('/login');
        return;
      }

      if (!user.emailVerified) {
        // Not verified, redirect to email verification
        router.push('/auth/verify-email');
        return;
      }

      try {
        // Fail-safe: Check if Firestore doc exists
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          // Doc doesn't exist for verified user - this is the critical case
          // Trigger ensureUserProfileExists as fail-safe
          await ensureUserProfileExists(user);
        }

        // User is authenticated, verified, and has a Firestore doc
        setIsAuthorized(true);
      } catch (error) {
        console.error('Error in dashboard auth check:', error);
        // On error, still allow access since user is verified
        // but log it for debugging
        setIsAuthorized(true);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-medical-blue rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Will be redirected by the auth listener
  }

  return <>{children}</>;
}
