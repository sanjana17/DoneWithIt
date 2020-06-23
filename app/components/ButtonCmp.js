import React from "react";
import colors from "../config/colors";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function AppText(props) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
