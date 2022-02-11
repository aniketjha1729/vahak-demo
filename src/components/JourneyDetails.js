import React from "react";
import Header from "./Header";

const JourneyDetails = ({ setPage, formData, setFormData }) => {
  return (
    <div>
      <Header title="Place your Bid(1/5 step)" />
      <div>
        <input
          type="text"
          placeholder="Source Destination..."
          value={formData.sourceDestination}
          onChange={(event) =>
            setFormData({ ...formData, sourceDestination: event.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Destination..."
          value={formData.destination}
          onChange={(event) =>
            setFormData({ ...formData, destination: event.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Car Type..."
          value={formData.carType}
          onChange={(event) =>
            setFormData({ ...formData, carType: event.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Number Of Travellers..."
          value={formData.numberOfTravellers}
          onChange={(event) =>
            setFormData({ ...formData, numberOfTravellers: event.target.value })
          }
        />
      </div>
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Enter Bid Details
      </button>
    </div>
  );
};

export default JourneyDetails;
