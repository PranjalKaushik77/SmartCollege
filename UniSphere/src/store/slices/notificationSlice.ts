import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../services/api"

interface Notification {
  id: string
  title: string
  message: string
  createdAt: string
  read: boolean
  type: "announcement" | "grade" | "attendance" | "course" | "other"
}

interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  isLoading: boolean
  error: string | null
}

const initialState: NotificationState = {
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  error: null,
}

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/notifications/")
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch notifications")
    }
  },
)

export const markAsRead = createAsyncThunk(
  "notifications/markAsRead",
  async (notificationId: string, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/notifications/${notificationId}/read/`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to mark notification as read")
    }
  },
)

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.unshift(action.payload)
      if (!action.payload.read) {
        state.unreadCount += 1
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchNotifications.fulfilled, (state, action: PayloadAction<Notification[]>) => {
        state.isLoading = false
        state.notifications = action.payload
        state.unreadCount = action.payload.filter((notification) => !notification.read).length
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(markAsRead.fulfilled, (state, action: PayloadAction<Notification>) => {
        const index = state.notifications.findIndex((notification) => notification.id === action.payload.id)

        if (index !== -1) {
          const wasUnread = !state.notifications[index].read
          state.notifications[index] = action.payload

          if (wasUnread && action.payload.read) {
            state.unreadCount -= 1
          }
        }
      })
  },
})

export const { addNotification } = notificationSlice.actions

export default notificationSlice.reducer

