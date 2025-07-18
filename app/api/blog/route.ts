import { type NextRequest, NextResponse } from "next/server"
import { getBlogPosts, addBlogPost } from "../../lib/blog"

export async function GET() {
  try {
    const posts = await getBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json()
    const newPost = await addBlogPost(postData)
    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error("Error adding blog post:", error)
    return NextResponse.json({ error: "Failed to add blog post" }, { status: 500 })
  }
}
