import { Suspense } from "react"
import AdminDashboard from "./components/AdminDashboard"
import AuthGuard from "../components/AuthGuard"
import AdminHeader from "../components/AdminHeader"

export default function AdminPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
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
    </AuthGuard>
  )
}
