'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { LinkInput } from '@/components/ui/LinkInput';
import { ResultCard } from '@/components/ui/ResultCard';
import { Notification } from '@/components/ui/Notification';
import { ScanResult, ApiResponse } from '@/lib/types';

export default function HomePage() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [notification, setNotification] = useState<{
    type: 'info' | 'warning' | 'success' | 'error';
    message: string;
  } | null>(null);

  const handleScan = async (url: string) => {
    setIsScanning(true);
    setCurrentUrl(url);
    setScanResult(null);
    setNotification(null);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data: ApiResponse<ScanResult> = await response.json();

      if (data.success && data.data) {
        setScanResult(data.data);
        
        // Show notification based on result
        if (!data.data.safe) {
          setNotification({
            type: 'error',
            message: 'Warning: This link appears to be dangerous!'
          });
        } else {
          setNotification({
            type: 'success',
            message: 'Great! This link appears to be safe.'
          });
        }
      } else {
        setNotification({
          type: 'error',
          message: data.error || 'Failed to scan URL'
        });
      }
    } catch (error) {
      console.error('Scan error:', error);
      setNotification({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsScanning(false);
    }
  };

  const handleNewScan = () => {
    setScanResult(null);
    setCurrentUrl('');
    setNotification(null);
  };

  return (
    <AppShell>
      {/* Main Scanner Interface */}
      <div className="card max-w-md mx-auto">
        <LinkInput
          onScan={handleScan}
          isLoading={isScanning}
          placeholder="Paste Link Here"
        />
      </div>

      {/* Notification */}
      {notification && (
        <div className="max-w-md mx-auto">
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        </div>
      )}

      {/* Scan Results */}
      {(isScanning || scanResult) && (
        <div className="max-w-md mx-auto">
          <ResultCard
            result={scanResult}
            url={currentUrl}
            isLoading={isScanning}
          />
        </div>
      )}

      {/* New Scan Button */}
      {scanResult && !isScanning && (
        <div className="text-center">
          <button
            onClick={handleNewScan}
            className="btn-secondary"
          >
            Scan Another Link
          </button>
        </div>
      )}

      {/* Info Section */}
      <div className="card max-w-md mx-auto bg-slate-800/50">
        <h3 className="font-bold text-lg mb-3 text-teal-400">How it works</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Paste any URL to check for scam and phishing patterns</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Get instant security assessment with confidence scores</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>Free tier includes 10 scans per day</span>
          </li>
        </ul>
      </div>
    </AppShell>
  );
}
