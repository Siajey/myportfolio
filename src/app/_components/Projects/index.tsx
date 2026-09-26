import { Suspense } from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import DotGrid from '@/components/ui/DotGrid'
import ProjectsList from './ProjectsList'
import ProjectsSkeleton from './ProjectsSkeleton'

export default function Projects() {
  return (
    <section className="container relative mx-auto px-4 py-24">
      <DotGrid className="absolute -left-2 top-2 hidden lg:grid" />
      <div
        className="absolute -right-16 top-1/3 hidden h-20 w-10 -translate-y-1/2
          translate-x-1/2 border border-gray/20 lg:block"
      />

      <SectionHeading
        title="projects"
        action={
          <Link
            href="/works"
            className="whitespace-nowrap text-sm text-gray transition hover:text-primary"
          >
            View all
          </Link>
        }
      />

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsList />
      </Suspense>
    </section>
  )
}