"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Menu,
  Home,
  Users,
  BookOpen,
  Calendar,
  BarChart,
  Bell,
  Settings,
  LogOut,
  User,
  FileText,
  MessageSquare,
  Cloud,
  ArrowLeft,
} from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/theme-toggle"
import { Providers } from "@/app/providers"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [role, setRole] = useState<string>("student")
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Extract role from URL path
    if (pathname?.includes("/admin")) {
      setRole("admin")
    } else if (pathname?.includes("/faculty")) {
      setRole("faculty")
    } else {
      setRole("student")
    }
  }, [pathname])

  if (!mounted) {
    return null
  }

  const handleBack = () => {
    // Navigate to the correct dashboard based on role
    if (role === "admin") {
      router.push("/dashboard/admin")
    } else if (role === "faculty") {
      router.push("/dashboard/faculty")
    } else {
      router.push("/dashboard/student")
    }
  }

  const roleBasedNavItems = () => {
    const commonItems = [
      { href: `/dashboard/${role}`, label: "Dashboard", icon: Home },
      { href: `/dashboard/${role}/profile`, label: "Profile", icon: User },
      { href: `/dashboard/${role}/notifications`, label: "Notifications", icon: Bell },
    ]

    if (role === "admin") {
      return [
        ...commonItems,
        { href: `/dashboard/${role}/students`, label: "Students", icon: Users },
        { href: `/dashboard/${role}/faculty`, label: "Faculty", icon: Users },
        { href: `/dashboard/${role}/courses`, label: "Courses", icon: BookOpen },
        { href: `/dashboard/${role}/reports`, label: "Reports", icon: BarChart },
        { href: `/dashboard/${role}/settings`, label: "Settings", icon: Settings },
      ]
    } else if (role === "faculty") {
      return [
        ...commonItems,
        { href: `/dashboard/${role}/courses`, label: "My Courses", icon: BookOpen },
        { href: `/dashboard/${role}/attendance`, label: "Attendance", icon: Calendar },
        { href: `/dashboard/${role}/grades`, label: "Grades", icon: BarChart },
        { href: `/dashboard/${role}/assignments`, label: "Assignments", icon: FileText },
        { href: `/dashboard/${role}/materials`, label: "Materials", icon: Cloud },
      ]
    } else {
      return [
        ...commonItems,
        { href: `/dashboard/${role}/courses`, label: "My Courses", icon: BookOpen },
        { href: `/dashboard/${role}/attendance`, label: "Attendance", icon: Calendar },
        { href: `/dashboard/${role}/grades`, label: "Grades", icon: BarChart },
        { href: `/dashboard/${role}/assignments`, label: "Assignments", icon: FileText },
        { href: `/dashboard/${role}/face-recognition`, label: "Face Recognition", icon: User },
        { href: `/dashboard/${role}/messages`, label: "Messages", icon: MessageSquare },
      ]
    }
  }

  const navItems = roleBasedNavItems()
  const isMainDashboard = pathname === `/dashboard/${role}`

  const content = (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card">
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">UniSphere</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <li key={index}>
                  <Link href={item.href}>
                    <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-border">
          <Link href="/login">
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-0 border-r-0">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">UniSphere</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <li key={index}>
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <Link href="/login">
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            {!isMainDashboard && (
              <Button variant="ghost" size="icon" onClick={handleBack}>
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                <AvatarFallback>{role === "admin" ? "AD" : role === "faculty" ? "FA" : "ST"}</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">
                  {role === "admin" ? "Admin User" : role === "faculty" ? "Faculty User" : "Student User"}
                </p>
                <p className="text-xs text-muted-foreground">{role.charAt(0).toUpperCase() + role.slice(1)}</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-background">{children}</main>
      </div>
    </div>
  )

  return <Providers>{content}</Providers>
}

