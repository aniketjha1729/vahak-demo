import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "./formUi/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header";
import * as Yup from "yup";
import "./steps.css";
import StepOneDetails from "./StepOneDetails";

const stepTwoValidate = Yup.object({
  bidAmount: Yup.number().required(),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const editDetails = (values) => {
    props.prev(values);
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
                  <StepOneDetails
                    sourceDestination={props.data.sourceDestination}
                    destination={props.data.destination}
                    numberOfTravellers={props.data.numberOfTravellers}
                    carType={props.data.carType}
                  />
                  <div className="prevButton">
                    <button type="button" onClick={() => props.prev(values)}>
                      Back
                    </button>
                  </div>
                </div>
                <Divider />
                <div className="bidAmountContainer">
                  <div className="bidAmount">
                    <div className="rupeeSymbol">&#8377;</div>
                    <div>
                      <TextField placeholder="0" name="bidAmount" />
                    </div>
                  </div>
                </div>
                <div className="negotiate">
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Rate Negotiable"
                  />
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
