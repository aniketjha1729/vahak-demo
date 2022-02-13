import React from "react";
import { Formik, Form } from "formik";
import Header from "./Header";
import TextField from "./formUi/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import "./steps.css";
import StepOneDetails from "./StepOneDetails";
import Divider from "@material-ui/core/Divider";
import StepTwoDetails from "./StepTwoDetails";
import MobileField from "./formUi/MobileField";
import WhatsApp from "../assets/whatsapp.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const stepThreeValidate = Yup.object({
  mobile: Yup.number()
  .min(10, "Must be of 10 digit"),
  name: Yup.string().required(),
  remarks: Yup.string(),
});

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div>
      <Header heading="Place your Bid (3/4 step)" />
      <div className="formConatiner">
        <Formik
          validationSchema={stepThreeValidate}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="form">
                <div className="journeyDetails-Container">
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
                <StepTwoDetails bidAmount={props.data.bidAmount} />
                <Divider />
                <div className="formThreeContainer">
                  <div className="formThree">
                    <div className="formThreeRows">
                      <MobileField name="mobile" />
                      <div className="whatsapp">
                        <div>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Get updates on"
                          />
                        </div>
                        <div>
                          <img src={WhatsApp} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="formThreeRows">
                      <TextField
                        name="name"
                        label="Enter your Name *"
                        variant="outlined"
                        inputProps="false"
                      />
                    </div>
                    <div className="formThreeRows">
                      <TextField
                        name="remarks"
                        label="Enter Remarks (optional) "
                        variant="outlined"
                        inputProps="false"
                      />
                    </div>
                    <div className="formThreeRows">
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Verify via OTP
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StepThree;
