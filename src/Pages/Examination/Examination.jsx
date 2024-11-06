import React, { useEffect } from "react";
import "./examination.css";
import image1 from "../../Assets/ExaminationIcons/examProcedure1.png";
import image2 from "../../Assets/ExaminationIcons/examProcedure2.png";
import image3 from "../../Assets/ExaminationIcons/examProcedure3.png";
import image4 from "../../Assets/ExaminationIcons/examProcedure4.png";
import image5 from "../../Assets/ExaminationIcons/examProcedure5.png";
import image6 from "../../Assets/ExaminationIcons/examProcedure6.png";
const Examination = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <div className="container">
        <h2 className="documentShadow" id="examination">
          Examination
        </h2>

        <div className="row">
          <div className="col-md-8">
            <p>
              Indian Institute of Skill Training provides two distinct methods
              for candidates to undergo evaluation: on-demand exams and
              scheduled (calendar-based) exams. These options cater to both
              working professionals seeking flexibility and those who prefer
              structured timelines. The institute s exams focus on
              performance-based evaluation, ensuring that practical skills and
              industry experience are recognized and certified.
            </p>
            <p>
              Whether you are employed in a factory, workshop, educational
              institute, or are self-employed, this system allows you to pursue
              certification alongside your professional commitments.
            </p>
          </div>
          <div className="col-md-4">
            <div className="about-content text-white">
              <h2>Examination</h2>
              <p>
                <a className="text-white fs-5" href="#examination">
                  Examination
                </a>
              </p>
              <p>
                <a className="text-white fs-5" href="#examProcedure">
                  Exam Procedure
                </a>
              </p>
              <p>
                <a className="text-white fs-5" href="#examSchedule">
                  Exam Schedule
                </a>
              </p>
              <p>
                <a className="text-white fs-5" href="#ruleandRegulation">
                  Rules and Regulations
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2 className="documentShadow" id="examProcedure">
            Exam Procedure
          </h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="examination_procedure">
                <div className="text-center">
                  <img src={image1} alt="examinationIcons" />
                  <h4>Choose Exam Type</h4>
                </div>
                <p>
                  Candidates can opt for either an on-demand exam or a scheduled
                  (calendar-based) exam.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="examination_procedure">
                <div className="text-center">
                  <img src={image2} alt="examinationIcons" />
                  <h4>Application Submission</h4>
                </div>
                <p>
                  Download and fill out the "On-Demand Application & Examination
                  Form." Submit the form along with relevant documents like a
                  self-declaration of experience, experience letters, and
                  educational certificates (if applicable).
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="examination_procedure">
                <div className="text-center">
                  <img src={image3} alt="examinationIcons" />
                  <h4>Document Upload</h4>
                </div>
                <p>
                  Upload the filled application form and supporting documents to
                  the system for verification.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="examination_procedure">
                <div className="text-center">
                  <img src={image4} alt="examinationIcons" />
                  <h4>Fee Payment</h4>
                </div>
                <p>
                  Make the required payment to confirm your exam registration.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="examination_procedure">
                <div className="text-center">
                  <img src={image5} alt="examinationIcons" />
                  <h4>On-Demand Exam</h4>
                </div>
                <p>
                  After successful registration, choose an available exam date
                  that suits your schedule.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="examination_procedure">
                <div className="text-center">
                  <img src={image6} alt="examinationIcons" />
                  <h4>Scheduled Exam</h4>
                </div>
                <p>
                  Follow the published exam calendar for fixed exam dates and
                  prepare accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 mt-5">
          <h2 id="examSchedule" className="documentShadow">
            Exam Schedule
          </h2>

          <p>
            Exams can either be scheduled in advance or taken on-demand. In the
            scheduled format, exams are conducted as per the annual exam
            calendar, which is shared with all registered candidates and
            centers. These dates are fixed and provide structured timelines for
            preparation and participation.
          </p>
          <p>
            For on-demand exams, candidates are allowed to select their exam
            dates based on availability. Once their application and fee
            submission are processed, they can choose a date convenient for
            them, allowing more flexibility to accommodate their work schedules.
            The system sends reminders and updates regarding exam schedules via
            email and SMS, ensuring candidates are well-informed in advance.
          </p>
        </div>
        <div>
          <h2 className="documentShadow" id="ruleandRegulation">
            Rules and Regulations
          </h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="rulesAndRegulations">
                <p>
                  <b>Eligibility:</b>Candidates must have relevant skills or
                  experience in their industry to apply. They should provide
                  accurate information and supporting documents.
                </p>
                <p>
                  <b>Adherence to Guidelines:</b> All candidates are expected to
                  follow the examination guidelines and rules provided by the
                  Indian Institute of Skill Training (IIST).
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="rulesAndRegulations">
                <p>
                  <b>Conduct During Exams:</b> Misconduct or dishonest practices
                  during the exam may result in disqualification and forfeiture
                  of fees. Candidates are advised to adhere strictly to the exam
                  rules.
                </p>
                <p>
                  <b>Rescheduling:</b> If a candidate is unable to attend the
                  scheduled exam, they must inform the institution in advance to
                  reschedule the exam.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="rulesAndRegulations">
                <p>
                  <b>Cancellation Policy:</b> No refunds will be provided for
                  canceled exams unless exceptional circumstances apply.
                  However, candidates may be allowed to reschedule under certain
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
