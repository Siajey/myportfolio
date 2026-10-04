import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/services/projects/projects.service'

export default async function ProjectsList() {
  const { items } = await getProjects(1, 3)

  return (
    <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}