"use client"
import { createStackNavigator } from "@react-navigation/stack"
import { useAuth } from "../contexts/AuthContext"
import AuthNavigator from "./AuthNavigator"
import StudentNavigator from "./StudentNavigator"
import FacultyNavigator from "./FacultyNavigator"
import AdminNavigator from "./AdminNavigator"
import LoadingScreen from "../screens/LoadingScreen"

const Stack = createStackNavigator()

const RootNavigator = () => {
  const { isAuthenticated, isLoading, user } = useAuth()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <>
          {user?.role === "student" && <Stack.Screen name="StudentApp" component={StudentNavigator} />}
          {user?.role === "faculty" && <Stack.Screen name="FacultyApp" component={FacultyNavigator} />}
          {user?.role === "admin" && <Stack.Screen name="AdminApp" component={AdminNavigator} />}
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator

