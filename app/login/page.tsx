"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap } from "lucide-react"
import { ModeToggle } from "@/components/theme-toggle"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Providers } from "@/app/providers"
import { supabase } from "@/app/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Predefined credentials for development
  const TEST_CREDENTIALS = {
    student: { email: 'student@unisphere.com', password: 'student123', role: 'student' },
    faculty: { email: 'faculty@unisphere.com', password: 'faculty123', role: 'faculty' },
    admin: { email: 'admin@unisphere.com', password: 'admin123', role: 'admin' }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // For development: Bypass auth for test credentials
      if (process.env.NODE_ENV === 'development') {
        const user = Object.values(TEST_CREDENTIALS).find(
          cred => cred.email === email && cred.password === password
        )
        
        if (user) {
          // Manually set session
          await supabase.auth.setSession({
            access_token: 'dev_token',
            refresh_token: 'dev_refresh_token'
          })
          
          // Store user in state
          await supabase.auth.updateUser({
            email: user.email,
            user_metadata: { role: user.role }
          })

          router.push(`/dashboard/${user.role}`)
          return
        }
      }

      // Production authentication
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (authError) throw authError

      // Get role from user metadata
      const role = data.user?.user_metadata?.role || 'student'
      router.push(`/dashboard/${role}`)

    } catch (err: any) {
      setError("Invalid credentials. Use pre-defined test accounts in development mode.")
    } finally {
      setIsLoading(false)
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
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              
              {process.env.NODE_ENV === 'development' && (
                <div className="text-sm text-center text-muted-foreground">
                  <p>Test Accounts:</p>
                  <ul className="list-disc pl-4 inline-block text-left">
                    <li>Student: student@unisphere.com / student123</li>
                    <li>Faculty: faculty@unisphere.com / faculty123</li>
                    <li>Admin: admin@unisphere.com / admin123</li>
                  </ul>
                </div>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )

  return <Providers>{content}</Providers>
}