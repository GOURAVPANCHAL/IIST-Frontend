import React from "react";
import banner1 from "../../Assets/banners/banner6.jpg";
const ComputerScience = () => {
  const coursesData = [
    {
      id: 1,
      name: "Certificate in Computer Applications",
      duration: "3 Months",
      eligibility: "Any",
      fees: 500,
    },
    {
      id: 2,
      name: "Diploma in Office Assist Cum Computer Operator",
      duration: "12 Months",
      eligibility: "10th",
      fees: 1500,
    },
    {
      id: 3,
      name: "Certificate in Financial Accounts",
      duration: "3 Months",
      eligibility: "Any",
      fees: 500,
    },
    {
      id: 4,
      name: "Certificate in AutoCAD with Drafting / Engineering Drawing",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 5,
      name: "Certificate in Computer Operator/Computing (CIC)",
      duration: "3 Months",
      eligibility: "Any",
      fees: 500,
    },
    {
      id: 6,
      name: "Certificate in Computer Assembling & Installation",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 7,
      name: "Certificate in Printing Technology(Green Printing)",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 8,
      name: "Certificate in Business / Operation Management",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 9,
      name: "Certificate in Draughtsman Mechanical / Civil",
      duration: "3 Months",
      eligibility: "Any",
      fees: 500,
    },
    {
      id: 10,
      name: "Certificate in Dress Making / Dress Designing",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 11,
      name: "Certificate in HVAC / Primavera / Catia",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 12,
      name: "Certificate in 3DS Max / Pro-E / Stad Pro",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 13,
      name: "Certificate in Computer Aided Manufacturing",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 14,
      name: "Diploma in Data Entry Operator / Computer Software",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 15,
      name: "Diploma in Desk Top Publishing/ Web Designing",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 16,
      name: "Diploma in Modern Office Management/ Financial Accounts",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 17,
      name: "Diploma in Software Development/ Programming Language",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 18,
      name: "Diploma in Computer Hardware & Repairing / Networking",
      duration: "6 Months",
      eligibility: "Any",
      fees: 1000,
    },
    {
      id: 19,
      name: "Diploma in Information Technology (DIT)",
      duration: "12 Months",
      eligibility: "10th",
      fees: 1500,
    },
    {
      id: 20,
      name: "Diploma in Graphics & Multimedia",
      duration: "12 Months",
      eligibility: "12th",
      fees: 1500,
    },
    {
      id: 21,
      name: "Diploma in Computer Applications & Management",
      duration: "12 Months",
      eligibility: "10th",
      fees: 1500,
    },
    {
      id: 22,
      name: "Advance Diploma in Computer Applications & Mgmt",
      duration: "12 Months",
      eligibility: "Diploma",
      fees: 1500,
    },
    {
      id: 23,
      name: "Bachelor in Computer Applications & Management",
      duration: "12 Months",
      eligibility: "Advance Diploma",
      fees: 1500,
    },
    {
      id: 24,
      name: "Diploma in Information Technology & Management",
      duration: "12 Months",
      eligibility: "10th",
      fees: 1500,
    },
    {
      id: 25,
      name: "Advance Diploma in Information Technology & Mgmt",
      duration: "12 Months",
      eligibility: "Diploma",
      fees: 1500,
    },
    {
      id: 26,
      name: "Bachelor in Information Technology & Management",
      duration: "12 Months",
      eligibility: "Advance Diploma",
      fees: 1500,
    },
  ];

  return (
    <>
      <div className="bannerImage">
        <img src={banner1} className="w-100" alt="" />
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Courses Offered</h2>
        <div className="tablesdata">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>S. NO.</th>
              <th>SUBJECTS / STREAMS / PROGRAMME</th>
              <th>DURATION</th>
              <th>ELIGIBILITY</th>
              <th>EXAM FEE</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.eligibility}</td>
                <td>{course.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default ComputerScience;
