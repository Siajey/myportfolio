import type { PaginatedResult } from '@/types/pagination'
import type { Project } from '@/types/project'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const PROJECTS_PER_PAGE = 6

interface ApiPost {
  id: number
  userId: number
  title: string
  body: string
}

interface ApiUser {
  id: number
  username: string
  website: string
}

const techStacks: string[][] = [
  ['Next.js', 'TypeScript', 'Tailwind'],
  ['React', 'Node.js'],
  ['Next.js', 'Prisma'],
  ['React', 'Firebase'],
  ['TypeScript', 'MongoDB'],
]

export async function getProjects(
  page = 1,
  limit = PROJECTS_PER_PAGE
): Promise<PaginatedResult<Project>> {
  const [postsResponse, usersResponse] = await Promise.all([
    fetch(`${API_URL}/posts?_page=${page}&_limit=${limit}`),
    fetch(`${API_URL}/users`),
  ])

  if (!postsResponse.ok || !usersResponse.ok) {
    throw new Error('Failed to fetch project data')
  }

  const posts: ApiPost[] = await postsResponse.json()
  const users: ApiUser[] = await usersResponse.json()
  const total = Number(postsResponse.headers.get('x-total-count') ?? posts.length)

  const projects: Project[] = posts.map((post) => {
    const user = users.find((item) => item.id === post.userId)

    return {
      id: String(post.id),
      title: post.title,
      description: post.body,
      techStack: techStacks[post.id % techStacks.length],
      imageUrl: `https://placehold.co/600x400/1E1E2A/C778DD?text=Project+${post.id}`,
      liveUrl: user ? `https://${user.website}` : undefined,
      githubUrl: user ? `https://github.com/${user.username}` : undefined,
    }
  })

  return { items: projects, total, page, totalPages: Math.ceil(total / limit) }
}