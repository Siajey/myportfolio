import { notFound } from 'next/navigation'
import Pagination from '@/components/Pagination'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/services/projects/projects.service'

interface WorksListProps {
  page: number
}

export default async function WorksList({ page }: WorksListProps) {
  const { items, totalPages } = await getProjects(page)

  if (totalPages > 0 && page > totalPages) {
    notFound()
  }

  return (
    <>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} basePath="/works" />
    </>
  )
}