import React from "react";
import Header from "./Header";

const Otp = ({ setPage, formData, setFormData }) => {
  return (
    <div>
      <Header title="Verify OTP(4/5)" />
      <button
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Back
      </button>{" "}
      <input
        type="text"
        placeholder="Otp..."
        value={formData.otp}
        onChange={(event) =>
          setFormData({ ...formData, otp: event.target.value })
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

export default Otp;
