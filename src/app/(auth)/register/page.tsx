import React from 'react';
import { RegisterForm } from '@/components/auth/RegisterForm';

export default function RegisterPage() {
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
            Join the Privacy-First Health Network
          </p>
        </div>

        {/* Core Register Form */}
        <RegisterForm />

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