import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login";
import { Platform } from "react-native";
import Header from "./Header";
import { navigationRef } from "./RootNavigation";
import EmployeeChat from "./EmployeeChat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      ref={navigationRef}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Navigator initialRouteName="Login" headerMode="screen">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            header: () => <Header headerDisplay="Login" />,
          }}
        />
        <Stack.Screen
          name="EmployeeChat"
          component={EmployeeChat}
          options={{
            header: () => <Header headerDisplay="Employee Chat" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
