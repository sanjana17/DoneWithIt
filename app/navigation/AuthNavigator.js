import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="main"
      options={{ headerShown: false }}
      component={WelcomeScreen}
    />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
