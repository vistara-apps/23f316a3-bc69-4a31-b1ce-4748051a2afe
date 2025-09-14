'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container">
        <div className="card text-center">
          <div className="text-danger text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-gray-400 mb-6">
            {error.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
