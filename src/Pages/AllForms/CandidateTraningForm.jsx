import React, { useState } from "react";
import "./allform.css";
import logo from "../../Assets/gallery/IISD.png";
const CandidateTraningForm = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    authCode: "",
    name: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
    academicQualification: "",
    technicalQualification: "",
    nationality: "",
    address: "",
    city: "",
    Country: "",
    phone: "",
    addressOfTraining: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
        isValid = false;
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);

      // Reset form fields
      setFormData({
        authCode: "",
        name: "",
        gender: "",
        dob: "",
        fatherName: "",
        motherName: "",
        academicQualification: "",
        technicalQualification: "",
        nationality: "",
        address: "",
        city: "",
        Country: "",
        phone: "",
        email: "",
        addressOfTraining: "",
    });
    }
  };
  return (
    <>
      <div className="container my-3">
        <div className="allforms">
          <div>
            <div className="d-flex justify-content-center">
              <img
                src={logo}
                style={{ height: "80px", width: "auto" }}
                alt="logo"
              />
            </div>
            <div>
              <h2
                style={{ color: `var(--color-began)` }}
                className="text-center mb-3"
              >
                <span> भारतीय कौशल विकास संस्थान</span> <br />
                INDIAN INSTITUTE OF SKILL DEVELOPMENT
              </h2>
              <h5 className="text-center text-muted">
                प्रशिक्षण केन्द्रों के माध्यम से आये अभ्यर्थियों के लिए
              </h5>
              <h5 className="text-center text-muted">
                (CANDIDATE THROUGH TRAINING CENTERS)
              </h5>
              <h6 className="text-center text-muted">
                REGISTRATION & EXAMINATION FORM
              </h6>
            </div>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-2 mt-2">
                <label className="form-label">
                  Code, Name & Address Of Training Center
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="addressOfTraining"
                  value={formData.addressOfTraining}
                  onChange={handleChange}
                  placeholder="Enter Name & Address Of Training Center"
                />
                {errors.name && (
                  <p className="text-danger">{errors.addressOfTraining}</p>
                )}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Name of Applicant</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <p className="form-label">Gender</p>
                <div className="d-flex gap-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>
                {errors.gender && (
                  <p className="text-danger">{errors.gender}</p>
                )}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dob && <p className="text-danger">{errors.dob}</p>}
              </div>
            </div>

            {/* Father's and Mother's Name */}
            <div className="row">
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Father's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Enter father's name"
                />
                {errors.fatherName && (
                  <p className="text-danger">{errors.fatherName}</p>
                )}
              </div>
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Mother's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Enter mother's name"
                />
                {errors.motherName && (
                  <p className="text-danger">{errors.motherName}</p>
                )}
              </div>
            </div>

            {/* Academic and Technical Qualifications */}
            <div className="row">
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Academic Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  name="academicQualification"
                  value={formData.academicQualification}
                  onChange={handleChange}
                  placeholder="Enter academic qualification"
                />
                {errors.academicQualification && (
                  <p className="text-danger">{errors.academicQualification}</p>
                )}
              </div>
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Technical Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  name="technicalQualification"
                  value={formData.technicalQualification}
                  onChange={handleChange}
                  placeholder="Enter technical qualification (if any)"
                />
                {errors.technicalQualification && (
                  <p className="text-danger">{errors.technicalQualification}</p>
                )}
              </div>
            </div>

            {/* Nationality and Address */}
            <div className="row">
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Nationality</label>
                <input
                  type="text"
                  className="form-control"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Enter your nationality"
                />
                {errors.nationality && (
                  <p className="text-danger">{errors.nationality}</p>
                )}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="Country"
                  value={formData.Country}
                  onChange={handleChange}
                  placeholder="Enter your Country"
                />
                {errors.Country && (
                  <p className="text-danger">{errors.Country}</p>
                )}
              </div>
            </div>

            {/* City, Phone, and Email */}
            <div className="row">
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="row">
              <div className="col-md-12 mb-2 mt-2 text-center">
                <button type="submit" className="loginBtn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CandidateTraningForm;
