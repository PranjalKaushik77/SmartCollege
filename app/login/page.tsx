"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GraduationCap } from "lucide-react"
import { ModeToggle } from "@/components/theme-toggle"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Providers } from "@/app/providers"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("student")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // In a real app, you would authenticate with a backend
    // For demo purposes, we'll just redirect based on role
    switch (role) {
      case "admin":
        router.push("/dashboard/admin")
        break
      case "faculty":
        router.push("/dashboard/faculty")
        break
      case "student":
        router.push("/dashboard/student")
        break
      default:
        router.push("/dashboard/student")
    }
  }

  const content = (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">UniSphere</span>
          </Link>
          <ModeToggle />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Login as</Label>
                <RadioGroup defaultValue="student" value={role} onValueChange={setRole} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="faculty" id="faculty" />
                    <Label htmlFor="faculty">Faculty</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin">Admin</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-sm text-center text-muted-foreground">
                <Link href="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          For demo purposes, you can login with any email/password combination.
        </div>
      </div>
    </div>
  )

  return <Providers>{content}</Providers>
}

