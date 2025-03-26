import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// Screens
import DashboardScreen from "../screens/faculty/DashboardScreen"
import CoursesScreen from "../screens/faculty/CoursesScreen"
import CourseDetailScreen from "../screens/faculty/CourseDetailScreen"
import AttendanceScreen from "../screens/faculty/AttendanceScreen"
import MarkAttendanceScreen from "../screens/faculty/MarkAttendanceScreen"
import GradesScreen from "../screens/faculty/GradesScreen"
import ManageGradesScreen from "../screens/faculty/ManageGradesScreen"
import ProfileScreen from "../screens/faculty/ProfileScreen"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const CoursesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesScreen} options={{ title: "My Courses" }} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }: any) => ({ title: route.params?.courseName || "Course Details" })}
      />
    </Stack.Navigator>
  )
}

const AttendanceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AttendanceList" component={AttendanceScreen} options={{ title: "Attendance" }} />
      <Stack.Screen name="MarkAttendance" component={MarkAttendanceScreen} options={{ title: "Mark Attendance" }} />
    </Stack.Navigator>
  )
}

const GradesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GradesList" component={GradesScreen} options={{ title: "Grades" }} />
      <Stack.Screen name="ManageGrades" component={ManageGradesScreen} options={{ title: "Manage Grades" }} />
    </Stack.Navigator>
  )
}

const FacultyNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Dashboard") {
            iconName = focused ? "view-dashboard" : "view-dashboard-outline"
          } else if (route.name === "Courses") {
            iconName = focused ? "book-open-page-variant" : "book-open-outline"
          } else if (route.name === "Attendance") {
            iconName = focused ? "calendar-check" : "calendar-check-outline"
          } else if (route.name === "Grades") {
            iconName = focused ? "chart-line" : "chart-line-variant"
          } else if (route.name === "Profile") {
            iconName = focused ? "account-circle" : "account-circle-outline"
          }

          return <Icon name={iconName || "help"} size={size} color={color} />
        },
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Courses" component={CoursesStack} options={{ headerShown: false }} />
      <Tab.Screen name="Attendance" component={AttendanceStack} options={{ headerShown: false }} />
      <Tab.Screen name="Grades" component={GradesStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default FacultyNavigator

