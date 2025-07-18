import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts } from "../../lib/blog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <article>
            <header className="mb-8">
              <div className="mb-4">
                <Badge className="mb-4">{post.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{post.author.name}</div>
                    <div className="text-sm text-gray-600">{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, "<br />").replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>"),
                }}
              />
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  )
}
