"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { db, type User } from "@/lib/db"

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<User>
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<User> => {
    // In a real app, you would validate credentials with a backend
    // For demo, we'll just look up the user by email
    const user = db.getUserByEmail(email)

    if (!user) {
      // For demo purposes, create a mock student user if not found
      const mockUser: User = {
        id: "mock-user",
        name: email
          .split("@")[0]
          .replace(/\./g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        email,
        role: "student",
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      return mockUser
    }

    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    return user
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

