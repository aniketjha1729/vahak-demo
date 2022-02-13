import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "./formUi/TextField";
import Header from "./Header";
import * as Yup from "yup";
import "./steps.css";

const stepTwoValidate = Yup.object({
  bidAmount: Yup.number().required().label("Enter your bid amount."),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div>
      <Header heading="Place your Bid (2/4 step)" />
      <div className="formConatiner">
        <Formik
          validationSchema={stepTwoValidate}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="form">
                <div className="stepTwo-prevDataContainer">
                  <div className="stepTwo-prevData">
                    <h5>JOURNEY DETAILS</h5>
                    <p>
                      {props.data.sourceDestination} ---
                      {props.data.destination}
                    </p>
                    <p>
                      {props.data.numberOfTravellers} Persons,
                      {props.data.carType}
                    </p>
                  </div>
                  <div className="prevButton">
                    <button type="button" onClick={() => props.prev(values)}>
                      Back
                    </button>
                  </div>
                </div>
                <div className="dividerContainer">
                  <Divider />
                </div>
                <div className="bidAmountContainer">
                  <div className="rupeeSymbol">&#8377;</div>
                  <div>
                    <TextField name="bidAmount" />
                  </div>
                </div>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StepTwo;
