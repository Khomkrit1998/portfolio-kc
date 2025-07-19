import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "../lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-800">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg?height=200&width=400"}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-100 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {project.liveUrl && (
          <Button
            asChild
            className="flex-1 bg-gray-900 hover:bg-black dark:bg-gray-100 dark:text-black dark:hover:bg-white"
          >
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button
            asChild
            variant="outline"
            className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
          >
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
