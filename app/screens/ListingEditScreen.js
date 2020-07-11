import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { StyleSheet } from "react-native";
import Screen from "../components/screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  image: Yup.array().min(1, "Please select atleast one image"),
  title: Yup.string().required().label("Name").min(1),
  price: Yup.number().required().label("Price").min(1).max(10000),
  category: Yup.string().required().label("Category").nullable(),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    iconName: "floor-lamp",
    color: "#fc5c65",
  },
  {
    label: "Cars",
    value: 2,
    iconName: "car",
    color: "#fd9644",
  },
  {
    label: "Camera",
    value: 3,
    iconName: "camera",
    color: "#fed330",
  },
  {
    label: "Games",
    value: 4,
    iconName: "cards",
    color: "#26de81",
  },
  {
    label: "Clothing",
    value: 5,
    iconName: "shoe-heel",
    color: "#2bcbba",
  },
  {
    label: "Sports",
    value: 6,
    iconName: "basketball",
    color: "#45aaf2",
  },
  {
    label: "Movies & Music",
    value: 7,
    iconName: "headphones",
    color: "#4b7bec",
  },
];

export default function ListingEditScreen(props) {
  const location = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          image: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="image" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          textContentType="name"
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          name="price"
          keyboardType="number-pad"
          placeholder="Price"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="category"
          width="50%"
        ></AppFormPicker>
        <AppFormField
          multiline
          maxLength={255}
          name="description"
          textContentType="name"
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
