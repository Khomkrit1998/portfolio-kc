import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "../lib/blog"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  if (featured) {
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-black/80 text-white">{post.category}</Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </CardTitle>
          <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-black/80 text-white text-xs">{post.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2 text-sm">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}m</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
