import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "./formUi/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import Header from "./Header";
import Select from "./formUi/Select";
import cars from "./car.json";

const stepOneValidate = Yup.object({
  sourceDestination: Yup.string().required().label("Source is required"),
  destination: Yup.string().required().label("destination is required"),
  carType: Yup.string().required().label("carType is required"),
  numberOfTravellers: Yup.string()
    .required()
    .label("numberOfTravellers is required"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <>
      <Header />
      <Formik
        validationSchema={stepOneValidate}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <TextField name="sourceDestination" label="sourceDestination" />
            <TextField name="destination" label="destination" />
            <Select name="carType" label="Cars" options={cars} />
            <TextField name="numberOfTravellers" label="numberOfTravellers" />
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepOne;
