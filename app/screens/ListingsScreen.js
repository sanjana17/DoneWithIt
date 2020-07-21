import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Screen from "../components/screen";
import { StyleSheet, Button } from "react-native";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import listingApi from "../api/listings";
import AppText from "../components/AppText";
import ButtonCmp from "../components/ButtonCmp";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

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
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>coulnt retrieve please retry</AppText>
          <ButtonCmp title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
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
