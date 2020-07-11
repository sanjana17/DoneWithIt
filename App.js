import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  View,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/screen";
import ButtonCmp from "./app/components/ButtonCmp";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
