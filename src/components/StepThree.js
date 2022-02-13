import React from "react";
import { Formik, Form, Field } from "formik";
import Header from "./Header";

const StepThree = () => {
  return (
    <>
      <Header />
      <Formik>
        {() => (
          <Form>
            <p>bidAmount</p>
            <Field name="bidAmount" />
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepThree;
