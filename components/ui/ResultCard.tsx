'use client';

import { ResultCardProps } from '@/lib/types';
import { formatUrl } from '@/lib/utils';
import { Shield, ShieldAlert, Clock } from 'lucide-react';

export function ResultCard({ result, url, isLoading }: ResultCardProps) {
  if (isLoading) {
    return (
      <div className="card">
        <div className="flex items-center justify-center space-x-3">
          <Clock className="w-6 h-6 text-accent animate-spin" />
          <span className="text-lg font-medium">Scanning URL...</span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const isSafe = result.safe;
  const IconComponent = isSafe ? Shield : ShieldAlert;
  const statusColor = isSafe ? 'text-success' : 'text-danger';
  const bgColor = isSafe ? 'bg-success/10' : 'bg-danger/10';
  const borderColor = isSafe ? 'border-success/20' : 'border-danger/20';

  return (
    <div className={`card border-2 ${borderColor} ${bgColor}`}>
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-full ${isSafe ? 'bg-success/20' : 'bg-danger/20'}`}>
          <IconComponent className={`w-8 h-8 ${statusColor}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className={`text-xl font-bold ${statusColor}`}>
              {isSafe ? 'Safe Link' : 'Dangerous Link'}
            </h3>
            <span className="text-sm text-gray-400">
              ({Math.round(result.confidence * 100)}% confidence)
            </span>
          </div>
          
          <p className="text-sm text-gray-400 mb-3 break-all">
            {formatUrl(url)}
          </p>
          
          {!isSafe && result.threats.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-danger">Detected Threats:</h4>
              <ul className="space-y-1">
                {result.threats.map((threat, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-danger rounded-full"></span>
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {isSafe && (
            <p className="text-sm text-success">
              This link appears to be safe to visit.
            </p>
          )}
          
          {result.details && (
            <div className="mt-4 pt-4 border-t border-gray-600">
              <h4 className="font-medium text-gray-300 mb-2">Additional Details:</h4>
              <div className="text-sm text-gray-400 space-y-1">
                {result.details.domain && (
                  <p>Domain: {result.details.domain}</p>
                )}
                {result.details.reputation !== undefined && (
                  <p>Reputation Score: {result.details.reputation}/100</p>
                )}
                {result.details.categories && result.details.categories.length > 0 && (
                  <p>Categories: {result.details.categories.join(', ')}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
