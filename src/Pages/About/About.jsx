import React, { useEffect } from "react";
import logo from "../../Assets/logo.jpg";
import "./about.css";
import modi from "../../Assets/gallery/modi.png";
import abdul from "../../Assets/gallery/abdul.png";
import nsdc from "../../Assets/gallery/nsdc.png";
import ncvet from "../../Assets/gallery/ncvet.png";
import iisd from "../../Assets/gallery/IISD.png";
import SI from "../../Assets/gallery/skill-india.png";
import OurAssociate from "../../Components/OurAssociate/OurAssociate";
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-8" id="messagefrommanagement">
            <h2>About Us</h2>
            <h5>Message from Management</h5>
            <div className="row mt-3">
              {/* <div className="col-md-2">
                <img className="aboutImage" src={logo} alt="logo" />
              </div> */}
              <div className="col-md-12">
                <p>
                  Welcome to the Indian Institute of Skill Development. We are
                  proud to be at the forefront of skill development in India,
                  empowering individuals with industry-relevant education and
                  training.
                </p>
                <p>
                  At IISD, we believe in the transformative power of skill
                  development. Our vision is to equip every learner with the
                  skills and knowledge required to excel in their chosen fields.
                  Through our programs, we are building a workforce that is not
                  only skilled but also ready to meet the challenges of a
                  rapidly evolving global market.
                </p>
              </div>
              <p>
                As we continue to grow, we remain dedicated to adapting to the
                latest industry trends, ensuring that our programs stay relevant
                and beneficial for our students
              </p>
              <p>
                Thank you for choosing IISD as your partner in education and
                career development. We are honored to guide you on your path to
                success, fostering a lifelong learning experience that empowers
                you to achieve your dreams and contribute to the nation’s
                growth.
              </p>
              <p>
                We look forward to walking this journey with you, as you unlock
                your full potential and become part of India’s skilled
                workforce.
              </p>
              <p className="mb-0">
                <b>Best wishes and regards,</b>
              </p>
              <p>
                <b>IISD Management</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-content text-white">
              <h2 className="mb-3">About Us</h2>
              <p>
                <a href="#messagefrommanagement" className="text-white fs-5">
                  Message from Management
                </a>
              </p>
              <p>
                <a href="#organizationProfile" className="text-white fs-5">
                  Organization Profile
                </a>
              </p>
              <p>
                <a href="#missionVision" className="text-white fs-5">
                  Mission and Vision
                </a>
              </p>
              <p>
                <a href="#ourAssociates" className="text-white fs-5">
                  Our Associates
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h2 id="organizationProfile">Organization Profile</h2>
          </div>
          <div className="row">
            <div className="col-md-10">
              <p>
                The Indian Institute of Skill Development (IISD) was founded
                with a mission to bridge the skill gap in India through quality
                training and online certification programs. Our mission is to
                help students and professionals gain the practical skills they
                need for successful careers. Our programs are industrially based
                and job-oriented, catering to employees working in various
                industries, workshops, factories, organizations, and educational
                institutes.
              </p>
              <p>
                IISD is an autonomous institution focused on providing intensive
                training in job-oriented fields such as Computer & IT, Fashion &
                Interior Designing, Business Management, Hotel Management,
                Teacher Training, and various technical skills.
              </p>
            </div>
            <div className="col-md-2">
              <img className="aboutImage" src={iisd} alt="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="aboutBoxOrange">
                <h5>Constitutional Provisions and Educational Framework</h5>
                <p>
                  IISD operates under the provisions of Articles 29 and 30(1) of
                  the Indian Constitution, focusing on the welfare and
                  educational upliftment of India’s workforce. Our approach is
                  aligned with the recommendations of the Education Commission
                  (1964-66), which emphasized vocational education as a critical
                  aspect of national development.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutBoxOrange">
                <h5>Industry Collaboration and Job Placement</h5>
                <p>
                  Our collaborations with various companies and industries
                  ensure that our students have access to job opportunities with
                  competitive packages upon graduation. IISD focuses on
                  preparing students for immediate employment in their
                  respective fields, with special attention to hands-on,
                  practical training.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutBoxOrange">
                <h5>Franchise Opportunities</h5>
                <p>
                  We provide individuals and organizations the chance to open
                  new centers under the IISD brand. Our franchisees receive
                  comprehensive support, including access to our proven
                  curriculum, training resources, and operational guidance. This
                  enables them to offer certified courses and become part of our
                  expanding network of educational centers across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vision">
          <h2 id="missionVision">Mission and Vision</h2>
          <p>
            <b>Vision:</b>
          </p>
          <p>
            To be a leading institution in skill development, empowering
            individuals and educational centers across India through
            industry-relevant training programs, and contributing to national
            growth by building a capable and skilled workforce.
          </p>
          <p>
            At IISD, we believe in the transformative power of vocational
            education and strive to provide opportunities for all individuals to
            develop valuable, marketable skills. Through our programs,
            partnerships, and franchise model, we wish to continue to lead the
            charge in creating a skilled workforce that can contribute to the
            nation's economic progress and personal growth for every individual
            involved.
          </p>
        </div>
        <div className="mission mt-3">
          <p>
            <b>Mission:</b>
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="orange_col">
                <p>
                  To provide high-quality, industry-specific training programs
                  that equip students with practical skills.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="orange_col">
                <p>
                  To partner with educational centers, offering franchise
                  opportunities to expand skill development across the country.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="orange_col">
                <p>
                  To foster continuous learning and innovation, ensuring
                  educators and professionals are prepared to meet evolving
                  industry demands.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="orange_col">
                <p>
                  To contribute to India’s economic growth by bridging the skill
                  gap and creating more employment opportunities for the youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ourAssociates">
      <OurAssociate  />

      </div>
    </>
  );
};

export default About;
