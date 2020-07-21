import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { StyleSheet, BackHandler } from "react-native";
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
import FormData from "apisauce";
import useApi from "../hooks/useApi";
import apiClient from "../api/client";
import listingsApi from "../api/listings";
import listings from "../api/listings";
import AppText from "../components/AppText";
import colors from "../config/colors";
import UploadScreen from "../components/UploadScreen";

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

export default function ListingEditScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  handleSubmit = async (values, { resetForm }) => {
    setProgress(0);

    setVisible(true);
    const listing = { ...values, location };
    const result = await listingsApi.addListing(listing, (progress) =>
      setProgress(progress)
    );
    setVisible(false);
    if (!result.ok) {
      setVisible(false);
      return alert("couldnt save");
    }
    resetForm();
  };
  return (
    <Screen style={styles.container}>
      {progress !== 0 && (
        <UploadScreen
          progress={progress}
          visible={visible}
          onDone={() => setVisible(false)}
        />
      )}
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          image: [],
        }}
        onSubmit={handleSubmit}
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
