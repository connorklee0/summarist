export default function TrackInfoSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-600 rounded animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 w-32 bg-gray-600 rounded animate-pulse"></div>
        <div className="h-3 w-24 bg-gray-600 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
