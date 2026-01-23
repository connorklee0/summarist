export default function BookPageSkeleton() {
  return (
    <div className="container">
      <div className="row flex">
        <div className="flex flex-col gap-4 w-[70%] pr-4 animate-pulse">
          <div className="h-12 bg-gray-300 rounded w-3/4"></div>
          <div className="h-7 bg-gray-300 rounded w-1/2"></div>
          <div className="h-7 bg-gray-300 rounded w-2/3"></div>
          <div className="border-b border-[#ced4d7]"></div>

          {/* BookDetails skeleton */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-4">
              <div className="h-6 bg-gray-300 rounded w-40"></div>
              <div className="h-6 bg-gray-300 rounded w-32"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-6 bg-gray-300 rounded w-24"></div>
              <div className="h-6 bg-gray-300 rounded w-36"></div>
            </div>
          </div>

          <div className="border-b border-[#ced4d7]"></div>

          {/* Buttons skeleton */}
          <div className="flex gap-4">
            <div className="h-12 bg-gray-300 rounded w-32"></div>
            <div className="h-12 bg-gray-300 rounded w-32"></div>
          </div>

          <div className="h-6 bg-gray-300 rounded w-56"></div>

          <div className="h-8 bg-gray-300 rounded w-40"></div>

          {/* Tags skeleton */}
          <div className="flex gap-4">
            <div className="h-10 bg-gray-300 rounded w-24"></div>
            <div className="h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-10 bg-gray-300 rounded w-28"></div>
          </div>

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>

          <div className="h-8 bg-gray-300 rounded w-40"></div>

          {/* Author description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>

        {/* Image skeleton */}
        <div className="w-70 h-70 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
