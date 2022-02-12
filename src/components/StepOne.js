import React from "react";
import { Formik, Form, Field } from "formik";

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>sourceDestination</p>
          <Field name="sourceDestination" />
          <p>destination</p>
          <Field name="destination" />
          <p>carType</p>
          <Field name="carType" />
          <p>numberOfTravellers</p>
          <Field name="numberOfTravellers" />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
