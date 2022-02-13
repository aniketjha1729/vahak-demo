import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";

const MobileFieldWrapper = ({ name }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    size: "small",
    fullWidth: true,
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <TextField
      {...configTextField}
      label="Enter your 10 digit mobile number"
      InputProps={{
        startAdornment: <InputAdornment position="start">+91-</InputAdornment>,
      }}
      variant="outlined"
    />
  );
};

export default MobileFieldWrapper;
