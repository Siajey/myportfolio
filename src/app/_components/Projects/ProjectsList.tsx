import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/services/projects/projects.service'

export default async function ProjectsList() {
  const projects = await getProjects()
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}