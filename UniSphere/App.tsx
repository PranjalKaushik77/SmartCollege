import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { Provider as ReduxProvider } from "react-redux"
import { StatusBar } from "react-native"
import { store } from "./src/store"
import RootNavigator from "./src/navigation/RootNavigator"
import { AuthProvider } from "./src/contexts/AuthContext"

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <AuthProvider>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

