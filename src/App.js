import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import "./index.css";
import Navbar from "./components/Navbar";
import StepFour from "./components/StepFour";
import swal from "sweetalert";

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

  return (
    <>
      <Navbar />
      <div className="stepsContainer">{steps[currentStep]}</div>
    </>
  );
}

export default App;
