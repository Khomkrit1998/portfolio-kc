import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getFeaturedPosts } from "../lib/blog"
import BlogCard from "./BlogCard"

export default async function BlogSection() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge, best practices, and insights from our development and marketing journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.slice(0, 2).map((post) => (
            <BlogCard key={post.id} post={post} featured />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gray-900 hover:bg-black">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
