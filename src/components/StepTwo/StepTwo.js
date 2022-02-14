import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "../FormUi/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "../Header/Header";
import * as Yup from "yup";
import "./stepTwo.css";
import StepOneDetails from "../StepOne/StepOneDetails";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const stepTwoValidate = Yup.object({
  bidAmount: Yup.number().required(),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="bodyContainer">
      <Header heading="Place your Bid (2/4 step)" />
      <div className="bodyWrapper">
        <div className="formContainer">
          <Formik
            validationSchema={stepTwoValidate}
            initialValues={props.data}
            onSubmit={handleSubmit}
          >
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
                    <span
                      className="prevButton"
                      onClick={() => props.prev(values)}
                    >
                      <ModeEditIcon style={{ fontSize: 15 }} />
                      Edit
                    </span>
                  </div>
                </div>
                <Divider style={{ marginTop: "20px" }} />
                <div className="formTwoContainer">
                  <div className="formTwo">
                    <div className="rupeeSymbol">&#8377;</div>
                    <div>
                      <TextField name="bidAmount" />
                    </div>
                  </div>
                </div>
                <div className="formTwoCheckBox">
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Rate Negotiable"
                  />
                </div>
                <div className="formTwoSubmit">
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
      {/* <div className="formConatiner">
        <Formik
          validationSchema={stepTwoValidate}
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
                  <span
                    className="prevButton"
                    onClick={() => props.prev(values)}
                  >
                    <ModeEditIcon style={{ fontSize: 15 }} />
                    Edit
                  </span>
                </div>
                <Divider />
                <div className="formTwoConatiner">
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
      </div> */}
    </div>
  );
};

export default StepTwo;
