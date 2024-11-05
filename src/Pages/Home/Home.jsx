import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Carasol from "../../Components/Carasol/Carasol";
import hospitalParamedical from "../../Assets/skill-traning-program/hospital-paramedical.jpg";
import teacherTraining from "../../Assets/skill-traning-program/teacher-training.jpg";
import technicalSkill from "../../Assets/skill-traning-program/technical-skill.jpg";
import cuttingTailoring from "../../Assets/skill-traning-program/cutting-tailoring.jpg";
import safetyManagement from "../../Assets/skill-traning-program/safety-management.jpg";
import industrialSkillTraining from "../../Assets/skill-traning-program/industrial-skill-training.jpg";
import engineeringTraining from "../../Assets/skill-traning-program/engineering-training.webp";
import spokenEnglishPersonalityDevelopment from "../../Assets/skill-traning-program/spoken-english-personality-development.webp";
import hotelTourTravelManagement from "../../Assets/vocational-program/hotel-tour-travel-management.jpg";
import businessManagement from "../../Assets/vocational-program/business-management.webp";
import fashionInteriorTextileDesigning from "../../Assets/vocational-program/fashion-interior-textile-designing.webp";
import beautyWellness from "../../Assets/vocational-program/beauty-wellness.jpeg";
import computerIT from "../../Assets/vocational-program/computer-information-technology.jpeg";
import artsPainting from "../../Assets/vocational-program/arts-painting.jpg";
import OurAssociate from "../../Components/OurAssociate/OurAssociate";
import modi from "../../Assets/gallery/modi.png";
import abdul from "../../Assets/gallery/abdul.png";
import iisd from "../../Assets/gallery/IISD.png";
const skillTrainingPrograms = [
  {
    title: "Hospital & Paramedical",
    imgSrc: hospitalParamedical,
    link: "/hospital-paramedical",
  },
  {
    title: "Teacher Training",
    imgSrc: teacherTraining,
    link: "/teacher-training",
  },
  {
    title: "Technical Skill",
    imgSrc: technicalSkill,
    link: "/technical-skill",
  },
  {
    title: "Cutting & Tailoring",
    imgSrc: cuttingTailoring,
    link: "/cutting-tailoring",
  },
  {
    title: "Safety Management",
    imgSrc: safetyManagement,
    link: "/safety-management",
  },
  {
    title: "Industrial Skill Training",
    imgSrc: industrialSkillTraining,
    link: "/industrial-skill-training",
  },
  {
    title: "Engineering Training Programs",
    imgSrc: engineeringTraining,
    link: "/engineering-training",
  },
  {
    title: "Spoken English & Personality Development",
    imgSrc: spokenEnglishPersonalityDevelopment,
    link: "/spoken-english-personality-development",
  },
];

const vocationalPrograms = [
  {
    title: "Hotel  Tour & Travel Management",
    imgSrc: hotelTourTravelManagement,
    link: "/hotel-tour-management",
  },
  {
    title: "Business Management",
    imgSrc: businessManagement,
    link: "/business-management",
  },
  {
    title: "Fashion Interior Textile Designing",
    imgSrc: fashionInteriorTextileDesigning,
    link: "/fashion-interior-textile-designing",
  },
  {
    title: "Beauty & Wellness",
    imgSrc: beautyWellness,
    link: "/beauty-wellness",
  },
  {
    title: "Computer & Information Technology",
    imgSrc: computerIT,
    link: "/computer-it",
  },
  { title: "Arts & Painting", imgSrc: artsPainting, link: "/arts-painting" },
];

const Home = () => {
  const [caraImg, setImage] = useState([]);

  useEffect(() => {
    // Set the image array to state
    setImage([
      hospitalParamedical,
      teacherTraining,
      technicalSkill,
      cuttingTailoring,
      safetyManagement,
      industrialSkillTraining,
      engineeringTraining,
    ]);
  }, []);
  return (
    <>
      <Carasol />
      <section className="container">
        <div className="programs">
          <h2 className="section-title">SKILL DEVELOPMENT PROGRAMS</h2>
          <div className="program-list">
            {skillTrainingPrograms.map((program, index) => (
              <Link to={program.link} className="program-item" key={index}>
                <img
                  src={program.imgSrc}
                  alt={program.title}
                  className="program-img"
                />
                <h3>{program.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to={"/programs"} className="exploreBtn">
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="programs">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-title">OUR INSPIRATIONS</h2>
              <div className="inspiration">
                <div className="row">
                  <div className="col-md-4">
                    <div className="image">
                      <img src={modi} className="w-100" alt="dada Modi" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <p>
                        Prime Minister Modi's launch of the Skill India campaign
                        inspired IISD to focus on building a skilled workforce.
                        His emphasis on quality education motivated IISD to
                        create industry-relevant programs for students and
                        educators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inspiration mt-5">
                <div className="row">
                  <div className="col-md-4">
                    <div className="image">
                      <img src={abdul} className="w-100" alt="dada abdul" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <p>
                        Dr. Kalam’s vision of empowering India through skill
                        development inspires IISD to expand the nation's skill
                        ecosystem. We emphasize continuous learning and applying
                        the right skills, following Dr. Kalam’s guiding
                        principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="section-title">ORGANISATION PROFILE</h2>
              <div className="inspiration">
                <div className="row">
                  <div className="col-md-4">
                    <div className="image">
                      <img
                        src={iisd}
                        className="w-100"
                        alt="Our institute logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <p>
                        The Indian Institute of Skill Development (IISD) was
                        founded with a mission to bridge the skill gap in India
                        through quality training and online certification
                        programs.Our mission is to help students and
                        professionals gain the practical skills they need for
                        successful careers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Our mission is to help students and professionals gain the
                practical skills they need for successful careers. Our programs
                are industrially based and job-oriented, catering to employees
                working in various industries, workshops, factories,
                organizations, and educational institutes.
              </p>
              <p>
                IISD is an autonomous institution focused on providing intensive
                training in job-oriented fields such as Computer & IT, Fashion &
                Interior Designing, Business Management, Hotel Management,
                Teacher Training, and various technical skills.
              </p>
              <Link to={"about"} className="exploreBtn">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className="homeallbutton">
            <div className="row">
              <div className="col-md-3 col-6 mb-2">
                <Link to={"#"} className="exploreBtn">
                  PLACEMENT CELL
                </Link>
              </div>
              <div className="col-md-3 col-6 mb-2">
                <Link to={"/student-login"} className="exploreBtn">
                  STUDENT LOGIN
                </Link>
              </div>
              <div className="col-md-3 col-6">
                <Link to={"/centre-login"} className="exploreBtn">
                  CENTER LOGIN
                </Link>
              </div>
              <div className="col-md-3 col-6">
                <Link to={"about"} className="exploreBtn">
                  CENTER INVITATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5" style={{position:'relative'}}>
  <h2 className="text-center">Gallery</h2>
  <section className="hero-cara">
    {/* Previous button */}
    <div className="swiper-button-prev custom-prev">
      <i className="bi bi-arrow-left"></i>
    </div>

    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 2, // Show 1 image on very small screens
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2, // Show 2 images on screens >= 480px
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3, // Show 3 images on screens >= 768px
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5, // Show 4 images on screens >= 1024px
          spaceBetween: 20,
        },
      }}
    >
      {caraImg.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item}
            className="program-item"
            alt={`carousel-image-${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Next button */}
    <div className="swiper-button-next custom-next">
      <i className="bi bi-arrow-right"></i>
    </div>
  </section>
</section>


      <OurAssociate />
    </>
  );
};

export default Home;
