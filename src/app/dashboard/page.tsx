import React from 'react';

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4 mt-8 border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Patient Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome to your secure health vault.</p>
      </div>

      <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-white/5 p-8 text-center text-gray-500 dark:text-gray-400">
        Dashboard content will be implemented in future phases.
      </div>
    </main>
  );
}
