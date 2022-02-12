import React from "react";
import { Formik, Form, Field } from "formik";

const StepThree = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <p>bidAmount</p>
          <Field name="bidAmount" />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepThree;
