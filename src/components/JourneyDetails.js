import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import TextField from "@material-ui/core/TextField";

const JourneyDetails = ({ setPage, formData, setFormData, displayData }) => {
  // const [formData, setFormData] = useState({
  //   sourceDestination: "",
  //   destination: "",
  //   carType: "",
  //   numberOfTravellers: "",
  // });

  const formik = useFormik({
    initialValues: {
      sourceDestination: formData.sourceDestination,
      destination: formData.destination,
      carType: formData.carType,
      numberOfTravellers: formData.numberOfTravellers,
    },

    onSubmit: (values) => {
      setFormData({
        ...formData,
        sourceDestination: formik.values.sourceDestination,
        destination: formik.values.destination,
        carType: formik.values.carType,
        numberOfTravellers: formik.values.numberOfTravellers,
      });
      displayData();
    },

    validationSchema: Yup.object({
      sourceDestination: Yup.string().required("Required"),
      destination: Yup.string().required("Required"),
      carType: Yup.string().required("Required"),
      numberOfTravellers: Yup.string().required("Required"),
    }),
  });

  console.log(formData);

  return (
    <>
      <Header title="" />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            error={
              formik.touched.sourceDestination &&
              formik.errors.sourceDestination
            }
            type="text"
            size="small"
            variant="outlined"
            label="Source Location"
            name="sourceDestination"
            value={formik.values.sourceDestination}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.sourceDestination &&
          formik.errors.sourceDestination ? (
            <p>{formik.errors.sourceDestination}</p>
          ) : null}
        </div>
        <div>
          <TextField
            error={formik.touched.carType && formik.errors.carType}
            type="text"
            size="small"
            variant="outlined"
            name="carType"
            label="Car Type"
            value={formik.values.carType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.carType && formik.errors.carType ? (
            <p>{formik.errors.carType}</p>
          ) : null}
        </div>
        <div>
          <TextField
            error={formik.touched.destination && formik.errors.destination}
            type="text"
            size="small"
            variant="outlined"
            name="destination"
            label="Destination"
            value={formik.values.destination}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.destination && formik.errors.destination ? (
            <p>{formik.errors.destination}</p>
          ) : null}
        </div>
        <div>
          <TextField
            error={
              formik.touched.numberOfTravellers &&
              formik.errors.numberOfTravellers
            }
            type="text"
            size="small"
            variant="outlined"
            name="numberOfTravellers"
            label="No of Travellers"
            value={formik.values.numberOfTravellers}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.numberOfTravellers &&
          formik.errors.numberOfTravellers ? (
            <p>{formik.errors.numberOfTravellers}</p>
          ) : null}
        </div>
        <button
          type="submit"
          // onClick={() => {
          //   setPage((currPage) => currPage + 1);
          // }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default JourneyDetails;
