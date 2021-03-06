import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./stepTwo.css";

const StepTwoDetails = (props) => {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <div
        className={
          !props.stepThree ? "formTwoDataContainer" : "twoThreeDetails"
        }
      >
        {!props.stepThree ? (
          <div className="rupeeSymbol">
            &#8377; {numberWithCommas(props.bidAmount)}
          </div>
        ) : (
          <div className="bidSummary">
            <div className="formThreeData">
              <h5>BID DETAILS</h5>
              <p>+91-{props.mobile}</p>
              <p>{props.name}</p>
              <p>{props.remarks}</p>
            </div>
            <div className="finalBidAmount">
              <div>&#8377; {numberWithCommas(props.bidAmount)}</div>
              <div>Fixed Price</div>
            </div>
          </div>
        )}
      </div>
      {!props.stepThree ? (
        <div className="formTwoCheckBox">
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Rate Negotiable"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default StepTwoDetails;
