import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button, ThemeSwitcher } from '@salonx/ui';
import { createSupabaseClient } from '@salonx/api';

function HomePage() {
  const handleTestSharedPackages = () => {
    console.log('Testing shared packages...');
    createSupabaseClient();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">SalonX Monorepo</h1>
          <p className="text-center text-muted-foreground mb-6">
            Complete salon management system with web and mobile apps
          </p>
          
          {/* Theme Switcher */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Choose Your Theme:</h3>
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <main className="space-y-8">
          {/* Monorepo Structure */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Monorepo Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Apps:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• <code className="bg-muted px-1 rounded">apps/web</code> - React + Vite + Tailwind</li>
                  <li>• <code className="bg-muted px-1 rounded">apps/mobile</code> - Expo + React Native</li>
                  <li>• <code className="bg-muted px-1 rounded">apps/booking</code> - Booking widget (planned)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Packages:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• <code className="bg-muted px-1 rounded">packages/ui</code> - Shared UI components</li>
                  <li>• <code className="bg-muted px-1 rounded">packages/api</code> - Supabase + Redux</li>
                  <li>• <code className="bg-muted px-1 rounded">packages/types</code> - TypeScript types</li>
                  <li>• <code className="bg-muted px-1 rounded">packages/config</code> - Shared configs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Frontend:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• React 18 + TypeScript</li>
                  <li>• Vite (Web) / Expo (Mobile)</li>
                  <li>• Tailwind CSS / NativeWind</li>
                  <li>• Redux Toolkit + RTK Query</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Backend:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Supabase (PostgreSQL)</li>
                  <li>• Row Level Security (RLS)</li>
                  <li>• Edge Functions</li>
                  <li>• Real-time subscriptions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Tools:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Turborepo (Monorepo)</li>
                  <li>• pnpm (Package manager)</li>
                  <li>• ESLint + Prettier</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Auth & Accounts</h3>
                <p className="text-sm text-muted-foreground">User authentication, salon profiles</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Staff Management</h3>
                <p className="text-sm text-muted-foreground">Employee management, booth rentals</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Appointments</h3>
                <p className="text-sm text-muted-foreground">Booking, scheduling, calendar</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Payments</h3>
                <p className="text-sm text-muted-foreground">Stripe integration, deposits</p>
              </div>
            </div>
          </section>

          {/* Test Button */}
          <section className="text-center">
            <Button onClick={handleTestSharedPackages} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Test Shared Packages
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App 