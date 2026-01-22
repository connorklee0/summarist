export default function BookDisplaySkeleton() {
  return (
    <div className="flex flex-col mr-8 gap-1 p-4 animate-pulse">
      <div className="relative w-40 h-40 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-300 rounded w-full mt-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="flex gap-3 mt-1">
        <div className="h-4 bg-gray-300 rounded w-16"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
    </div>
  );
}
