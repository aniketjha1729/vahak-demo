import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
const OtpField = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <TextField
      style={{ width: "50px" }}
      inputProps={{ style: { fontSize: 40, textAlign: "center" } }}
      {...configTextField}
    />
  );
};

export default OtpField;
