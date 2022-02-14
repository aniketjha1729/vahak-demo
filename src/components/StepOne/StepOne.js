import React from "react";
import { Formik, Form } from "formik";
import TextField from "../FormUi/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import Header from "../Header/Header";
import Select from "../FormUi/Select";
import cars from "./car.json";
import "./stepOne.css";

const stepOneValidate = Yup.object({
  sourceDestination: Yup.string().required().label("Source is required"),
  destination: Yup.string().required().label("destination is required"),
  carType: Yup.string().required().label("carType is required"),
  numberOfTravellers: Yup.mixed().when("carType", {
    is: "SUV",
    then: Yup.number().required().max(6),
    otherwise: Yup.number().required().max(4),
  }),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="bodyContainer">
      <Header heading="Place your Bid (1/4 step)" />
      <div className="bodyWrapper">
        <div className="formContainer">
          <Formik
            validationSchema={stepOneValidate}
            initialValues={props.data}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="formOneContainer">
                  <div className="formOneRows">
                    <div>
                      <TextField
                        name="sourceDestination"
                        label="Source Location *"
                        variant="outlined"
                        inputProps="false"
                        style={{ fontSize: 15 }}
                      />
                    </div>
                    <div>
                      <TextField
                        name="destination"
                        label="Destination *"
                        variant="outlined"
                        inputProps="false"
                      />
                    </div>
                  </div>
                  <div className="formOneRows">
                    <Select
                      name="carType"
                      label="Enter Car Type *"
                      options={cars}
                    />
                  </div>
                  <div className="formOneRows">
                    <TextField
                      name="numberOfTravellers"
                      label="Number Of Travellers"
                      variant="outlined"
                      inputProps="false"
                    />
                  </div>
                  <div className="formOneRows">
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Enter Bid Details
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
