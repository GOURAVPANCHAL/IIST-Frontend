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
          <div className="col-md-8">
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
              <h2 className="mb-3">Abour Us</h2>
              <p>
                <a href="" className="text-white fs-5">
                  Message from Management
                </a>
              </p>
              <p>
                <a href="" className="text-white fs-5">
                  Organization Profile
                </a>
              </p>
              <p>
                <a href="" className="text-white fs-5">
                  Our Inspirations
                </a>
              </p>
              <p>
                <a href="" className="text-white fs-5">
                  Skill Development in India
                </a>
              </p>
              <p>
                <a href="" className="text-white fs-5">
                  Affiliation
                </a>
              </p>
              <p>
                <a href="" className="text-white fs-5">
                  Mission and Vision
                </a>
              </p>
              <p>
                <a href="" className="text-white fs-5">
                  Our Associates
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h2>Organization Profile</h2>
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
          {/* <h3>Constitutional Provisions and Educational Framework</h3>
          <p>
            IISD operates under the provisions of Articles 29 and 30(1) of the
            Indian Constitution, focusing on the welfare and educational
            upliftment of India’s workforce. Our approach is aligned with the
            recommendations of the Education Commission (1964-66), which
            emphasized vocational education as a critical aspect of national
            development.
          </p>
          <h3>Industry Collaboration and Job Placement</h3>
          <p>
            Our collaborations with various companies and industries ensure that
            our students have access to job opportunities with competitive
            packages upon graduation. IISD focuses on preparing students for
            immediate employment in their respective fields, with special
            attention to hands-on, practical training.
          </p>
          <h3>Franchise Opportunities</h3>
          <p>
            We provide individuals and organizations the chance to open new
            centers under the IISD brand. Our franchisees receive comprehensive
            support, including access to our proven curriculum, training
            resources, and operational guidance. This enables them to offer
            certified courses and become part of our expanding network of
            educational centers across the country.
          </p>
          <h3>Future Plans</h3>
          <p>
            We are focused on expanding our network of franchise centers across
            India. Our goal is to provide even more opportunities for skill
            development and professional growth, reaching more students in
            different regions.
          </p> */}
        </div>
        {/* <div className="row mt-3">
          <h3>OUR INSPIRATIONS</h3>
          <div className="row mt-3" style={{ alignItems: "center" }}>
            <div className="col-md-2 mb-3">
              <img className="aboutImage" src={modi} alt="modi image" />
            </div>
            <div className="col-md-10 mb-3">
              <p>
                Prime Minister Modi's launch of the Skill India campaign
                inspired IISD to focus on building a skilled workforce. His
                emphasis on quality education motivated IISD to create
                industry-relevant programs for students and educators.
              </p>
            </div>
            <div className="col-md-2">
              <img className="aboutImage" src={abdul} alt="abdul image" />
            </div>
            <div className="col-md-10">
              <p>
                Dr. Kalam’s vision of empowering India through skill development
                inspires IISD to expand the nation's skill ecosystem. We
                emphasize continuous learning and applying the right skills,
                following Dr. Kalam’s guiding principles.
              </p>
            </div>
          </div>
          <h3 className="mt-3">Skill Development in India</h3>
          <p>
            Skill development is a critical component in India’s drive to become
            a global economic powerhouse. In a country where the youth
            population forms a significant part of the demographic dividend,
            ensuring employability through proper training and skill enhancement
            has never been more important. However, India’s vocational training
            landscape, as revealed by the National Sample Survey Office (NSSO)
            2011-12 (68th round), indicates a significant gap in formal skill
            development. Among individuals aged between 15 and 59 years, only
            2.2% reported having received formal vocational training, while 8.6%
            had undergone nonformal vocational training.
          </p>
          <p>
            This substantial gap underscores the importance of implementing an
            inclusive vocational education framework that can reach every corner
            of the country and provide quality training that aligns with market
            needs .
          </p>
        </div>
        <div className="row">
          <div className="col-md-10">
            <h3>
              National Council for Vocational Education and Training (NCVET)
            </h3>
            <p>
              To address these challenges, the National Council for Vocational
              Education and Training (NCVET) was established on 5th December
              2018 by the Government of India. As an overarching regulatory
              body, NCVET regulates entities engaged in vocational education and
              training, ensuring that they meet minimum standards for quality
              and delivery.
            </p>
          </div>
          <div className="col-md-2">
            <img className="aboutImage" src={ncvet} alt="nsdc" />
          </div>
          <div>
            <p>
              <b>Key Functions of NCVET:</b>
            </p>
            <ul>
              <li>
                Standardization of Vocational Training: NCVET creates and
                enforces guidelines to ensure that vocational education
                providers meet national and international standards.
              </li>
              <li>
                Quality Assurance: It monitors and evaluates the performance of
                training institutes, ensuring that skill development programs
                provide industry-relevant and practical training.
              </li>
              <li>
                Accreditation and Certification: The body accredits vocational
                training centers and certifies students based on their skills,
                ensuring that their qualifications are recognized across
                industries.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <h3>National Skill Development Corporation (NSDC)</h3>
            <p>
              The National Skill Development Corporation (NSDC) plays a pivotal
              role in India’s skill development ecosystem. Established as a
              public-private partnership (PPP) model, the NSDC’s mandate is to
              promote skill development education in India by catalyzing the
              creation of large, quality training institutions. It aims to
              transform India into the skill capital of the world by ensuring
              that training is accessible, affordable, and aligned with industry
              requirements.
            </p>
          </div>
          <div className="col-md-2">
            <img className="aboutImage" src={nsdc} alt="nsdc" />
          </div>
          <div>
            <p>
              <b>Objectives of NSDC:</b>
            </p>
            <ul>
              <li>
                Mobilizing and Managing Funds: NSDC mobilizes resources for
                various skill development initiatives, ensuring that adequate
                funding is available for expanding the vocational education
                infrastructure.
              </li>
              <li>
                Establishment of Skill Development Institutes: It establishes
                and promotes skill development institutes across India,
                targeting underserved regions and sectors.
              </li>
              <li>
                Acting as a Market Maker: NSDC acts as a bridge to reduce
                demand-supply asymmetries in the job market, providing trained
                professionals where industries need them most.
              </li>
              <li>
                Stakeholder Engagement: NSDC builds partnerships with private
                sector companies, educational institutions, and government
                bodies to create a network that supports skill development.
              </li>
              <li>
                Defining Employability Skills: It works to establish standards
                for employability skills that industries demand, ensuring that
                students are job-ready upon graduation.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <h3>Skill India Mission: A National Movement</h3>
            <p>
              Launched by the Government of India, the Skill India Mission is an
              ambitious effort to skill and upskill millions of Indian youth,
              making them employable and globally competitive. Through various
              programs under this mission, the government aims to equip the
              workforce with technical and soft skills that match the dynamic
              needs of industries. This initiative recognizes the need to bridge
              the skills gap that exists in India’s vast and diverse population.
            </p>
          </div>
          <div className="col-md-2">
            <img className="aboutImage" src={SI} alt="si" />
          </div>
          <div>
            <p>
              <b>Pradhan Mantri Kaushal Kendras (PMKK)</b>
            </p>
            <p>
              As part of the Skill India Mission, the Ministry of Skill
              Development and Entrepreneurship (MSDE) has launched Pradhan
              Mantri Kaushal Kendras (PMKK) — a network of model skill
              development centers aimed at providing high-quality vocational
              training across the country. These centers, established in every
              district, are intended to create aspirational and visible hubs of
              skill development and foster local employability.
            </p>
            <p>
              <b>Key Features of PMKK:</b>
            </p>
            <ul>
              <li>
                Infrastructure and Facilities: PMKK centers are equipped with
                state-of-the-art infrastructure, including labs, training
                machinery, and tools that simulate realworld job environments.
              </li>
              <li>
                Training for In-Demand Skills: These centers offer training
                programs in sectors that have a high demand for skilled labor,
                such as manufacturing, IT, healthcare, construction, and
                hospitality.
              </li>
              <li>
                Subsidized Loans for Training Partners: Private training
                partners selected through a Request for Proposal (RFP) process
                are eligible for a secured loan of up to Rs. 70 lakhs per PMKK,
                available at a subsidized interest rate. This loan helps set up
                training labs and procure the necessary machinery and aids.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <b>NSDC’s Collaboration with Industry</b>
            </p>
            <p>
              One of the key strategies of the NSDC is fostering collaborations
              between industries and training institutes. By engaging with
              industry leaders, NSDC ensures that the training curriculum
              remains updated with the latest advancements in technology and
              business practices. This makes vocational training more relevant
              to market needs, increasing employability for students and
              creating a win-win for both industries and workers.
            </p>
            <p>
              <b>Employment Opportunities through Skill India Initiatives:</b>
            </p>
            <ul>
              <li>
                Increased Employability: Vocational training centers offer
                courses tailored to specific job roles, which enhances
                employability and reduces the skill gap in industries.
              </li>
              <li>
                Self-Employment and Entrepreneurship: The programs also foster
                entrepreneurship by equipping trainees with skills that enable
                them to start their own ventures.
              </li>
              <li>
                Linking Training to Jobs: Skill India initiatives also focus on
                linking training with employment opportunities. By partnering
                with industries, they facilitate job placements for trained
                candidates.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <b>Impact of Skill Development on India’s Economy</b>
            </p>
            <p>
              The Skill India Mission and the initiatives by NCVET and NSDC are
              playing a crucial role in driving India’s economic growth. By
              addressing the skill gap in various sectors, these initiatives
              help industries function efficiently while providing employment to
              a large number of people. A skilled workforce is a key driver of
              productivity and innovation, contributing to the country’s
              competitiveness in the global market.
            </p>
            <ul>
              <li>
                Reduction of Unemployment: A more skilled workforce helps reduce
                unemployment by making workers job-ready for industries such as
                manufacturing, IT, services, and retail.
              </li>
              <li>
                Boost to Entrepreneurial Ecosystem: Skill development fosters
                entrepreneurship, allowing individuals to create jobs and drive
                economic development in local communities.
              </li>
              <li>
                Economic Growth through Industrial Development: With a more
                skilled labor force, India is better positioned to attract
                foreign investment and promote industrial growth.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <b>Future Roadmap for Skill Development in India</b>
            </p>
            <p>
              The Government of India, through initiatives like Skill India,
              PMKK, NSDC, and NCVET, is creating a future-ready workforce
              equipped with the skills needed to drive the country’s economic
              growth. By continuously expanding the network of vocational
              training centers and establishing international linkages, India
              aims to emerge as a global leader in skill development.
            </p>
            <p>
              <b>
                As skill development continues to take center stage in India’s
                growth narrative, there is a strong focus on:
              </b>
            </p>
            <ul>
              <li>
                Upskilling the existing workforce to meet the demands of rapidly
                evolving industries.
              </li>
              <li>
                Broadening access to skill development opportunities for
                underrepresented groups, including women, rural populations, and
                economically weaker sections.
              </li>
              <li>
                Creating lifelong learning pathways that allow individuals to
                continuously upgrade their skills and adapt to the changing job
                market.
              </li>
            </ul>
            <p>
              These comprehensive efforts will ensure that India’s demographic
              dividend translates into economic prosperity and global
              competitiveness. Through the collective efforts of the government,
              industry, educational institutions, and training bodies, India is
              steadily advancing toward becoming the skill capital of the world.
              for regulating the functioning of entities engaged in vocational
              education and training, both long & short-term, and establish
              minimum standards for the functioning of such entities.
            </p>
          </div>
        </div> */}
        <div className="vision">
          <h2>Mission and Vision</h2>
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
          {/* <p>
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
          </p> */}
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
      <OurAssociate />
    </>
  );
};

export default About;
