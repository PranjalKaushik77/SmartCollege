import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../services/api"

interface AttendanceRecord {
  id: string
  courseId: string
  courseName: string
  date: string
  status: "present" | "absent" | "late"
}

interface AttendanceState {
  records: AttendanceRecord[]
  isLoading: boolean
  error: string | null
}

const initialState: AttendanceState = {
  records: [],
  isLoading: false,
  error: null,
}

export const fetchAttendance = createAsyncThunk("attendance/fetchAttendance", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/attendance/")
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch attendance")
  }
})

export const markAttendance = createAsyncThunk(
  "attendance/markAttendance",
  async (
    {
      courseId,
      studentIds,
      status,
      date,
    }: {
      courseId: string
      studentIds: string[]
      status: "present" | "absent" | "late"
      date: string
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post("/attendance/mark/", {
        courseId,
        studentIds,
        status,
        date,
      })
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to mark attendance")
    }
  },
)

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendance.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAttendance.fulfilled, (state, action: PayloadAction<AttendanceRecord[]>) => {
        state.isLoading = false
        state.records = action.payload
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(markAttendance.fulfilled, (state, action: PayloadAction<AttendanceRecord[]>) => {
        // Update or add new attendance records
        const newRecords = action.payload

        newRecords.forEach((newRecord) => {
          const index = state.records.findIndex((record) => record.id === newRecord.id)
          if (index !== -1) {
            state.records[index] = newRecord
          } else {
            state.records.push(newRecord)
          }
        })
      })
  },
})

export default attendanceSlice.reducer

