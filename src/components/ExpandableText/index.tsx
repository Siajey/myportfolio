'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ExpandableTextProps {
  text: string
  className?: string
}

export default function ExpandableText({ text, className }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isClamped, setIsClamped] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = textRef.current
    if (!element || isExpanded) return

    const observer = new ResizeObserver(() => {
      setIsClamped(element.scrollHeight > element.clientHeight)
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [text, isExpanded])

  return (
    <div className={className}>
      <p
        ref={textRef}
        className={cn('min-h-[3lh] text-sm text-gray', !isExpanded && 'line-clamp-3')}
      >
        {text}
      </p>

      <button
        type="button"
        onClick={() => setIsExpanded((previous) => !previous)}
        aria-expanded={isExpanded}
        className={cn(
          'mt-2 block h-4 text-xs leading-4 text-primary transition duration-200 hover:underline',
          !isClamped && 'invisible'
        )}
      >
        {isExpanded ? 'Less' : 'More...'}
      </button>
    </div>
  )
}