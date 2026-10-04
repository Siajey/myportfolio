import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/types/project'
import ExpandableText from '@/components/ExpandableText'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='flex min-w-0 cursor-pointer flex-col border border-gray/20'>
      <div className='relative aspect-video bg-gray/10'>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          unoptimized
          className='object-cover'
        />
      </div>

      <div className='border-t border-gray/20 px-4 py-2 text-xs text-gray'>
        {project.techStack.join(' ')}
      </div>

      <div className='flex flex-1 flex-col gap-2 p-4'>
        <h3 className='truncate text-lg font-semibold text-white'>{project.title}</h3>
        <ExpandableText text={project.description} className='flex-1' />

        {project.caseStudy && (
          <div className='space-y-2 border-t border-gray/20 pt-3 text-xs'>
            <p className='text-gray'>
              <span className='font-semibold text-primary'>Problem: </span>
              {project.caseStudy.problem}
            </p>
            <p className='text-gray'>
              <span className='font-semibold text-primary'>Impact: </span>
              {project.caseStudy.impact}
            </p>
          </div>
        )}

        <div className='mt-2 flex gap-2'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              className='rounded-md border border-primary/50 px-3 py-1.5 text-xs text-white
                transition hover:bg-primary/10'
            >
              Live
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target='_blank'
              className='rounded-md border border-gray/30 px-3 py-1.5 text-xs text-gray
                transition hover:text-white'
            >
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
