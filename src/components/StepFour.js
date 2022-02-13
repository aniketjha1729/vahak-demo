import React from "react";
import { Formik, Form } from "formik";
import Header from "./Header";
import Button from "@material-ui/core/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import * as Yup from "yup";
import "./steps.css";
import StepOneDetails from "./StepOneDetails";
import Divider from "@material-ui/core/Divider";
import StepTwoDetails from "./StepTwoDetails";
import OtpField from "./formUi/OtpField";

const stepFourValidate = Yup.object({
  otp1: Yup.number().required(),
  otp2: Yup.number().required(),
  otp3: Yup.number().required(),
  otp4: Yup.number().required(),
});

const StepFour = (props) => {
  const handleSubmit = (values) => {
    // console.log(values.otp1 + values.otp2 + values.otp3 + values.otp4);
    values.otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
    // console.log(values);
    props.next(values, true);
  };
  return (
    <div>
      <Header heading="Place your Bid (4/4 step)" />
      <div className="formConatiner">
        <Formik
          validationSchema={stepFourValidate}
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
                <StepTwoDetails
                  name={props.data.name}
                  mobile={props.data.mobile}
                  remarks={props.data.remarks}
                  bidAmount={props.data.bidAmount}
                  stepThree={true}
                />
                <Divider />
                <div className="formFourContainer">
                  <div className="otpInstructions">
                    <div>
                      We've sent an OTP to your number, Please enter it below to
                      submit your bid <b>{props.data.mobile} </b>
                      <span>
                        <ModeEditIcon style={{ fontSize: 15 }} /> Edit
                      </span>
                    </div>
                  </div>
                  <div className="formFour">
                    <OtpField name="otp1" />
                    <OtpField name="otp2" />
                    <OtpField name="otp3" />
                    <OtpField name="otp4" />
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
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
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StepFour;
