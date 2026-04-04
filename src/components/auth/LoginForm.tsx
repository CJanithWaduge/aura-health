"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';

export const LoginForm = () => {
  const router = useRouter();
  const { signIn, loading, error: authError, lockoutTimer } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [validationErrors, setValidationErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
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

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || lockoutTimer > 0) return;

    const { user, role } = await signIn(email, password);
    
    if (user) {
      if (!user.emailVerified) {
        router.push('/auth/verify-email');
        return;
      }

      // Phase 5 Task 5.1: Implement post-login role-based routing
      if (role === 'doctor') {
        router.push('/dashboard/doctor');
      } else {
        router.push('/dashboard/patient');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
      <div className="space-y-4">
        <Input 
          label="Email Address" 
          type="email"
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={validationErrors.email}
          disabled={loading || lockoutTimer > 0}
        />
        
        <div className="space-y-1">
          <Input 
            label="Password" 
            type="password"
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={validationErrors.password}
            disabled={loading || lockoutTimer > 0}
          />
          <div className="flex justify-end pr-1 pt-1">
            <Link href="/forgot-password" className="text-xs font-medium text-medical-blue hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>

      {authError && (
        <div className="p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg text-sm text-red-600 dark:text-red-400 font-medium">
          {authError}
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        isLoading={loading}
        disabled={lockoutTimer > 0}
      >
        {lockoutTimer > 0 ? `Wait ${lockoutTimer}s` : 'Sign In'}
      </Button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link href="/register" className="font-semibold text-medical-blue hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </form>
  );
};
