// User entity
export interface User {
  farcasterId: string;
  scanLimit: number;
  premiumStatus: boolean;
  lastScanTimestamp: Date;
}

// Scan entity
export interface Scan {
  scanId: string;
  userId: string;
  url: string;
  timestamp: Date;
  result: ScanResult;
  isScam: boolean;
  scamType?: string;
}

// ScamPattern entity
export interface ScamPattern {
  patternId: string;
  patternString: string;
  patternType: 'domain' | 'path' | 'parameter' | 'content';
  lastUpdated: Date;
}

// Scan result types
export interface ScanResult {
  safe: boolean;
  confidence: number;
  threats: string[];
  details?: {
    domain?: string;
    reputation?: number;
    categories?: string[];
    lastSeen?: Date;
  };
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Component prop types
export interface LinkInputProps {
  onScan: (url: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export interface ResultCardProps {
  result: ScanResult | null;
  url: string;
  isLoading: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface NotificationProps {
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
  onClose?: () => void;
}
