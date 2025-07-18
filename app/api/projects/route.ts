import { type NextRequest, NextResponse } from "next/server"
import { getProjects, addProject } from "../../lib/projects"

export async function GET() {
  try {
    const projects = await getProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const projectData = await request.json()
    const newProject = await addProject(projectData)
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    console.error("Error adding project:", error)
    return NextResponse.json({ error: "Failed to add project" }, { status: 500 })
  }
}
