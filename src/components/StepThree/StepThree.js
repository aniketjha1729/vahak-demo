import React from "react";
import { Formik, Form } from "formik";
import TextField from "../FormUi/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import "./stepThree.css";
import StepOneDetails from "../StepOne/StepOneDetails";
import Divider from "@material-ui/core/Divider";
import StepTwoDetails from "../StepTwo/StepTwoDetails";
import MobileField from "../FormUi/MobileField";
import WhatsApp from "../../assets/whatsapp.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const stepThreeValidate = Yup.object({
  mobile: Yup.number().min(10, "Must be of 10 digit"),
  name: Yup.string().required(),
  remarks: Yup.string(),
});

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik
      validationSchema={stepThreeValidate}
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
              <span className="prevButton" onClick={() => props.prev(values)}>
                <ModeEditIcon style={{ fontSize: 15 }} />
                Edit
              </span>
            </div>
          </div>
          <Divider style={{ marginTop: "20px" }} />
          <StepTwoDetails bidAmount={props.data.bidAmount} stepThree={false} />
          <Divider style={{ marginTop: "20px" }} />
          <div className="formThreeContainer">
            <div className="formThreeRows">
              <MobileField name="mobile" />
              <div className="greyBox">
                <div>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Get updates on"
                  />
                </div>
                <div className="whatsappImg">
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
        </Form>
      )}
    </Formik>
  );
};

export default StepThree;
