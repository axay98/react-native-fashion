import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/authentication/Onboarding/Onboarding";
import Welcome from "./src/authentication/Welcome/Welcome";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Login from "./src/authentication/Login/Login";
import Register from "./src/authentication/Register/Register";
import ForgotPassword from "./src/authentication/ForgotPassword/ForgotPassword";
import ForgotPasswordMsg from "./src/authentication/ForgotPassword/ForgotPasswordMsg";

const AuthenticationStack = createStackNavigator();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="Register" component={Register} />
      <AuthenticationStack.Screen
        name="ForgotPasswordMsg"
        component={ForgotPasswordMsg}
      />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
}
export default function App() {
  let [fontsLoaded] = useFonts({
    "sf-pro-bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "sf-pro-semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "sf-pro-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
