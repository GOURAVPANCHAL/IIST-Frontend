import React from "react";
import "./franchise.css";
import { Link } from "react-router-dom";
const Franchise = () => {
  const categories = [
    "Beauty & Wellness",
    "Cutting & Tailoring",
    "Fashion Designing",
    "Interior Designing",
    "Textile Designing",
    "Gems & Jewellery",
    "Teacher Training",
    "Cooking",
    "Hotel & Catering Management",
    "Computer Education",
    "Management",
    "Mobile & Laptop Repairing",
    "Paramedical Training",
    "Safety & Electrician Courses",
    "Automobile Programs",
    "And Others",
  ];

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h2>Become an IISD Franchisee</h2>
        </div>
        <p>
          If you are running a Vocational, Skill, Hobby Training, Education, or
          Industrial/Technical Training Institution in any field, the Indian
          Institute of Skill Development (IISD) offers you the opportunity to
          partner with us and elevate your center’s potential. As an IISD
          franchisee, you’ll gain access to valuable resources,
          industry-recognized certifications, and student benefits.
        </p>
        <div className="mt-4">
          <div className="row">
            {categories.map((category, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
                <p className="category-item text-center py-3 px-3">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="questions">
          <h4>
            <b>Why Partner with IISD?</b>
          </h4>
          <ol>
            <li>
              <b>Authorization & Certification</b>
            </li>
            <p>
              Receive an official Authorization Certificate and a unique Login
              ID for your institution on the IISD platform.
            </p>
            <li>
              <b>Marketing Materials</b>
            </li>
            <p>
              Gain access to advertisement materials such as flex banners,
              brochures, and prospectus to promote your courses and affilation
              with IISD.
            </p>
            <li>
              <b>Ongoing Support</b>
            </li>
            <p>
              An IISD Executive will assist with training, guidance, and any
              other support your institution may need post-registration.
            </p>
          </ol>
          <h4>
            <b>How to Become an IISD Franchisee</b>
          </h4>
          <ol>
            <li>
              <b>Complete the Application Form</b>
            </li>
            <p>
              Fill out the <a href=""> application form</a> with accurate
              details of your institution or proposed institution, attaching all
              relevant documents.
            </p>
            <li>
              <b>Pay the Administrative Fee</b>
            </li>
            <p>
              Submit a non-refundable administrative fee of ₹2100/- via Demand
              Draft (DD) or Cheque, payable to “Indian Institute of Skill
              Development” in New Delhi.
            </p>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="franchise_bg">
              <h5 className="my-3"><Link className="text-white" target="_blank" to=""> Download </Link> &nbsp;the IISD Prospectus</h5>
              <p>
                Learn more about the benefits of partnering with IISD. Download
                our prospectus and explore how affiliating with us can take your
                institution to the next level.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="franchise_bg">
              <h5 className="my-3">
                Get started with your franchise application now!
              </h5>
              <p>
                <Link target="_blank" className="text-white"  to=""> Click the link </Link> &nbsp;to go to the application form and follow the
                steps to submit your documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
