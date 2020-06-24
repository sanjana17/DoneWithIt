import React from "react";
import colors from "../config/colors";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function AppText(props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: props.color === undefined ? colors.primary: colors[props.color]}]} onPress={props.onPress} >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
