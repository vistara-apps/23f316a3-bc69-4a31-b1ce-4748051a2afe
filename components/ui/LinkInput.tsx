'use client';

import { useState } from 'react';
import { LinkInputProps } from '@/lib/types';
import { isValidUrl } from '@/lib/utils';
import { Button } from './Button';

export function LinkInput({ onScan, isLoading, placeholder = "Paste Link Here" }: LinkInputProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }
    
    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }
    
    setError('');
    onScan(url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (error) setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="url"
          value={url}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`input ${error ? 'border-danger focus:ring-danger' : ''}`}
          disabled={isLoading}
          maxLength={2048}
        />
        {error && (
          <p className="mt-2 text-sm text-danger">{error}</p>
        )}
      </div>
      
      <Button
        type="submit"
        variant="primary"
        loading={isLoading}
        disabled={!url.trim() || isLoading}
        className="w-full"
      >
        {isLoading ? 'Scanning...' : 'Check Link'}
      </Button>
    </form>
  );
}
