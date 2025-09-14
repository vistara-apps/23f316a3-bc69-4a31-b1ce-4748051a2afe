import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LinkGuardian - Safeguard Your Clicks',
  description: 'Instantly detect scam and phishing links. Protect yourself from malicious URLs.',
  keywords: ['security', 'phishing', 'scam detection', 'url scanner', 'base', 'miniapp'],
  authors: [{ name: 'LinkGuardian Team' }],
  openGraph: {
    title: 'LinkGuardian - Safeguard Your Clicks',
    description: 'Instantly detect scam and phishing links',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
