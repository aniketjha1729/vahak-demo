import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import "./index.css";
import Navbar from "./components/Navbar";
import StepFour from "./components/StepFour";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    sourceDestination: "Patna",
    destination: "Mumbai",
    carType: "SUV",
    numberOfTravellers: "5",
    bidAmount: "100050",
    mobile: "7449849564",
    name: "Aniket Kumar",
    remarks: "Nice to meet you but mee",
    otp: "",
  });

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      console.log("from submiteed");
      return;
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
