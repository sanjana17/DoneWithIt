import React from "react";
import ButtonCmp from "../ButtonCmp";
import { useFormikContext } from "formik";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <ButtonCmp title={title} onPress={handleSubmit} />;
}
