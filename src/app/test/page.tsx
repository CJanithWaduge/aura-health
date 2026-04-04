import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function TestPage() {
  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Component Test Page</h1>
        <p className="text-gray-600 dark:text-gray-400">Testing the Zen-inspired UI components</p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" isLoading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Inputs</h2>
        <div className="space-y-4 max-w-sm">
          <Input label="Standard Input" placeholder="Enter text..." />
          <Input label="Input with Error" placeholder="Enter text..." error="This field is required" />
          <Input label="Disabled Input" placeholder="Cannot type here" disabled />
        </div>
      </section>
    </div>
  );
}
