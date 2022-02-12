import React from "react";
import { Formik, Form, Field } from "formik";

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>Mobile</p>
          <Field name="mobile" />
          <p>name</p>
          <Field name="name" />
          <p>remarks</p>
          <Field name="remarks" />
          <button type="button" >Back</button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
