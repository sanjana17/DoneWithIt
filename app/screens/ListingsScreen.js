import React from "react";
import Card from "../components/Card";
import Screen from "../components/screen";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    image: require("../assets/jacket.jpg"),
    price: "$100",
  },
  {
    id: 2,
    title: "Couch for Sale",
    image: require("../assets/couch.jpg"),
    price: "$100",
  },
];
export default function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            source={item.image}
            title={item.title}
            subTitle={item.price}
            onPress={() =>
              navigation.navigate("listingDetails", { item: item })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
