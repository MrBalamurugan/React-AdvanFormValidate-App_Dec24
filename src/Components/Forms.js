import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";


const Forms = () => {

 // Validation Schema using Yup
 const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username cannot exceed 15 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    dob: Yup.date()
      .required("Date of Birth is required")
      .max(new Date(), "Date of Birth cannot be in the future"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Gender is required")
      .required("Gender is required"),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      dob: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="error">{formik.errors.username}</div>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        {/* DOB */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="error">{formik.errors.dob}</div>
          )}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.gender === "male"}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.gender === "female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <div className="error">{formik.errors.gender}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms