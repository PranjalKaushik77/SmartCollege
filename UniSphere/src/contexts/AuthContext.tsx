"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../services/api"

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "faculty" | "student"
}

type AuthContextData = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadStoredData() {
      setIsLoading(true)

      const storedUser = await AsyncStorage.getItem("@CollegeApp:user")
      const storedToken = await AsyncStorage.getItem("@CollegeApp:token")

      if (storedUser && storedToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`
        setUser(JSON.parse(storedUser))
      }

      setIsLoading(false)
    }

    loadStoredData()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login/", { email, password })

      const { user, token } = response.data

      await AsyncStorage.setItem("@CollegeApp:user", JSON.stringify(user))
      await AsyncStorage.setItem("@CollegeApp:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setUser(user)
    } catch (error) {
      throw error
    }
  }

  const signOut = async () => {
    await AsyncStorage.removeItem("@CollegeApp:user")
    await AsyncStorage.removeItem("@CollegeApp:token")
    setUser(null)
    delete api.defaults.headers.common["Authorization"]
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

