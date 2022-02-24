import React, { useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import * as Yup from "yup";
import "./stepFour.css";
import StepOneDetails from "../StepOne/StepOneDetails";
import Divider from "@material-ui/core/Divider";
import StepTwoDetails from "../StepTwo/StepTwoDetails";
import OtpField from "../FormUi/OtpField";
import swal from "sweetalert";

const stepFourValidate = Yup.object({
  otp1: Yup.number().required(),
  otp2: Yup.number().required(),
  otp3: Yup.number().required(),
  otp4: Yup.number().required(),
});

const StepFour = (props) => {
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();

  useEffect(() => {
    one.current.focus();
  }, []);

  const focusTwo = (e) => {
    var key = e.which || e.KeyCode;
    if (key >= 96 && key <= 105) {
      two.current.focus();
    }
  };

  const focusThree = (e) => {
    var key = e.which || e.KeyCode;
    if (key >= 96 && key <= 105) {
      three.current.focus();
    }
  };

  const focusFour = (e) => {
    var key = e.which || e.KeyCode;
    if (key >= 96 && key <= 105) {
      four.current.focus();
    }
  };

  const calculateDigit = (x) => {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
  };

  const handleSubmit = (values) => {
    var otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
    if (otp == 1234) {
      props.data.otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
      props.next(values, true);
    } else if (calculateDigit(otp) == 4) {
      swal("Wrong OTP!", "Please try again!", "error");
      values.otp1 = "";
      values.otp2 = "";
      values.otp3 = "";
      values.otp4 = "";
      one.current.focus();
    } else {
      values.otp1 = "";
      values.otp2 = "";
      values.otp3 = "";
      values.otp4 = "";
      one.current.focus();
    }
  };
  return (
    <Formik validationSchema={stepFourValidate} initialValues={props.data}>
      {({ values }) => (
        <Form>
          <div className="formOneDataContainer">
            <div>
              <StepOneDetails
                sourceDestination={props.data.sourceDestination}
                destination={props.data.destination}
                numberOfTravellers={props.data.numberOfTravellers}
                carType={props.data.carType}
              />
            </div>
            <div>
              <span className="prevButton" onClick={() => props.prev(values)}>
                <ModeEditIcon style={{ fontSize: 15 }} />
                Edit
              </span>
            </div>
          </div>
          <Divider style={{ marginTop: "20px" }} />
          <StepTwoDetails
            name={props.data.name}
            mobile={props.data.mobile}
            remarks={props.data.remarks}
            bidAmount={props.data.bidAmount}
            stepThree={true}
          />
          <Divider style={{ marginTop: "20px" }} />
          <div className="formFourContainer">
            <div className="otpInstructions">
              <div>
                We've sent an OTP to your number, Please enter it below to
                submit your bid &nbsp;
                {props.data.mobile ? (
                  <>
                    <b>{props.data.mobile}</b> &nbsp;
                    <span
                      className="prevButton"
                      onClick={() => props.prev(values)}
                    >
                      <ModeEditIcon style={{ fontSize: 15 }} /> Edit
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="formFourOtp">
              <OtpField
                name="otp1"
                inputRef={one}
                onKeyUp={(e) => focusTwo(e)}
              />
              <OtpField
                name="otp2"
                inputRef={two}
                onKeyUp={(e) => focusThree(e)}
              />
              <OtpField
                name="otp3"
                inputRef={three}
                onKeyUp={(e) => focusFour(e)}
              />
              <OtpField
                inputRef={four}
                name="otp4"
                onKeyUp={() => {
                  handleSubmit(values);
                }}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepFour;
