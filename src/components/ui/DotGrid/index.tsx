import { cn } from '@/lib/utils'

interface DotGridProps {
  className?: string
}

export default function DotGrid({ className }: DotGridProps) {
  return (
    <div className={cn('grid grid-cols-4 gap-1.5', className)}>
      {Array.from({ length: 16 }).map((_, index) => (
        <span key={index} className='size-1 rounded-full bg-gray/40' />
      ))}
    </div>
  )
}
