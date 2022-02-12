import React from "react";
import { ErrorMessage, useField } from "formik";
import TextField from "@material-ui/core/TextField";
import "./textfield.css";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("toch error",meta.touched,meta.error);

  return (
    <div className="mb-2">
      <br />
      <TextField
        error={meta.touched && meta.error}
        size="small"
        variant="outlined"
        label={field.name}
        helperText={meta.touched && meta.error ? "Required" : ""}
        {...field}
        {...props}
        autoComplete="off"
      />
    </div>
  );
};

export default FormInput;
