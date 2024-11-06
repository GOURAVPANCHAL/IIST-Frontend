import React from "react";
import modi from "../../Assets/gallery/modi.png";
import abdul from "../../Assets/gallery/abdul.png";
import iisd from "../../Assets/gallery/IISD.png";
import { Link } from "react-router-dom";
const OurInspiration = () => {
  return (
    <div>
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
              <Link to={"/about"} className="exploreBtn">
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
    </div>
  );
};

export default OurInspiration;
