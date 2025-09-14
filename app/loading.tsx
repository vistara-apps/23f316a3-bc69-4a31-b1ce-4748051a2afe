export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container">
        <div className="card animate-pulse">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto"></div>
            <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-12 bg-gray-700 rounded"></div>
              <div className="h-10 bg-gray-700 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
