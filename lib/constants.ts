// Known scam patterns for demo purposes
export const DEMO_SCAM_PATTERNS = [
  {
    patternId: 'pattern_1',
    patternString: '(phishing|scam|fake).*\\.(tk|ml|ga|cf)',
    patternType: 'domain' as const,
    lastUpdated: new Date()
  },
  {
    patternId: 'pattern_2',
    patternString: 'bit\\.ly/[a-zA-Z0-9]{6,}',
    patternType: 'domain' as const,
    lastUpdated: new Date()
  },
  {
    patternId: 'pattern_3',
    patternString: '(urgent|verify|suspended|limited).*account',
    patternType: 'content' as const,
    lastUpdated: new Date()
  }
];

// Scan limits
export const SCAN_LIMITS = {
  FREE_DAILY_LIMIT: 10,
  PREMIUM_DAILY_LIMIT: -1, // Unlimited
  BATCH_SCAN_LIMIT: 100
};

// API endpoints
export const API_ENDPOINTS = {
  SCAN_URL: '/api/scan',
  BATCH_SCAN: '/api/batch-scan',
  USER_STATS: '/api/user/stats'
};

// UI constants
export const UI_CONSTANTS = {
  SCAN_TIMEOUT: 10000, // 10 seconds
  MIN_SCAN_DELAY: 1000, // 1 second minimum for UX
  MAX_URL_LENGTH: 2048
};
