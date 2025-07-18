"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import type { BlogPost } from "../../lib/blog"
import BlogForm from "./BlogForm"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BlogDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/blog")
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    try {
      await fetch(`/api/blog/${id}`, { method: "DELETE" })
      fetchPosts()
    } catch (error) {
      console.error("Error deleting post:", error)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingPost(null)
    fetchPosts()
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date))
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
          <p className="text-gray-600 mt-2">Manage your blog content and insights</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)} className="bg-gray-900 hover:bg-black">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-gray-500 text-lg mb-4">No blog posts yet</p>
            <Button onClick={() => setIsFormOpen(true)} className="bg-gray-900 hover:bg-black">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Post
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.featured && <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>}
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(post)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>By {post.author.name}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <span>{post.readTime} min read</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {isFormOpen && <BlogForm post={editingPost} onClose={handleFormClose} />}
    </div>
  )
}
