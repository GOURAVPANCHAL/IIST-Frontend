import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/gallery/working-women.jpg";
import "./program.css";
import image1 from "../../Assets/programs/ComputerScienceand IT-min.jpg";
import image2 from "../../Assets/programs/teachertrainingicon-min.jpg";
import image3 from "../../Assets/programs/HospitalandHealhManagementicon-min.jpg";
import image4 from "../../Assets/programs/BeautyWellnessandCosmetics-min.jpg";
import image5 from "../../Assets/programs/ArtsandPaintings-min.jpg";
import image6 from "../../Assets/programs/Tailoring-min.jpg";
import image7 from "../../Assets/programs/BusinessManagement-min.jpg";
import image8 from "../../Assets/programs/Industrial Trade Skills -min.jpg";
import image9 from "../../Assets/programs/TechnicalTradeSkills-min.jpg";
import image10 from "../../Assets/programs/safety-management-leadership-min.jpg";
import image11 from "../../Assets/programs/HospitalandHealhManagementicon-min.jpg";
import image12 from "../../Assets/programs/Designing-for-the-Future-Technology-min.png";
const Programs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const Programs = [
    { name: "Computer Science and IT", url: "/programs/computer-science-&-IT", img: image1 },
    { name: "Teacher Training", url: "/programs/teacher-training", img: image2 },
    { name: "Hospital and Health Management", url: "#", img: image3 },
    { name: "Beauty, Wellness and Cosmetics", url: "#", img: image4 },
    { name: "Arts and Paintings", url: "#", img: image5 },
    { name: "Tailoring", url: "#", img: image6 },
    { name: "Business Management", url: "#", img: image7 },
    { name: "Safety Management", url: "#", img: image10 },
    { name: "Industrial Trade Skills", url: "#", img: image8 },
    { name: "Technical Trade Skills", url: "#", img: image9 },
    { name: "Hotel, Hospitality,Tour and Travels", url: "#", img: image11 },
    { name: "Designing", url: "#", img: image12 },
  ];

  return (
    <div className="container my-3">
      <div className="row">
        {Programs.map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Link to={item.url}>
              <div className="programsImage">
                <img src={item.img} className="w-100" alt="program" />
                <div className="program_content">
                  <h5>{item.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
