export interface ProjectContent {
  title: string
  description: string
  techStack: string[]
}

export const projectsContent: ProjectContent[] = [
  {
    title: 'Project One',
    description: 'یه توضیح کوتاه جای‌خالی، بعداً با توضیح واقعی پروژه‌ت جایگزینش می‌کنی.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Project Two',
    description: 'یه توضیح کوتاه جای‌خالی، بعداً با توضیح واقعی پروژه‌ت جایگزینش می‌کنی.',
    techStack: ['React', 'Node.js'],
  },
  {
    title: 'Project Three',
    description: 'یه توضیح کوتاه جای‌خالی، بعداً با توضیح واقعی پروژه‌ت جایگزینش می‌کنی.',
    techStack: ['Next.js', 'Prisma'],
  },
]