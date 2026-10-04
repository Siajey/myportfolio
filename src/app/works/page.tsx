import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProjectsSkeleton from '@/components/ProjectsSkeleton'
import SectionHeading from '@/components/ui/SectionHeading'
import { PROJECTS_PER_PAGE } from '@/services/projects/projects.service'
import WorksList from './_components/WorkList'

export const metadata: Metadata = {
  title: 'Works | Jey',
  description: 'A collection of projects I have built',
}

interface WorksPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const { page } = await searchParams
  const currentPage = Math.max(1, Math.floor(Number(page)) || 1)

  return (
    <main className="container mx-auto px-4 pb-24 pt-32">
      <SectionHeading title="works" />

      <Suspense key={currentPage} fallback={<ProjectsSkeleton count={PROJECTS_PER_PAGE} />}>
        <WorksList page={currentPage} />
      </Suspense>
    </main>
  )
}