import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={item.iconName} backgroundColor={item.color} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
