import React from "react";
import Header from "./Header";

const JourneyDetails = ({ setPage, formData, setFormData }) => {
  return (
    <div>
      <Header title="Place your Bid(1/5 step)" />
      <input
        type="text"
        placeholder="Car Type..."
        value={formData.carType}
        onChange={(event) =>
          setFormData({ ...formData, carType: event.target.value })
        }
      />
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Journey
      </button>
      
    </div>
  );
};

export default JourneyDetails;
