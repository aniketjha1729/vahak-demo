import React from "react";
import "./steps.css";
const StepOneDetails = (props) => {
  return (
    <div className="stepTwo-prevData">
      <h5>JOURNEY DETAILS</h5>
      <p>
        {props.sourceDestination} ---
        {props.destination}
      </p>
      <p>
        {props.numberOfTravellers} Persons,
        {props.carType}
      </p>
    </div>
  );
};

export default StepOneDetails;
