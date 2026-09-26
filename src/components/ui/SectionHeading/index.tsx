import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  action?: ReactNode
}

export default function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="whitespace-nowrap text-2xl font-bold text-white">
        <span className="text-primary">#</span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-primary/40" />
      {action}
    </div>
  )
}