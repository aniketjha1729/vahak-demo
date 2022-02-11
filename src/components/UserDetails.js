import React from "react";
import Header from "./Header";

const UserDetails = ({ setPage, formData, setFormData }) => {
  return (
    <div>
      <Header title="Place your Bid 3/5" />
      <button
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Back
      </button>{" "}
      <input
        type="text"
        placeholder="Name..."
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
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

export default UserDetails;
