"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import type { Project } from "../../lib/types"

interface ProjectFormProps {
  project?: Project | null
  onClose: () => void
}

export default function ProjectForm({ project, onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    technologies: project?.technologies.join(", ") || "",
    liveUrl: project?.liveUrl || "",
    githubUrl: project?.githubUrl || "",
    image: project?.image || "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
      }

      const url = project ? `/api/projects/${project.id}` : "/api/projects"
      const method = project ? "PUT" : "POST"

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      })

      onClose()
    } catch (error) {
      console.error("Error saving project:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{project ? "Edit Project" : "Add New Project"}</CardTitle>
              <CardDescription>
                {project ? "Update your project details" : "Add a new project to your portfolio"}
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="technologies">Technologies (comma-separated)</Label>
              <Input
                id="technologies"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                placeholder="React, Next.js, TypeScript, Tailwind CSS"
                required
              />
            </div>

            <div>
              <Label htmlFor="liveUrl">Live URL (optional)</Label>
              <Input
                id="liveUrl"
                type="url"
                value={formData.liveUrl}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                placeholder="https://your-project.com"
              />
            </div>

            <div>
              <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
              <Input
                id="githubUrl"
                type="url"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/username/repo"
              />
            </div>

            <div>
              <Label htmlFor="image">Image URL (optional)</Label>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button type="submit" disabled={loading} className="bg-gray-900 hover:bg-black">
                {loading ? "Saving..." : project ? "Update Project" : "Add Project"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
