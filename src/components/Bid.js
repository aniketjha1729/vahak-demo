import React from "react";
import Header from "./Header";

const Bid = ({ setPage, formData, setFormData }) => {
  return (
    <div>
      <Header title="Place your Bid(2/5 step)" />
      <button
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Back
      </button>{" "}
      <input
        type="text"
        placeholder="Bid..."
        value={formData.bidAmount}
        onChange={(event) =>
          setFormData({ ...formData, bidAmount: event.target.value })
        }
      />
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Next
      </button>{" "}
    </div>
  );
};

export default Bid;
