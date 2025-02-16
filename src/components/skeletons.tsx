"use client";
// Loading animation
export const HomeSliderSkeleton = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-800 animate-pulse rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
      <div className="absolute bottom-8 left-8">
        <div className="h-8 w-2/3 bg-gray-700 rounded mb-2 animate-pulse"></div>
        <div className="flex items-center space-x-2">
          <span className="h-4 w-8 bg-gray-700 rounded animate-pulse"></span>
          <span className="h-4 w-6 bg-gray-700 rounded animate-pulse"></span>
          <span className="h-4 w-12 bg-gray-700 rounded animate-pulse"></span>
        </div>
        <div className="mt-4 h-12 w-full bg-gray-700 rounded animate-pulse"></div>
        <div className="mt-4 flex space-x-4">
          <div className="h-10 w-32 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-10 w-40 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const MovieGridSkeleton = () => {
  return (
    <div className="p-4">
      {/* Filter options */}
      <div className="flex space-x-4 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-32 bg-gray-700 rounded animate-pulse"
          ></div>
        ))}
        <div className="h-10 w-40 bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[400px] bg-gray-800 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};
