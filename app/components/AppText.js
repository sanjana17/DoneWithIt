import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
});
