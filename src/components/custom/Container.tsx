import { cn } from '@/lib/utils'

export default function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('max-w-full mx-auto h-full w-full px-6 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
