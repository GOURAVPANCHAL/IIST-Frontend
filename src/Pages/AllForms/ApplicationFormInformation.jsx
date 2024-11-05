import React, { useState } from "react";
import "./allform.css";
import logo from "../../Assets/gallery/IISD.png";
const ApplicationFormInformation = () => {
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
    phone: "",
    mobile: "",
    institutionName: "",
    placeDate: "",
    signature: "",
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
        phone: "",
        mobile: "",
        institutionName: "",
        placeDate: "",
        signature: "",
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
                className="text-center mb-4"
              >
                <span> भारतीय कौशल विकास संस्थान</span> <br />
                INDIAN INSTITUTE OF SKILL DEVELOPMENT
              </h2>
              <h5 className="text-center text-muted">
                APPLICATION FORM FOR ESTABLISHMENT INFORMATION, GUIDANCE &
                COUNSELING CENTRE
              </h5>
            </div>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            {/* Grid Row for Name, Gender, Date of Birth */}
            <div className="row">
              <div className="col-md-12">
                <label className="form-label">
                  For Office Use : Authorization Centre Code :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="authCode"
                  value={formData.authCode}
                  onChange={handleChange}
                />
                {errors.authCode && (
                  <p className="text-danger">{errors.authCode}</p>
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
                <label className="form-label">Gender</label>
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
            <div className="row ">
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
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Nationality</label>
                <input
                  type="text"
                  className="form-control"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Enter nationality"
                />
                {errors.nationality && (
                  <p className="text-danger">{errors.nationality}</p>
                )}
              </div>
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Mailing Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter mailing address"
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>
            </div>

            {/* City and Contact Info */}
            <div className="row">
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">City with Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city with pin code"
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                />
                {errors.mobile && (
                  <p className="text-danger">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Institution Name and Signature */}
            <div className="row">
              <div className="col-md-12 mb-2 mt-2">
                <label className="form-label">
                  NAME OF THE SOCIETY/ INSTITUTION, & ADDRESS WHERE WANT TO RUN
                  THE TRAINING & INFORMATION CENTRE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  placeholder="Enter name of the institution"
                />
                {errors.institutionName && (
                  <p className="text-danger">{errors.institutionName}</p>
                )}
              </div>
              <div className="col-md-6 mb-2 mt-2">
                <label className="form-label">Place & Date</label>
                <input
                  type="text"
                  className="form-control"
                  name="placeDate"
                  value={formData.placeDate}
                  onChange={handleChange}
                  placeholder="Enter place & date"
                />
                {errors.placeDate && (
                  <p className="text-danger">{errors.placeDate}</p>
                )}
              </div>
              <div className="col-md-6 mb-2 mt-2">
                <div className="mb-3">
                  <label className="form-label">Applicant's Signature</label>
                  <input
                    type="text"
                    className="form-control"
                    name="signature"
                    value={formData.signature}
                    onChange={handleChange}
                    placeholder="Enter your signature"
                  />
                  {errors.signature && (
                    <p className="text-danger">{errors.signature}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Signature */}

            <div className="text-center">
              <button type="submit" className="loginBtn">
                Submit Application
              </button>
            </div>
          </form>
          <div className="mt-5">
            <h2 className="text-center">DECLARATION BY THE APPLICANT</h2>
            <p>
              I hereby declare that aforementioned information above are true
              and complete to the best of my knowledge and belief. I have read
              and understood the rules, regulation, recognition and eligibility
              conditions of the institution. I also agree that I shall be abide
              the rules & regulations made by the Institution in welfare of
              public and institution. I understood that the institution has
              right cancel to stop my all activities regarding to Institution,
              if it is found the activities against the welfare of institution
              and beyond the rights and duties of Centre head imposed by the
              institution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationFormInformation;
