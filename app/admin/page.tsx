import { Suspense } from "react"
import AdminDashboard from "./components/AdminDashboard"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Project Management</h1>
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Suspense
          fallback={
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          }
        >
          <AdminDashboard />
        </Suspense>
      </main>
    </div>
  )
}
