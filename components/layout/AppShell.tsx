'use client';

import { Shield } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-accent/20 rounded-full">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-extrabold text-foreground">
              LinkGuardian
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Safeguard your clicks: Instantly detect scam and phishing links
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            Built with ❤️ for the Base ecosystem
          </p>
        </footer>
      </div>
    </div>
  );
}
