import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Replace with your Django backend URL
const API_URL = "https://your-django-backend.com/api"

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor to refresh token if needed
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@CollegeApp:token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error is 401 and we haven't retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Try to refresh the token
        const refreshToken = await AsyncStorage.getItem("@CollegeApp:refreshToken")

        if (!refreshToken) {
          // No refresh token, redirect to login
          // You'll need to implement this logic in your auth context
          return Promise.reject(error)
        }

        const response = await axios.post(`${API_URL}/auth/refresh-token/`, {
          refresh: refreshToken,
        })

        const { access } = response.data

        await AsyncStorage.setItem("@CollegeApp:token", access)

        // Update the authorization header
        originalRequest.headers.Authorization = `Bearer ${access}`
        api.defaults.headers.common["Authorization"] = `Bearer ${access}`

        // Retry the original request
        return api(originalRequest)
      } catch (refreshError) {
        // If refresh token is invalid, redirect to login
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

