import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import courseReducer from "./slices/courseSlice"
import attendanceReducer from "./slices/attendanceSlice"
import notificationReducer from "./slices/notificationSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    attendance: attendanceReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

