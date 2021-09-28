import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/authentication/Onboarding/Onboarding";
import Welcome from "./src/authentication/Welcome/Welcome";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./src/authentication/Login/Login";
import Register from "./src/authentication/Register/Register";
import ForgotPassword from "./src/authentication/ForgotPassword/ForgotPassword";
import Home from "./src/Home/Home";
import OutfitIdeas from "./src/Home/OutfitIdeas";
import ForgotPasswordMsg from "./src/authentication/ForgotPassword/ForgotPasswordMsg";
const AppStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
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
      <AppStack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
        <AppStack.Screen name="Home" component={HomeNavigator} />
      </AppStack.Navigator>
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
