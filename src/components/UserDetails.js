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
      <div>
        <input
          type="text"
          placeholder="Name..."
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="mobile..."
          value={formData.mobile}
          onChange={(event) =>
            setFormData({ ...formData, mobile: event.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="remarks..."
          value={formData.remarks}
          onChange={(event) =>
            setFormData({ ...formData, remarks: event.target.value })
          }
        />
      </div>
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Verify via OTP
      </button>{" "}
    </div>
  );
};

export default UserDetails;
