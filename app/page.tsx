import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Calendar, Bell, BarChart } from "lucide-react"
import { Providers } from "./providers"

export default function Home() {
  const content = (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">UniSphere</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Smart College Management System</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive platform for managing academic and administrative operations efficiently.
          </p>
          <div className="mt-8">
            <Link href="/login">
              <Button size="lg" className="mr-4">
                Get Started
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage students, faculty, and administrative staff with role-based access control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secure authentication system with different permission levels for admin, faculty, and students.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Course Management</CardTitle>
              <CardDescription>Create and manage courses, assign faculty, and track resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive tools for curriculum planning, faculty allocation, and resource management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Attendance Tracking</CardTitle>
              <CardDescription>Digital attendance system with analytics and reporting.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI-powered attendance tracking with prediction algorithms and automated alerts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Examination & Grades</CardTitle>
              <CardDescription>Manage assessments, exams, and academic performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive grade management with performance analytics and result generation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Notification System</CardTitle>
              <CardDescription>Keep everyone informed with announcements and alerts.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Real-time notifications for important events, deadlines, and announcements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Student Records</CardTitle>
              <CardDescription>Maintain comprehensive student profiles and academic history.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complete student lifecycle management from admission to graduation.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-secondary rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI Attendance Prediction</h3>
              <p className="text-muted-foreground">
                Predict attendance patterns and send proactive alerts to improve student engagement.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Voice Assistant</h3>
              <p className="text-muted-foreground">
                Access timetables, events, and information through a convenient voice interface.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
              <p className="text-muted-foreground">
                Secure cloud storage for assignments, course materials, and academic resources.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">UniSphere</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} UniSphere. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )

  return <Providers>{content}</Providers>
}