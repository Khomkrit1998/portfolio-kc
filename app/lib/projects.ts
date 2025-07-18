import type { Project, ProjectInput } from "./types"

// In-memory storage for demo purposes
// In production, replace this with a database
const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    image: "/placeholder.svg?height=200&width=400",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    image: "/placeholder.svg?height=200&width=400",
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    image: "/placeholder.svg?height=200&width=400",
    createdAt: new Date("2024-03-10"),
  },
]

export async function getProjects(): Promise<Project[]> {
  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 100))
  return projects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export async function addProject(projectData: ProjectInput): Promise<Project> {
  const newProject: Project = {
    id: Date.now().toString(),
    ...projectData,
    createdAt: new Date(),
  }
  projects.push(newProject)
  return newProject
}

export async function updateProject(id: string, projectData: ProjectInput): Promise<Project> {
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) {
    throw new Error("Project not found")
  }

  projects[index] = {
    ...projects[index],
    ...projectData,
  }

  return projects[index]
}

export async function deleteProject(id: string): Promise<void> {
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) {
    throw new Error("Project not found")
  }

  projects.splice(index, 1)
}
