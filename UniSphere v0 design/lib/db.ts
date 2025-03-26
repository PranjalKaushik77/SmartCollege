// This is a mock database implementation
// In a real application, you would use a real database like MongoDB, PostgreSQL, etc.

// Types
export type User = {
  id: string
  name: string
  email: string
  role: "student" | "faculty" | "admin"
  profileImage?: string
}

export type Student = User & {
  studentId: string
  department: string
  year: string
  gpa: number
  attendance: Record<string, number>
  courses: string[]
}

export type Faculty = User & {
  facultyId: string
  department: string
  courses: string[]
}

export type Course = {
  id: string
  name: string
  department: string
  credits: number
  instructor: string
  students: string[]
  status: "active" | "inactive"
}

export type Assignment = {
  id: string
  title: string
  courseId: string
  dueDate: string
  description: string
  status: "pending" | "in-progress" | "completed"
  progress: number
  priority: "high" | "medium" | "low"
}

export type Attendance = {
  id: string
  studentId: string
  courseId: string
  date: string
  status: "present" | "absent" | "late"
}

// Mock data
const students: Student[] = [
  {
    id: "s1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "student",
    studentId: "STU1001",
    department: "Computer Science",
    year: "3rd Year",
    gpa: 3.8,
    attendance: {
      CS101: 92,
      MATH202: 88,
      PHY101: 79,
      ENG101: 96,
    },
    courses: ["CS101", "MATH202", "PHY101", "ENG101"],
  },
  {
    id: "s2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "student",
    studentId: "STU1002",
    department: "Business Administration",
    year: "2nd Year",
    gpa: 3.5,
    attendance: {
      BUS202: 85,
      ECON101: 90,
      MATH101: 82,
      ENG101: 88,
    },
    courses: ["BUS202", "ECON101", "MATH101", "ENG101"],
  },
]

const faculty: Faculty[] = [
  {
    id: "f1",
    name: "Dr. Johnson",
    email: "dr.johnson@example.com",
    role: "faculty",
    facultyId: "FAC1001",
    department: "Computer Science",
    courses: ["CS101", "CS202"],
  },
  {
    id: "f2",
    name: "Prof. Smith",
    email: "prof.smith@example.com",
    role: "faculty",
    facultyId: "FAC1002",
    department: "Mathematics",
    courses: ["MATH101", "MATH202"],
  },
]

const admins: User[] = [
  {
    id: "a1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
]

const courses: Course[] = [
  {
    id: "CS101",
    name: "Computer Science 101",
    department: "Computer Science",
    credits: 3,
    instructor: "Dr. Johnson",
    students: ["s1"],
    status: "active",
  },
  {
    id: "MATH202",
    name: "Mathematics 202",
    department: "Mathematics",
    credits: 4,
    instructor: "Prof. Smith",
    students: ["s1"],
    status: "active",
  },
  {
    id: "PHY101",
    name: "Physics 101",
    department: "Physics",
    credits: 4,
    instructor: "Dr. Williams",
    students: ["s1"],
    status: "active",
  },
  {
    id: "ENG101",
    name: "English Literature",
    department: "English",
    credits: 3,
    instructor: "Prof. Davis",
    students: ["s1", "s2"],
    status: "active",
  },
]

const attendanceRecords: Attendance[] = [
  {
    id: "a1",
    studentId: "s1",
    courseId: "CS101",
    date: "2025-03-20",
    status: "present",
  },
  {
    id: "a2",
    studentId: "s1",
    courseId: "CS101",
    date: "2025-03-22",
    status: "present",
  },
  {
    id: "a3",
    studentId: "s1",
    courseId: "MATH202",
    date: "2025-03-21",
    status: "present",
  },
  {
    id: "a4",
    studentId: "s1",
    courseId: "MATH202",
    date: "2025-03-23",
    status: "absent",
  },
  {
    id: "a5",
    studentId: "s1",
    courseId: "PHY101",
    date: "2025-03-20",
    status: "absent",
  },
]

// Database operations
export const db = {
  // User operations
  getUser: (id: string): User | undefined => {
    return [...students, ...faculty, ...admins].find((user) => user.id === id)
  },

  getUserByEmail: (email: string): User | undefined => {
    return [...students, ...faculty, ...admins].find((user) => user.email === email)
  },

  // Student operations
  getStudent: (id: string): Student | undefined => {
    return students.find((student) => student.id === id)
  },

  getStudentByEmail: (email: string): Student | undefined => {
    return students.find((student) => student.email === email)
  },

  getAllStudents: (): Student[] => {
    return students
  },

  // Faculty operations
  getFaculty: (id: string): Faculty | undefined => {
    return faculty.find((f) => f.id === id)
  },

  getFacultyByEmail: (email: string): Faculty | undefined => {
    return faculty.find((f) => f.email === email)
  },

  getAllFaculty: (): Faculty[] => {
    return faculty
  },

  // Course operations
  getCourse: (id: string): Course | undefined => {
    return courses.find((course) => course.id === id)
  },

  getAllCourses: (): Course[] => {
    return courses
  },

  getStudentCourses: (studentId: string): Course[] => {
    const student = students.find((s) => s.id === studentId)
    if (!student) return []
    return courses.filter((course) => student.courses.includes(course.id))
  },

  getFacultyCourses: (facultyId: string): Course[] => {
    const facultyMember = faculty.find((f) => f.id === facultyId)
    if (!facultyMember) return []
    return courses.filter((course) => facultyMember.courses.includes(course.id))
  },

  // Attendance operations
  getStudentAttendance: (studentId: string): Attendance[] => {
    return attendanceRecords.filter((record) => record.studentId === studentId)
  },

  getStudentAttendanceForCourse: (studentId: string, courseId: string): Attendance[] => {
    return attendanceRecords.filter((record) => record.studentId === studentId && record.courseId === courseId)
  },

  markAttendance: (studentId: string, courseId: string, status: "present" | "absent" | "late"): Attendance => {
    const newAttendance: Attendance = {
      id: `a${attendanceRecords.length + 1}`,
      studentId,
      courseId,
      date: new Date().toISOString().split("T")[0],
      status,
    }
    attendanceRecords.push(newAttendance)
    return newAttendance
  },

  // Check if student attendance is below threshold
  isStudentAttendanceBelowThreshold: (studentId: string, courseId: string, threshold = 75): boolean => {
    const student = students.find((s) => s.id === studentId)
    if (!student || !student.attendance[courseId]) return false
    return student.attendance[courseId] < threshold
  },

  // Get all students with attendance below threshold
  getStudentsWithLowAttendance: (threshold = 75): { student: Student; course: Course; attendance: number }[] => {
    const results: { student: Student; course: Course; attendance: number }[] = []

    students.forEach((student) => {
      Object.entries(student.attendance).forEach(([courseId, attendance]) => {
        if (attendance < threshold) {
          const course = courses.find((c) => c.id === courseId)
          if (course) {
            results.push({ student, course, attendance })
          }
        }
      })
    })

    return results
  },
}

