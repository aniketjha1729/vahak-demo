import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./steps.css";

const StepTwoDetails = (props) => {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const bid = props.bidAmount;
  return (
    <>
      <div className="bidAmountDetails">
        &#8377; {numberWithCommas(props.bidAmount)}
      </div>
      <div className="negotiate">
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Rate Negotiable"
        />
      </div>
    </>
  );
};

export default StepTwoDetails;
