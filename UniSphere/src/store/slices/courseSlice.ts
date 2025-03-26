import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../services/api"

interface Course {
  id: string
  name: string
  code: string
  description: string
  faculty: {
    id: string
    name: string
  }
  schedule: {
    day: string
    startTime: string
    endTime: string
  }[]
}

interface CourseState {
  courses: Course[]
  isLoading: boolean
  error: string | null
}

const initialState: CourseState = {
  courses: [],
  isLoading: false,
  error: null,
}

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/courses/")
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch courses")
  }
})

export const enrollInCourse = createAsyncThunk(
  "courses/enrollInCourse",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await api.post(`/courses/${courseId}/enroll/`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to enroll in course")
    }
  },
)

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.isLoading = false
        state.courses = action.payload
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(enrollInCourse.fulfilled, (state, action) => {
        // Update the course with enrollment status if needed
        const updatedCourse = action.payload
        const index = state.courses.findIndex((course) => course.id === updatedCourse.id)
        if (index !== -1) {
          state.courses[index] = updatedCourse
        }
      })
  },
})

export default courseSlice.reducer

