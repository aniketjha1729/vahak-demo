import { useState } from "react";
import Navbar from "./components/Navbar";
import Otp from "./components/Otp";
import SubmitBid from "./components/SubmitBid";
import Bid from "./components/Bid";
import JourneyDetails from "./components/JourneyDetails";
import UserDetails from "./components/UserDetails";
import "./index.css";

function App() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    sourceDestination: "",
    destination: "",
    carType: "",
    numberOfTravellers: "",
    bidAmount: "",
    mobile: "all",
    name: "",
    remarks: "",
    otp: "",
  });

  
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <JourneyDetails
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <Bid formData={formData} setFormData={setFormData} setPage={setPage} />
      );
    } else if (page === 2) {
      return (
        <UserDetails
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return (
        <Otp formData={formData} setFormData={setFormData} setPage={setPage} />
      );
    } else {
      return (
        <SubmitBid
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
        />
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="form"></div>
      {PageDisplay()}
    </>
  );
}

export default App;
