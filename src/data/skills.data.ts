export interface SkillCategory {
  title: string
  items: string[]
}

export const skillsData: SkillCategory[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript'] },
  { title: 'Frameworks', items: ['React', 'Next.js'] },
  { title: 'Styling', items: ['Tailwind CSS'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VSCode','postman'] },
  {
    title: 'Currently Learning',
    items: ['Node.js', 'Deployment', 'Basic Security'],
  },
]
