import React from "react";
import { Formik, Form, Field } from "formik";
import Header from "./Header";

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <>
      <Header heading="Place your Bid (2/4 step)" />
      <Formik initialValues={props.data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div className="form">
              <p>Mobile</p>
              <Field name="mobile" />
              <p>name</p>
              <Field name="name" />
              <p>remarks</p>
              <Field name="remarks" />
              <button type="button" onClick={() => props.prev(values)}>
                Back
              </button>
              <button type="submit">Next</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepTwo;
