import { useState } from "react";
import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import StepThree from "./components/StepThree/StepThree";
import Navbar from "./components/Navbar/Navbar";
import StepFour from "./components/StepFour/StepFour";
import swal from "sweetalert";
import Header from "./components/Header/Header";
import "./Styles/root.css";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    sourceDestination: "",
    destination: "",
    carType: "",
    numberOfTravellers: "",
    bidAmount: "",
    mobile: "",
    name: "",
    remarks: "",
    otp: "",
  });

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      if (data.otp == "1234") {
        swal("Bingo!", "You Vahak is on the way!", "success");
        console.log("from submiteed", data);
        return;
      } else {
        swal("Wrong OTP!", "Please try again!", "error");
        console.log("Wrong OTP", data);
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} data={data} prev={handlePrevStep} />,
    <StepThree next={handleNextStep} data={data} prev={handlePrevStep} />,
    <StepFour next={handleNextStep} data={data} prev={handlePrevStep} />,
  ];

  const heading = [
    "Place your Bid (1/4 step)",
    "Place your Bid (2/4 step)",
    "Place your Bid (3/4 step)",
    "Place your Bid (4/4 step)",
  ];

  return (
    <>
      <Navbar />
      <div className="stepsContainer">
        <div className="bodyContainer">
          <Header heading={heading[currentStep]} />
          <div className="bodyWrapper">
            <div className="formContainer">{steps[currentStep]}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
