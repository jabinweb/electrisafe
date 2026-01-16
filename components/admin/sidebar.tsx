'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from "@/components/admin/sidebar-logout"

interface SidebarItem {
  id: string
  label: string
  icon: string
  href: string
  children?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'admin',
    label: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    href: '/admin'
  },
  {
    id: 'bookings',
    label: 'Service Bookings',
    icon: 'fas fa-calendar-check',
    href: '/admin/bookings'
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'fas fa-users',
    href: '/admin/users'
  },
  {
    id: 'jobs',
    label: 'Jobs Management',
    icon: 'fas fa-briefcase',
    href: '/admin/jobs',
    children: [
      { id: 'all-jobs', label: 'All Jobs', icon: 'fas fa-list', href: '/admin/jobs' },
      { id: 'job-categories', label: 'Job Categories', icon: 'fas fa-tags', href: '/admin/jobs/categories' },
      { id: 'new-job', label: 'New Job', icon: 'fas fa-plus', href: '/admin/jobs/new' }
    ]
  },
  {
    id: 'blog',
    label: 'Blog Management',
    icon: 'fas fa-blog',
    href: '/admin/blog',
    children: [
      { id: 'posts', label: 'All Posts', icon: 'fas fa-file-alt', href: '/admin/blog/posts' },
      { id: 'new-post', label: 'New Post', icon: 'fas fa-plus', href: '/admin/blog/new' },
      { id: 'categories', label: 'Categories', icon: 'fas fa-tags', href: '/admin/blog/categories' }
    ]
  },
  {
    id: 'content',
    label: 'Website Content',
    icon: 'fas fa-globe',
    href: '/admin/content',
    children: [
      { id: 'homepage', label: 'Homepage', icon: 'fas fa-home', href: '/admin/content/homepage' },
      { id: 'services', label: 'Services', icon: 'fas fa-cogs', href: '/admin/content/services' },
      { id: 'about', label: 'About Page', icon: 'fas fa-info-circle', href: '/admin/content/about' },
      { id: 'testimonials', label: 'Testimonials', icon: 'fas fa-quote-right', href: '/admin/content/testimonials' }
    ]
  },
  {
    id: 'newsletter',
    label: 'Newsletter',
    icon: 'fas fa-envelope',
    href: '/admin/newsletter'
  },
  {
    id: 'form-responses',
    label: 'Form Responses',
    icon: 'fas fa-list-alt',
    href: '/admin/form-responses'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'fas fa-chart-bar',
    href: '/admin/analytics'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'fas fa-cog',
    href: '/admin/settings'
  },
  {
    id: 'files',
    label: 'File Management',
    icon: 'fas fa-folder',
    href: '/admin/files'
  }
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const isActive = (href: string) => pathname === href
  const isParentActive = (item: SidebarItem) => 
    item.children?.some(child => pathname === child.href) || pathname === item.href

  const renderSidebarItem = (item: SidebarItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.id)
    const active = isActive(item.href)
    const parentActive = isParentActive(item)

    return (
      <div key={item.id} className="mb-0.5">
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group ${
            active || parentActive
              ? 'bg-primary text-primary-foreground shadow-md scale-[1.02]'
              : 'hover:bg-muted/60 hover:shadow-sm'
          } ${depth > 0 ? 'ml-6 text-sm py-2' : ''}`}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id)
            }
          }}
        >
          <Link href={hasChildren ? '#' : item.href} className="flex items-center flex-1 min-w-0">
            <i className={`${item.icon} w-5 text-center mr-3 flex-shrink-0 ${active || parentActive ? '' : 'text-muted-foreground group-hover:text-foreground'}`}></i>
            <span className="font-medium truncate">{item.label}</span>
          </Link>
          {hasChildren && (
            <i className={`fas fa-chevron-down text-xs transition-transform duration-200 flex-shrink-0 ml-2 ${
              isExpanded ? 'rotate-180' : ''
            } ${active || parentActive ? '' : 'text-muted-foreground group-hover:text-foreground'}`}></i>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map(child => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="flex flex-col space-y-3 max-h-[calc(100vh-8rem)]">
      {/* Brand Header */}
      <div className="px-4 py-5 bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-sm flex-shrink-0">
        <h2 className="text-lg font-bold text-primary-foreground">Admin Panel</h2>
        <p className="text-xs text-primary-foreground/80 mt-0.5">Manage your platform</p>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto space-y-1 px-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {sidebarItems.map(item => renderSidebarItem(item))}
      </nav>
      
      {/* Footer */}
      <div className="pt-2 flex-shrink-0">
        <LogoutButton />
      </div>
    </aside>
  )
}

