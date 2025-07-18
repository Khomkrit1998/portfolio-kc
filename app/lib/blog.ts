"use client"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  category: string
  tags: string[]
  image: string
  publishedAt: Date
  readTime: number
  featured: boolean
}

export interface BlogInput {
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  category: string
  tags: string[]
  image: string
  readTime: number
  featured: boolean
}

// In-memory storage for demo purposes
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    slug: "building-scalable-react-applications-typescript",
    excerpt:
      "Learn how to structure and build maintainable React applications using TypeScript, modern patterns, and best practices.",
    content: `# Building Scalable React Applications with TypeScript

TypeScript has become an essential tool for building robust React applications. In this comprehensive guide, we'll explore the best practices and patterns for creating scalable React applications.

## Why TypeScript?

TypeScript provides several benefits for React development:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Easier Refactoring**: Confident code changes

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
  components/
    ui/
    forms/
    layout/
  hooks/
  lib/
  types/
  utils/
\`\`\`

## Component Patterns

### 1. Compound Components

Compound components provide a flexible API for complex UI elements:

\`\`\`tsx
interface TabsProps {
  children: React.ReactNode
  defaultValue?: string
}

export function Tabs({ children, defaultValue }: TabsProps) {
  // Implementation
}

Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent
\`\`\`

### 2. Custom Hooks

Extract logic into reusable custom hooks:

\`\`\`tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
\`\`\`

## Conclusion

Building scalable React applications with TypeScript requires careful planning and adherence to best practices. By following these patterns and principles, you can create maintainable and robust applications.`,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder-user.jpg",
      role: "Senior Frontend Developer",
    },
    category: "Frontend",
    tags: ["React", "TypeScript", "Architecture", "Best Practices"],
    image: "/placeholder.svg?height=400&width=800",
    publishedAt: new Date("2024-01-15"),
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Microservices Architecture: A Complete Guide",
    slug: "microservices-architecture-complete-guide",
    excerpt:
      "Explore the fundamentals of microservices architecture, including design patterns, communication strategies, and deployment considerations.",
    content: `# Microservices Architecture: A Complete Guide

Microservices architecture has revolutionized how we build and deploy applications. This guide covers everything you need to know about implementing microservices effectively.

## What are Microservices?

Microservices are a software development technique that structures an application as a collection of loosely coupled services. Each service is:

- **Independently deployable**
- **Organized around business capabilities**
- **Owned by a small team**
- **Highly maintainable and testable**

## Benefits of Microservices

### 1. Scalability
Scale individual services based on demand rather than scaling the entire application.

### 2. Technology Diversity
Use different technologies and programming languages for different services.

### 3. Fault Isolation
Failures in one service don't necessarily bring down the entire system.

## Design Patterns

### API Gateway Pattern
\`\`\`
Client → API Gateway → Service A
                   → Service B
                   → Service C
\`\`\`

### Circuit Breaker Pattern
Prevent cascading failures by monitoring service health and failing fast when services are unavailable.

### Saga Pattern
Manage distributed transactions across multiple services.

## Communication Strategies

### Synchronous Communication
- REST APIs
- GraphQL
- gRPC

### Asynchronous Communication
- Message queues (RabbitMQ, Apache Kafka)
- Event-driven architecture
- Pub/Sub patterns

## Deployment Considerations

### Containerization
Use Docker to package services with their dependencies.

### Orchestration
Kubernetes for managing containerized applications at scale.

### Monitoring
Implement comprehensive logging, metrics, and tracing.

## Conclusion

Microservices architecture offers significant benefits but also introduces complexity. Success requires careful planning, proper tooling, and a mature DevOps culture.`,
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder-user.jpg",
      role: "Lead Backend Developer",
    },
    category: "Backend",
    tags: ["Microservices", "Architecture", "DevOps", "Scalability"],
    image: "/placeholder.svg?height=400&width=800",
    publishedAt: new Date("2024-01-10"),
    readTime: 12,
    featured: true,
  },
  {
    id: "3",
    title: "Content Marketing Strategies for Tech Companies",
    slug: "content-marketing-strategies-tech-companies",
    excerpt:
      "Discover effective content marketing strategies specifically tailored for technology companies to build authority and drive growth.",
    content: `# Content Marketing Strategies for Tech Companies

Content marketing is crucial for tech companies looking to establish thought leadership and drive sustainable growth. Here's how to create a winning content strategy.

## Understanding Your Audience

### Developer Personas
- **The Pragmatist**: Wants practical solutions
- **The Explorer**: Interested in cutting-edge technology
- **The Decision Maker**: Focuses on business value

### Content Preferences
- Technical tutorials and guides
- Case studies and success stories
- Industry insights and trends
- Tool comparisons and reviews

## Content Types That Work

### 1. Technical Blog Posts
Deep-dive articles that solve real problems developers face.

### 2. Video Tutorials
Step-by-step guides that show rather than tell.

### 3. Interactive Demos
Let users experience your product firsthand.

### 4. Whitepapers and eBooks
Comprehensive resources that establish authority.

## Distribution Channels

### Owned Media
- Company blog
- Email newsletters
- Social media profiles

### Earned Media
- Guest posting
- Podcast appearances
- Speaking at conferences

### Paid Media
- Sponsored content
- Social media advertising
- Search engine marketing

## Measuring Success

### Key Metrics
- **Traffic**: Organic search traffic growth
- **Engagement**: Time on page, bounce rate
- **Conversion**: Lead generation, sign-ups
- **Brand Awareness**: Share of voice, mentions

### Tools for Measurement
- Google Analytics
- SEMrush or Ahrefs
- Social media analytics
- Marketing automation platforms

## Best Practices

### 1. Consistency is Key
Maintain a regular publishing schedule to build audience expectations.

### 2. Quality Over Quantity
Focus on creating valuable, well-researched content rather than publishing frequently.

### 3. Optimize for Search
Use keyword research to guide content creation and improve discoverability.

### 4. Engage with Your Community
Respond to comments, participate in discussions, and build relationships.

## Conclusion

Effective content marketing for tech companies requires understanding your audience, creating valuable content, and measuring results. Focus on solving real problems and building trust with your community.`,
    author: {
      name: "David Kim",
      avatar: "/placeholder-user.jpg",
      role: "Digital Marketing Manager",
    },
    category: "Marketing",
    tags: ["Content Marketing", "Strategy", "Growth", "Tech"],
    image: "/placeholder.svg?height=400&width=800",
    publishedAt: new Date("2024-01-05"),
    readTime: 10,
    featured: false,
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 100))
  return blogPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.featured)
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export async function addBlogPost(postData: BlogInput): Promise<BlogPost> {
  const newPost: BlogPost = {
    id: Date.now().toString(),
    ...postData,
    publishedAt: new Date(),
  }
  blogPosts.unshift(newPost)
  return newPost
}

export async function updateBlogPost(id: string, postData: Partial<BlogInput>): Promise<BlogPost> {
  const index = blogPosts.findIndex((p) => p.id === id)
  if (index === -1) {
    throw new Error("Blog post not found")
  }

  blogPosts[index] = {
    ...blogPosts[index],
    ...postData,
  }

  return blogPosts[index]
}

export async function deleteBlogPost(id: string): Promise<void> {
  const index = blogPosts.findIndex((p) => p.id === id)
  if (index === -1) {
    throw new Error("Blog post not found")
  }

  blogPosts.splice(index, 1)
}
