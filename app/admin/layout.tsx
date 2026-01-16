import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Sidebar from "@/components/admin/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function AdminDashboardLayout({ children }: DashboardLayoutProps) {
  const session = await auth()

  console.log('Admin Dashboard Layout - Session:', session);
  

  if (!session) {
    redirect("/auth/signin")
  }

  if (session.user.role !== "admin") {
    redirect("/") // Redirect non-admin users to home
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar Column */}
        <div>
          <Sidebar />
        </div>
        
        {/* Main Content Column */}
        <div className="flex flex-col">
          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
