import React from "react";
import { Formik, Form, Field } from "formik";
import Header from "./Header";

const StepThree = () => {
  return (
    <>
      <Header heading="Place your Bid (3/4 step)" />
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
