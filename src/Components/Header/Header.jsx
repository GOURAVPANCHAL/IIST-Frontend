import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/gallery/IISD.png";
import g20 from "../../Assets/gallery/g20.png";
import azadi from "../../Assets/gallery/Azadi-Ka-Amrit.png";
import skill from "../../Assets/gallery/skill-india.png";

const Header = () => {
  const menuData = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      link: "/about",
      subMenu: [
        { name: "Our Inspirations", link: "/about/our-inspiration" },
        {
          name: "Skill Development in India",
          link: "/about/skils-development-in-india",
        },
        {
          name: "Affiliations",
          link: "/student-services/verify-center-code",
        },
      ],
    },
    {
      name: "Programs",
      link: "/programs",
    },
    {
      name: "Institute Zone",
      link: "#",
      subMenu: [
        { name: "Center Login", link: "/centre-login" },
        {
          name: "Verify Your Center Code",
          link: "/student-services/verify-center-code",
        },
      ],
    },
    {
      name: "Student Zone",
      link: "#",
      subMenu: [
        { name: "Student Login", link: "/student-login" },
        {
          name: "Admissions  +",
          nestedMenu: [
            {
              name: "On-demand Admission Form",
              link: "/student-zone/registration-form",
            },
            {
              name: "General Admission Form",
              link: "/student-zone/candidate-training-form",
            },
          ],
        },
        {
          name: "Academic Calendar",
          link: "#",
        },
        {
          name: "Examination +",
          link: "#",
          nestedMenu: [
            {
              name: "On-Demand Exam Form",
              link: "/student-zone/registration-form",
            },
            {
              name: "Calendar Exam Form",
              link: "#",
            },
          ],
        },
        {
          name: "Advance Learning Management System",
          link: "/student-services/advance-learning",
        },
      ],
    },
    {
      name: "Franchise",
      link: "/student-services/IISD-franchise",
      subMenu: [
        { name: "Apply for New Franchisee", link: "/application-form-for-establishmen" },
        {
          name: "Center Renewal",
          link: "#",
        },
      ],
    },
    { name: "Internship", link: "/internship" },
    { name: "Training", link: "/training" },
    { name: "Placement", link: "/placement" },
    { name: "Downloads", link: "/gallery" },
    { name: "Notifications", link: "notification" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [menu, setmenu] = useState(false);
  const handleMenuToggle = () => {
    setmenu(!menu);
  };

  const closeMenu = () => {
    setmenu(false); // Ensure the menu closes on click of any link
  };

  return (
    <>
      <header>
        <div className="above-line container-fluid">
          <div className="contact-info">
            <div className="single-info">
              <i className="fa-solid fa-phone-volume"></i>
              <a href="tel:+918130543714">+91-8130543714</a>
            </div>
            <div className="single-info">
              <i className="fa-solid fa-envelope-open-text"></i>
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <div className="login-links">
            <Link to={`/centre-login`}>Centre Login</Link>
            <Link to={`/student-services/online-results`}>Online Results</Link>
            <Link to={`/student-services/centre-invitation`}>
              Centre Invitation
            </Link>
          </div>
        </div>

        <div className="">
          {/* -- Above Head --  */}
          <div className="head">
            <div>
              <div className="logo">
                <Link to={`/`}>
                  <img src={logo} alt="Manovaidya logo" />
                </Link>
                <div className="poster">
                  <h4>INDIAN INSTITUTE OF SKILL DEVELOPMENT</h4>
                  <h5>भारतीय कौशल विकास संस्थान</h5>
                </div>
              </div>

              <div className="side-icons">
                <div className="icon hamburger" onClick={handleMenuToggle}>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
            <div className="headingImageMain">
              <img
                className="headerImage"
                src={azadi}
                alt="Azadi Ka Mohotsav"
              />
              <img className="headerImage" src={g20} alt="G-20" />
              <img
                className="headerImage"
                src={skill}
                alt="Skill Development"
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className={`nav-links ${menu ? "active" : ""}`}>
            <ul>
              {menuData.map((item, index) => (
                <li key={index} className={item.subMenu ? "dropdown" : ""}>
                  <Link
                    to={item.link}
                    onClick={!item.subMenu ? closeMenu : undefined}
                  >
                    {item.name}
                  </Link>

                  {/* Render first level dropdown */}
                  {item.subMenu && (
                    <ul className="dropdown-menu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={subItem.nestedMenu ? "dropdown" : ""}
                        >
                          <Link to={subItem.link} onClick={closeMenu}>
                            {subItem.name}
                          </Link>

                          {/* Render sub-dropdown if it exists */}
                          {subItem.nestedMenu && (
                            <ul className="dropdown-nested">
                              {subItem.nestedMenu.map(
                                (nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <Link
                                      to={nestedItem.link}
                                      onClick={closeMenu}
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
