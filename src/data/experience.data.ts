export interface ExperienceItem {
  company: string
  role: string
  period: string
  points: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'Lexa',
    role: 'Midlevel Front-End Developer',
    period: 'May 2024 – Present',
    points: [
      'Developed responsive NFT Dashboard using React, Next.js, and TypeScript',
      'Implement responsive layouts using Tailwind CSS for desktop, tablet, and mobile.',
      'Improving Web Application Performance with Lazy Loading and Code Splitting',
      'Develeloped and maintained reusable React components and hooks for efficient development.',
      'developed SPA webpages with React and Next.js, ensuring smooth navigation and optimal user experience.',
    ],
  },
  {
    company: 'TCM Group',
    role: 'Front-End Developer / Developer Intern',
    period: 'Jul 2022 – Apr 2024',
    points: [
      'freelance front-end developer for TCM Group, contributing to various web development projects.',
      'Connecting Web Applications to REST APIs and managing Web Application state',
      'Team collaboration using a Git-based workflow for code management.',
    ],
  },
]
