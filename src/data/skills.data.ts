export interface SkillCategory {
  title: string
  items: string[]
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Javascript', '-', 'TypeScript', '-', 'Python'],
  },
  { title: 'Frameworks', items: ['React.js', '-', 'Next.js'] },
  { title: 'Styling', items: ['Tailwind CSS ', '-', 'Bootstrap'] },
  {
    title: 'Tools',
    items: ['Git', '-', 'GitHub', '-', 'VSCode', '-', 'postman'],
  },
  { title: 'State Management', items: ['Redux', '-', 'Zustand'] },
  { title: 'Design', items: ['Figma', '-', 'Canva'] },
  {
    title: 'Currently Learning',
    items: [
      'Ai tools - vibe coding',
      '-',
      'Deployment',
      '-',
      'Basic Linux',
      '-',
      'Network Fundamentals',
      '-',
      'Basic Security',
      '-',
      'Testing',
    ],
  },
]
