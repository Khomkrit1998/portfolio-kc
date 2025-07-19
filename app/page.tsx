import { Suspense } from "react"
import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import TeamSection from "./components/TeamSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Suspense
        fallback={
          <div className="flex justify-center py-20 bg-gray-50 dark:bg-gray-900">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        }
      >
        <ProjectsSection />
      </Suspense>
      <TeamSection />
      <Footer />
    </main>
  )
}
