import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  View,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import ButtonCmp from "./app/components/ButtonCmp";
import colors from "./app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
      <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
