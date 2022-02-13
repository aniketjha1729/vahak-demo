import React from "react";
import { Formik, Form } from "formik";
import TextField from "./formUi/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import Header from "./Header";
import Select from "./formUi/Select";
import cars from "./car.json";
import "./steps.css";

const stepOneValidate = Yup.object({
  sourceDestination: Yup.string().required().label("Source is required"),
  destination: Yup.string().required().label("destination is required"),
  carType: Yup.string().required().label("carType is required"),
  numberOfTravellers: Yup.string()
    .required()
    .label("numberOfTravellers is required"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div>
      <Header heading="Place your Bid (1/4 step)" />
      <div className="formConatiner">
        <Formik
          validationSchema={stepOneValidate}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="form">
                <div className="stepOne-rows stepOne-destinations">
                  <div>
                    <TextField
                      name="sourceDestination"
                      label="Source Location *"
                    />
                  </div>
                  <div>
                    <TextField name="destination" label="Destination *" />
                  </div>
                </div>
                <div className="stepOne-rows">
                  <Select
                    name="carType"
                    label="Enter Car Type *"
                    options={cars}
                  />
                </div>
                <div className="stepOne-rows">
                  <TextField
                    name="numberOfTravellers"
                    label="Number Of Travellers"
                  />
                </div>
                <div className="stepOne-rows">
                  <Button fullWidth type="submit" variant="contained" color="primary">
                    Enter Bid Details
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

export default StepOne;
