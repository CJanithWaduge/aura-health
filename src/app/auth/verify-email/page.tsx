"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/services/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { Button } from '@/components/ui/Button';

export default function VerifyEmailPage() {
  const router = useRouter();
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    // If there's no user, redirect to login
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login');
      } else if (user.emailVerified) {
        // If already verified, go to dashboard logic
        router.push('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleResend = async () => {
    if (!auth.currentUser) return;
    setResending(true);
    setMessage(null);
    try {
      await sendEmailVerification(auth.currentUser);
      setMessage("Verification email has been resent. Please check your inbox.");
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/too-many-requests') {
        setMessage("Too many requests. Please wait a moment before trying again.");
      } else {
        setMessage("An error occurred while resending the email.");
      }
    } finally {
      setResending(false);
    }
  };

  const handleCheckVerified = async () => {
    if (!auth.currentUser) return;
    setChecking(true);
    try {
      // Force reload the user's data to check the latest emailVerified status
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        setMessage("Email verified successfully! Redirecting...");
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        setMessage("Email not verified yet. Please check your inbox and click the link.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to verify status. Please try again.");
    } finally {
      setChecking(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* Zen-inspired Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/40 dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 dark:border-white/10 p-10 flex flex-col items-center">

        {/* Branding header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            AURA Health
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Verify your email to get started
          </p>
        </div>

        <div className="w-full space-y-6">
          <div className="mx-auto w-16 h-16 bg-medical-blue/10 dark:bg-medical-blue/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-medical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="text-center space-y-3">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">Verify your email</h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We've sent a verification link to your email address. Please click the link to activate your account.
            </p>

            {message && (
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg text-sm text-blue-600 dark:text-blue-400">
                {message}
              </div>
            )}
          </div>

          <div className="space-y-3 pt-2">
            <Button
              variant="primary"
              className="w-full"
              onClick={handleCheckVerified}
              isLoading={checking}
              disabled={resending}
            >
              I've verified my email
            </Button>

            <Button
              variant="secondary"
              className="w-full"
              onClick={handleResend}
              isLoading={resending}
              disabled={checking}
            >
              Resend verification email
            </Button>
          </div>

          <div className="pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={() => {
                auth.signOut();
                router.push('/login');
              }}
              className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-medical-blue dark:hover:text-medical-blue transition-colors font-medium"
            >
              Back to login
            </button>
          </div>
        </div>

        {/* Privacy & Trust Indicator */}
        <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 w-full flex items-center justify-center space-x-2 text-gray-400 dark:text-gray-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0H12" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wider">AES-256 Secured Vault</span>
        </div>

      </div>
    </main>
  );
}
