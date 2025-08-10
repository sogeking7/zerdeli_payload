import { Skeleton } from '@/components/ui/skeleton'

export default function NewsContentSkeleton() {
  return (
    <div className="mt-8 md:mt-10 flex flex-col lg:flex-row gap-16">
      {/* Main content skeleton */}
      <div className="w-full lg:w-2/3 space-y-6">
        <Skeleton className="w-full h-[300px] md:h-[460px] rounded-2xl" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>

      {/* Sidebar skeleton */}
      <div className="w-full lg:w-1/3 space-y-6">
        <Skeleton className="h-6 w-40" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="w-full h-24 rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  )
}
