'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Activity,
  PlusCircle,
  Calendar,
  MessageSquare
} from 'lucide-react'

interface DashboardStats {
  totalUsers: number
  totalPosts: number
  publishedPosts: number
  draftPosts: number
  recentActivity: number
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    recentActivity: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch dashboard statistics
        const [usersRes, postsRes] = await Promise.all([
          fetch('/api/admin/users?limit=1'),
          fetch('/api/admin/blog?limit=1')
        ])

        const users = await usersRes.json()
        const posts = await postsRes.json()

        setStats({
          totalUsers: users.pagination?.total || 0,
          totalPosts: posts.pagination?.total || 0,
          publishedPosts: posts.publishedCount || 0,
          draftPosts: posts.draftCount || 0,
          recentActivity: users.pagination?.total || 0
        })
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    if (session) {
      fetchStats()
    }
  }, [session])

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!session || session.user?.role !== 'admin') {
    return <div className="flex items-center justify-center min-h-screen">Access denied</div>
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl text-foreground">
          Welcome back, {session.user?.name}
        </h1>
        <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your platform today.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 hover:shadow-lg transition-all group bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <Link href="/admin/blog/new">
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <PlusCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Create New Post
                  </h3>
                  <p className="text-muted-foreground text-sm">Write a new blog post</p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-0 hover:shadow-lg transition-all group bg-gradient-to-br from-accent/10 to-transparent">
          <CardContent className="p-6">
            <Link href="/admin/users">
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Manage Users
                  </h3>
                  <p className="text-muted-foreground text-sm">View and edit users</p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-0 hover:shadow-lg transition-all group bg-gradient-to-br from-secondary/10 to-transparent">
          <CardContent className="p-6">
            <Link href="/admin/content/homepage">
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Settings className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Site Settings
                  </h3>
                  <p className="text-muted-foreground text-sm">Configure homepage</p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {loading ? '...' : stats.totalUsers}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Total Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {loading ? '...' : stats.totalPosts}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              Published
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {loading ? '...' : stats.publishedPosts}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Drafts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-muted-foreground">
              {loading ? '...' : stats.draftPosts}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm text-muted-foreground">New user registrations</span>
                <span className="font-semibold text-primary">{stats.totalUsers}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm text-muted-foreground">Blog posts published</span>
                <span className="font-semibold text-green-600 dark:text-green-400">{stats.publishedPosts}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm text-muted-foreground">Draft posts</span>
                <span className="font-semibold text-muted-foreground">{stats.draftPosts}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <MessageSquare className="w-5 h-5 mr-2 text-primary" />
              Quick Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Link href="/admin/blog">
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Manage Blog Posts
                </Button>
              </Link>
              <Link href="/admin/users">
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  User Management
                </Button>
              </Link>
              <Link href="/admin/form-responses">
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Form Responses
                </Button>
              </Link>
              <Link href="/admin/settings">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
