# LinkGuardian

A Base Mini App for instantly detecting scam and phishing links within the Farcaster ecosystem.

## Features

- **Real-time Link Scanner**: Paste any URL for instant security analysis
- **Scam Pattern Detection**: Advanced pattern matching against known threats
- **Confidence Scoring**: Get detailed confidence levels for each scan
- **Mobile-First Design**: Optimized for Base App and mobile usage
- **Freemium Model**: Free daily scans with premium batch processing

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Integration**: MiniKit for Base Mini App functionality
- **TypeScript**: Full type safety throughout
- **Icons**: Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

```env
NEXT_PUBLIC_MINIKIT_API_KEY=your_minikit_api_key
```

## API Endpoints

- `POST /api/scan` - Scan a single URL for threats
- `POST /api/batch-scan` - Batch scan multiple URLs (premium)
- `GET /api/user/stats` - Get user scan statistics

## Design System

The app uses a custom dark theme with the following color palette:

- **Background**: `hsl(220 20% 15%)`
- **Foreground**: `hsl(220 10% 90%)`
- **Accent**: `hsl(170 80% 45%)`
- **Primary**: `hsl(240 90% 50%)`
- **Success**: `hsl(140 70% 50%)`
- **Danger**: `hsl(0 80% 60%)`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
