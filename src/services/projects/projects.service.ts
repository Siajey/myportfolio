import { Project } from '@/types/project'
import { projectsContent } from '@/data/projects.data'

interface PlaceholderPhoto {
  id: number
  title: string
}

interface PlaceholderUser {
  id: number
  username: string
  website: string
}

export async function getProjects(): Promise<Project[]> {
  const [photosResponse, usersResponse] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3'),
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3'),
  ])

  if (!photosResponse.ok || !usersResponse.ok) {
    throw new Error('Failed to fetch project data')
  }

  const photos: PlaceholderPhoto[] = await photosResponse.json()
  const users: PlaceholderUser[] = await usersResponse.json()

  return photos.map((photo, index) => {
    const user = users[index]

    return {
      id: String(photo.id),
      title: projectsContent[index].title,
      description: projectsContent[index].description,
      techStack: projectsContent[index].techStack,
      imageUrl: `https://placehold.co/600x400/1E1E2A/C778DD?text=Project+${photo.id}`,
      liveUrl: `https://${user.website}`,
      githubUrl: `https://github.com/${user.username}`,
    }
  })
}