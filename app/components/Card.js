import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({ source, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.imageContainer} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
  },
  details: {
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    marginBottom: 10,
  },
});
