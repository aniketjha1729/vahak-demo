import React from "react";
import Header from "./Header";

const SubmitBid = ({ setPage, formData, setFormData }) => {
  return (
    <div>
      <Header title="Summary & Submit Bid(5/5)" />
      <button
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Back
      </button>{" "}
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

export default SubmitBid;
