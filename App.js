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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        source={require("./app/assets/jacket.jpg")}
        title="red jacket"
        subTitle="$100"
      />
    </View>
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
