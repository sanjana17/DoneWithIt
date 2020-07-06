import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  numberOfColumns,
  placeholder,
  width,
}) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectedItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        items={items}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        name={name}
        width={width}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
