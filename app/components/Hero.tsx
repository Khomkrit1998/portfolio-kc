import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full-Stack Developer crafting exceptional web experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link href="/admin">Manage Projects</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
