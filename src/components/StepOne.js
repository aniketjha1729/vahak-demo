import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <Formik
      validationSchema={stepOneValidate}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <p>sourceDestination</p>
          <Field name="sourceDestination" />
          <ErrorMessage name="sourceDestination" />
          <p>destination</p>
          <Field name="destination" />
          <ErrorMessage name="destination" />
          <p>carType</p>
          <Field name="carType" />
          <ErrorMessage name="carType" />
          <p>numberOfTravellers</p>
          <Field name="numberOfTravellers" />
          <ErrorMessage name="numberOfTravellers" />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
