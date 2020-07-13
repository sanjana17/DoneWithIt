import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

export default function ListingDetailsScreen({
  route: {
    params: { item },
  },
}) {
  return (
    <View>
      <Image source={item.image} style={styles.imageContainer} />
      <View style={styles.details}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subtitle}>{item.subtitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Navya"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
  },
  userImage: {
    borderRadius: 40,
    width: 70,
    height: 70,
  },
  userContainer: {
    marginVertical: 40,
  },
});
