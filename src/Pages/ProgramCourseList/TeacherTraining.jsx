import React from "react";
import banner1 from "../../Assets/banners/banner7.jpg";
const coursesData = [
  {
    id: 1,
    name: "Diploma in Computer / Yoga Teacher Training ",
    duration: "12 Months",
    eligibility: "12th",
    fees: 1500,
  },
  {
    id: 2,
    name: "Diploma in Early Childhood Care (NTT) / PTT",
    duration: "12 Months",
    eligibility: "12th",
    fees: 1500,
  },
  {
    id: 3,
    name: "Diploma in Creche / Pre School Management",
    duration: "12 Months",
    eligibility: "12th",
    fees: 1500,
  },
  {
    id: 4,
    name: "Diploma in English Teacher / Physical Teacher Training",
    duration: "12 Months",
    eligibility: "12th",
    fees: 1500,
  },
  {
    id: 5,
    name: "Diploma in Library Assistant",
    duration: "12 Months",
    eligibility: "10th",
    fees: 1500,
  },
  {
    id: 6,
    name: "Diploma in Women Empowerment and Development",
    duration: "12 Months",
    eligibility: "10th",
    fees: 1500,
  },
  {
    id: 7,
    name: "P. G. Diploma in Distance / Higher Education Management",
    duration: "12 Months",
    eligibility: "Bachelor",
    fees: 1500,
  },
  {
    id: 8,
    name: "P. G. Diploma in Educational Management & Administration",
    duration: "12 Months",
    eligibility: "Bachelor",
    fees: 1500,
  },
];
const TeacherTraining = () => {
  return (
    <>
      <div className="bannerImage">
        <img src={banner1} className="w-100" alt="" />
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">TEACEHR TRAINING PROGRAMS</h2>
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

export default TeacherTraining;
