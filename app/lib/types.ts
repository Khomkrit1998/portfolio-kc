export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  createdAt: Date
}

export interface ProjectInput {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}
