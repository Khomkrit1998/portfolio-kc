"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black text-white">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 dark:bg-white/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-white/30 dark:bg-white/40 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-3 h-3 bg-white/10 dark:bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 right-40 w-1.5 h-1.5 bg-white/25 dark:bg-white/35 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-white/15 dark:bg-white/25 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-300/20 dark:from-white/30 dark:to-gray-200/30 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Development Team Avatar"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white/20 dark:border-white/30 shadow-2xl transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 dark:bg-green-400 rounded-full border-4 border-gray-900 dark:border-gray-950 animate-pulse"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-200 bg-clip-text text-transparent animate-fade-in">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-8 leading-relaxed animate-fade-in-delay">
            Full-Stack Developer crafting exceptional web experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-2">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 dark:bg-gray-100 dark:text-black dark:hover:bg-white transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-black bg-transparent transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/admin">Manage Projects</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6 animate-fade-in-delay-3">
            <Link
              href="https://github.com"
              className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-300" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
      `}</style>
    </section>
  )
}
