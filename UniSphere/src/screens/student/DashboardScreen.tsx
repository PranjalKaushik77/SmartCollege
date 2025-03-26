"use client"

import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

interface DashboardData {
  upcomingClasses: {
    id: string
    courseName: string
    time: string
    room: string
  }[]
  attendanceStats: {
    present: number
    absent: number
    late: number
    total: number
  }
  recentGrades: {
    id: string
    courseName: string
    grade: string
    date: string
  }[]
  notifications: {
    id: string
    title: string
    message: string
    date: string
  }[]
}

const DashboardScreen = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const { user } = useAuth()
  const navigation = useNavigation()

  const fetchDashboardData = async () => {
    try {
      const response = await api.get("/student/dashboard/")
      setDashboardData(response.data)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setIsLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    fetchDashboardData()
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading dashboard...</Text>
      </View>
    )
  }

  // Mock data for preview purposes
  const mockDashboardData: DashboardData = {
    upcomingClasses: [
      { id: "1", courseName: "Introduction to Computer Science", time: "10:00 AM - 11:30 AM", room: "Room 101" },
      { id: "2", courseName: "Calculus I", time: "1:00 PM - 2:30 PM", room: "Room 203" },
      { id: "3", courseName: "Physics Lab", time: "3:00 PM - 5:00 PM", room: "Lab 305" },
    ],
    attendanceStats: {
      present: 42,
      absent: 3,
      late: 5,
      total: 50,
    },
    recentGrades: [
      { id: "1", courseName: "Database Systems", grade: "A", date: "2023-10-15" },
      { id: "2", courseName: "Web Development", grade: "B+", date: "2023-10-10" },
      { id: "3", courseName: "Data Structures", grade: "A-", date: "2023-10-05" },
    ],
    notifications: [
      { id: "1", title: "Assignment Due", message: "Web Development project due tomorrow", date: "2023-10-20" },
      { id: "2", title: "Exam Schedule", message: "Mid-term exams start next week", date: "2023-10-18" },
    ],
  }

  const data = dashboardData || mockDashboardData

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {user?.name || "Student"}</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Classes</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Courses" as never)}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {data.upcomingClasses.map((classItem) => (
          <View key={classItem.id} style={styles.classCard}>
            <View style={styles.classInfo}>
              <Text style={styles.className}>{classItem.courseName}</Text>
              <Text style={styles.classTime}>
                <Icon name="clock-outline" size={14} color="#666" /> {classItem.time}
              </Text>
              <Text style={styles.classRoom}>
                <Icon name="map-marker-outline" size={14} color="#666" /> {classItem.room}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Attendance Overview</Text>
        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceItem}>
            <View style={[styles.attendanceCircle, { backgroundColor: "#4CAF50" }]}>
              <Text style={styles.attendanceNumber}>{data.attendanceStats.present}</Text>
            </View>
            <Text style={styles.attendanceLabel}>Present</Text>
          </View>

          <View style={styles.attendanceItem}>
            <View style={[styles.attendanceCircle, { backgroundColor: "#F44336" }]}>
              <Text style={styles.attendanceNumber}>{data.attendanceStats.absent}</Text>
            </View>
            <Text style={styles.attendanceLabel}>Absent</Text>
          </View>

          <View style={styles.attendanceItem}>
            <View style={[styles.attendanceCircle, { backgroundColor: "#FFC107" }]}>
              <Text style={styles.attendanceNumber}>{data.attendanceStats.late}</Text>
            </View>
            <Text style={styles.attendanceLabel}>Late</Text>
          </View>

          <View style={styles.attendanceItem}>
            <View style={[styles.attendanceCircle, { backgroundColor: "#2196F3" }]}>
              <Text style={styles.attendanceNumber}>{data.attendanceStats.total}</Text>
            </View>
            <Text style={styles.attendanceLabel}>Total</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Grades</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Grades" as never)}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {data.recentGrades.map((grade) => (
          <View key={grade.id} style={styles.gradeCard}>
            <View style={styles.gradeInfo}>
              <Text style={styles.gradeCourse}>{grade.courseName}</Text>
              <Text style={styles.gradeDate}>{new Date(grade.date).toLocaleDateString()}</Text>
            </View>
            <View style={styles.gradeCircle}>
              <Text style={styles.gradeText}>{grade.grade}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Notifications</Text>
        </View>

        {data.notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationCard}>
            <View style={styles.notificationIcon}>
              <Icon name="bell-outline" size={24} color="#4F46E5" />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationDate}>{new Date(notification.date).toLocaleDateString()}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    padding: 20,
    backgroundColor: "#4F46E5",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  date: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 5,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  lastSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    color: "#4F46E5",
    fontSize: 14,
  },
  classCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  classTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  classRoom: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  attendanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  attendanceItem: {
    alignItems: "center",
  },
  attendanceCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  attendanceNumber: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  attendanceLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "#666",
  },
  gradeCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  gradeInfo: {
    flex: 1,
  },
  gradeCourse: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  gradeDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  gradeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
  },
  gradeText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  notificationCard: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  notificationIcon: {
    marginRight: 15,
    justifyContent: "center",
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  notificationDate: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
})

export default DashboardScreen

