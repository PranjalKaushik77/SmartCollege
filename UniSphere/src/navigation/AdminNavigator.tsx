import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// Screens
import DashboardScreen from "../screens/admin/DashboardScreen"
import StudentsScreen from "../screens/admin/StudentsScreen"
import StudentDetailScreen from "../screens/admin/StudentDetailScreen"
import FacultyScreen from "../screens/admin/FacultyScreen"
import FacultyDetailScreen from "../screens/admin/FacultyDetailScreen"
import CoursesScreen from "../screens/admin/CoursesScreen"
import CourseDetailScreen from "../screens/admin/CourseDetailScreen"
import NotificationsScreen from "../screens/admin/NotificationsScreen"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const StudentsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StudentsList" component={StudentsScreen} options={{ title: "Students" }} />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetailScreen}
        options={({ route }: any) => ({ title: route.params?.studentName || "Student Details" })}
      />
    </Stack.Navigator>
  )
}

const FacultyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FacultyList" component={FacultyScreen} options={{ title: "Faculty" }} />
      <Stack.Screen
        name="FacultyDetail"
        component={FacultyDetailScreen}
        options={({ route }: any) => ({ title: route.params?.facultyName || "Faculty Details" })}
      />
    </Stack.Navigator>
  )
}

const CoursesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesScreen} options={{ title: "Courses" }} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }: any) => ({ title: route.params?.courseName || "Course Details" })}
      />
    </Stack.Navigator>
  )
}

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Dashboard") {
            iconName = focused ? "view-dashboard" : "view-dashboard-outline"
          } else if (route.name === "Students") {
            iconName = focused ? "account-group" : "account-group-outline"
          } else if (route.name === "Faculty") {
            iconName = focused ? "teach" : "teach"
          } else if (route.name === "Courses") {
            iconName = focused ? "book-open-page-variant" : "book-open-outline"
          } else if (route.name === "Notifications") {
            iconName = focused ? "bell" : "bell-outline"
          }

          return <Icon name={iconName || "help"} size={size} color={color} />
        },
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Students" component={StudentsStack} options={{ headerShown: false }} />
      <Tab.Screen name="Faculty" component={FacultyStack} options={{ headerShown: false }} />
      <Tab.Screen name="Courses" component={CoursesStack} options={{ headerShown: false }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  )
}

export default AdminNavigator

