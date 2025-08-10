import { Skeleton } from '@/components/ui/skeleton'

export default function NewsListSkeleton({ length = 6 }: { length?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="w-full h-48 rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}
