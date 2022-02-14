import { useState } from "react";
import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import StepThree from "./components/StepThree/StepThree";
import Navbar from "./components/Navbar/Navbar";
import StepFour from "./components/StepFour/StepFour";
import "./index.css";
import swal from "sweetalert";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    sourceDestination: "Patna",
    destination: "Mumbai",
    carType: "SUV",
    numberOfTravellers: "4",
    bidAmount: "18256",
    mobile: "993486601",
    name: "Aniket Kumar",
    remarks: "hello and bye goog ",
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
