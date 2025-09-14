import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// URL validation utility
export function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Format URL for display
export function formatUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname + urlObj.pathname;
  } catch (_) {
    return url;
  }
}

// Check if user has reached scan limit
export function hasReachedScanLimit(user: User): boolean {
  const today = new Date();
  const lastScan = new Date(user.lastScanTimestamp);
  
  // Reset daily limit if it's a new day
  if (today.toDateString() !== lastScan.toDateString()) {
    return false;
  }
  
  // Free users get 10 scans per day, premium users get unlimited
  return !user.premiumStatus && user.scanLimit >= 10;
}

// Generate scan ID
export function generateScanId(): string {
  return `scan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Simulate scan delay for better UX
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Extract domain from URL
export function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch (_) {
    return '';
  }
}

// Check if URL matches known scam patterns
export function checkScamPatterns(url: string, patterns: ScamPattern[]): {
  isScam: boolean;
  matchedPatterns: ScamPattern[];
} {
  const matchedPatterns: ScamPattern[] = [];
  
  for (const pattern of patterns) {
    const regex = new RegExp(pattern.patternString, 'i');
    if (regex.test(url)) {
      matchedPatterns.push(pattern);
    }
  }
  
  return {
    isScam: matchedPatterns.length > 0,
    matchedPatterns
  };
}
