import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldWrapper = ({ name, variant, inputProps, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    variant: variant,
    size: "small",
    fullWidth: true,
    InputProps:{
      disableUnderline: true,
    },
    inputProps: inputProps === "false" ? "" : { style: { fontSize: 40 } },
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
