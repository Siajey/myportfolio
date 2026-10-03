import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { getPageNumbers } from '@/lib/pagination'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

const itemStyle =
  'flex size-9 items-center justify-center border text-sm transition duration-200'

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = getPageNumbers(currentPage, totalPages)
  const linkFor = (page: number) => `${basePath}?page=${page}`

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={linkFor(currentPage - 1)}
          aria-label="Previous page"
          className={cn(itemStyle, 'border-gray/20 text-gray hover:text-primary')}
        >
          <ChevronLeft className="size-4" />
        </Link>
      )}

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-1 text-gray">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={linkFor(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={cn(
              itemStyle,
              page === currentPage
                ? 'border-primary text-primary'
                : 'border-gray/20 text-gray hover:text-primary'
            )}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={linkFor(currentPage + 1)}
          aria-label="Next page"
          className={cn(itemStyle, 'border-gray/20 text-gray hover:text-primary')}
        >
          <ChevronRight className="size-4" />
        </Link>
      )}
    </nav>
  )
}