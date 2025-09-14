'use client';

import { NotificationProps } from '@/lib/types';
import { X, Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

export function Notification({ type, message, onClose }: NotificationProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertCircle
  };

  const colors = {
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    success: 'bg-success/10 border-success/20 text-success',
    error: 'bg-danger/10 border-danger/20 text-danger'
  };

  const IconComponent = icons[type];

  return (
    <div className={`flex items-start space-x-3 p-4 rounded-md border ${colors[type]}`}>
      <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <p className="flex-1 text-sm">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
