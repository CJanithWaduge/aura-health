"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/services/firebase';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const RegisterForm = () => {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [slmcId, setSlmcId] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!displayName.trim()) errors.displayName = 'Full Name is required.';
    
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    if (role === 'doctor' && !slmcId.trim()) {
      errors.slmcId = 'SLMC Registration ID is required for doctors.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !acceptedTerms) return;

    setLoading(true);
    setError(null);
    
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send Email Verification
      await sendEmailVerification(user);

      // Save user profile temporarily to localStorage
      // We will create the Firestore doc on first verified login
      const pendingData: any = {
        role,
        displayName,
      };
      if (role === 'doctor') {
        pendingData.slmcId = slmcId;
      }
      localStorage.setItem('pendingUserRegistration', JSON.stringify(pendingData));

      // Redirect to Verify Email page
      router.push('/auth/verify-email');
      
    } catch (err: any) {
      console.error("Registration Error Technical Details:", err);
      let friendlyError = 'An unexpected error occurred. Please try again.';
      
      const errorCode = err?.code || 'unknown';
      const errorMessage = err?.message || '';

      if (errorCode === 'auth/email-already-in-use') {
        friendlyError = 'This email is already in use. Please sign in instead.';
      } else if (errorCode === 'auth/invalid-email') {
        friendlyError = 'Invalid email address.';
      } else if (errorCode === 'auth/weak-password') {
        friendlyError = 'Password is too weak. Please use a stronger password.';
      } else if (errorCode === 'auth/operation-not-allowed') {
        friendlyError = 'Email/Password registration is not enabled for this project. Please contact support.';
      } else if (errorCode === 'permission-denied') {
        friendlyError = 'Security rules blocked the write. Please check Firestore permissions.';
      } else {
        friendlyError = `Error (${errorCode}): ${errorMessage || 'Unknown system failure'}`;
      }
      
      setError(friendlyError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-sm">
      
      {/* Role Selection */}
      <div className="flex bg-gray-100/50 dark:bg-black/20 p-1 rounded-xl">
        <button
          type="button"
          onClick={() => setRole('patient')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            role === 'patient' 
              ? 'bg-white dark:bg-white/10 shadow-sm text-medical-blue dark:text-white' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Patient
        </button>
        <button
          type="button"
          onClick={() => setRole('doctor')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            role === 'doctor' 
              ? 'bg-white dark:bg-white/10 shadow-sm text-medical-blue dark:text-white' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Doctor
        </button>
      </div>

      <div className="space-y-4">
        <Input 
          label="Full Name" 
          placeholder="Enter your full name" 
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          error={validationErrors.displayName}
          disabled={loading}
        />

        <Input 
          label="Email Address" 
          type="email"
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={validationErrors.email}
          disabled={loading}
        />
        
        <Input 
          label="Password" 
          type="password"
          placeholder="Create a password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={validationErrors.password}
          disabled={loading}
        />

        {role === 'doctor' && (
          <Input 
            label="SLMC Registration ID" 
            placeholder="e.g. SLMC-12345" 
            value={slmcId}
            onChange={(e) => setSlmcId(e.target.value)}
            error={validationErrors.slmcId}
            disabled={loading}
          />
        )}
      </div>

      {/* Privacy Gate */}
      <div className="flex items-start mt-2">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            disabled={loading}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-medical-blue/20 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-medical-blue dark:ring-offset-gray-800"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="text-gray-500 dark:text-gray-300">
            I agree to the <a href="#" className="font-semibold text-medical-blue hover:underline">Privacy Policy</a> and <a href="#" className="font-semibold text-medical-blue hover:underline">Terms of Service</a>
          </label>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg text-sm text-red-600 dark:text-red-400 font-medium">
          {error}
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        isLoading={loading}
        disabled={!acceptedTerms || loading}
      >
        Create Account
      </Button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-medical-blue hover:underline">
            Sign In here
          </Link>
        </p>
      </div>
    </form>
  );
};