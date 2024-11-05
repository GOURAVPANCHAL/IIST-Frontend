import React, { useEffect } from "react";
import "./examination.css";
const Examination = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <div className="container py-5">
        <div className="documentShadow">
          <h2>Examination</h2>
        </div>
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
                <a className="text-white fs-5" href="">Exam Procedure</a>
              </p>
              <p>
                <a className="text-white fs-5" href="">Exam Schedule</a>
              </p>
              <p>
                <a className="text-white fs-5" href="">Rules and Regulations</a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="documentShadow">
            <h2>Exam Procedure</h2>
          </div>
          <p>
            <b>Choose Exam Type:</b>Candidates can opt for either an on-demand
            exam or a scheduled (calendar-based) exam.
          </p>
          <p>
            <b>Application Submission:</b>Download and fill out the "On-Demand
            Application & Examination Form." Submit the form along with relevant
            documents like a self-declaration of experience, experience letters,
            and educational certificates (if applicable).
          </p>
          <p>
            <b>Document Upload:</b>Upload the filled application form and
            supporting documents to the system for verification.
          </p>
          <p>
            <b>Fee Payment:</b>Make the required payment to confirm your exam
            registration.
          </p>
          <p>
            <b>On-Demand Exam:</b>After successful registration, choose an
            available exam date that suits your schedule.
          </p>
          <p>
            <b>Scheduled Exam:</b>Follow the published exam calendar for fixed
            exam dates and prepare accordingly.
          </p>
        </div>
        <div className="mb-5 mt-5">
          <div className="documentShadow">
            <h2>Exam Schedule</h2>
          </div>
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
          <div className="documentShadow">
            <h2>Rules and Regulations</h2>
          </div>
          <div className="rulesAndRegulations">
            <p>
              <b>Eligibility:</b>Candidates must have relevant skills or
              experience in their industry to apply. They should provide
              accurate information and supporting documents.
            </p>
          </div>
          <div className="rulesAndRegulations">
            <p>
              <b>Adherence to Guidelines:</b> All candidates are expected to
              follow the examination guidelines and rules provided by the Indian
              Institute of Skill Training (IIST).
            </p>
          </div>
          <div className="rulesAndRegulations">
            <p>
              <b>Conduct During Exams:</b> Misconduct or dishonest practices
              during the exam may result in disqualification and forfeiture of
              fees. Candidates are advised to adhere strictly to the exam rules.
            </p>
          </div>
          <div className="rulesAndRegulations">
            <p>
              <b>Rescheduling:</b> If a candidate is unable to attend the
              scheduled exam, they must inform the institution in advance to
              reschedule the exam.
            </p>
          </div>
          <div className="rulesAndRegulations">
            <p>
              <b>Cancellation Policy:</b> No refunds will be provided for
              canceled exams unless exceptional circumstances apply. However,
              candidates may be allowed to reschedule under certain conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
