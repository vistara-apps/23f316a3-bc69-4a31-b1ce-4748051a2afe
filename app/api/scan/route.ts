import { NextRequest, NextResponse } from 'next/server';
import { ScanResult, ApiResponse } from '@/lib/types';
import { isValidUrl, extractDomain, checkScamPatterns, delay } from '@/lib/utils';
import { DEMO_SCAM_PATTERNS } from '@/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Validate input
    if (!url || typeof url !== 'string') {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'URL is required'
      }, { status: 400 });
    }

    if (!isValidUrl(url)) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Invalid URL format'
      }, { status: 400 });
    }

    // Simulate processing delay for better UX
    await delay(1500);

    // Extract domain for analysis
    const domain = extractDomain(url);
    
    // Check against known scam patterns
    const { isScam, matchedPatterns } = checkScamPatterns(url, DEMO_SCAM_PATTERNS);
    
    // Generate scan result
    const result: ScanResult = {
      safe: !isScam,
      confidence: isScam ? 0.85 + Math.random() * 0.1 : 0.75 + Math.random() * 0.2,
      threats: isScam ? matchedPatterns.map(p => `Suspicious ${p.patternType} pattern detected`) : [],
      details: {
        domain,
        reputation: isScam ? Math.floor(Math.random() * 30) : 70 + Math.floor(Math.random() * 30),
        categories: isScam ? ['Phishing', 'Malicious'] : ['Safe', 'Legitimate'],
        lastSeen: new Date()
      }
    };

    // Additional checks for common suspicious patterns
    if (!isScam) {
      const suspiciousDomains = ['bit.ly', 'tinyurl.com', 'short.link'];
      const isSuspiciousDomain = suspiciousDomains.some(d => domain.includes(d));
      
      if (isSuspiciousDomain) {
        result.safe = false;
        result.confidence = 0.6;
        result.threats.push('Shortened URL - exercise caution');
        result.details!.categories = ['URL Shortener', 'Potentially Risky'];
      }
    }

    return NextResponse.json<ApiResponse<ScanResult>>({
      success: true,
      data: result,
      message: 'URL scan completed successfully'
    });

  } catch (error) {
    console.error('Scan API error:', error);
    
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Internal server error during scan'
    }, { status: 500 });
  }
}
