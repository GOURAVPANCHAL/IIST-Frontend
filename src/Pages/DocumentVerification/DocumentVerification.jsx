import React, { useEffect } from "react";
import "./document.css";
const DocumentVerification = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <div className="container">
          <h2 className="documentShadow">Document Verification</h2>
        <p>
          The document verification process ensures that all candidates'
          credentials and experience meet the required standards for
          participation in the programs offered by the Indian Institute of Skill
          Training (IIST). This process is crucial for maintaining the integrity
          and credibility of certifications awarded by the institution.
          Verification Procedure
        </p>

        <div>
          <p>
            <b>Upload Documents:</b> Candidates are required to upload all
            necessary documents such as self-declaration of experience,
            experience letters, educational certificates (if applicable), and ID
            proofs through the online platform.
          </p>
          <p>
            <b>Document Review:</b> The verification team reviews each document
            to ensure its authenticity and compliance with the program
            requirements. This may include validating work experience, checking
            qualifications, and cross-referencing with provided references.
          </p>
          <p>
            <b>Status Updates:</b> Once the documents are submitted, candidates
            will receive notifications regarding the status of their
            verification (Approved, Pending, or Rejected). Updates are sent via
            email or through the platform's dashboard.
          </p>
          <p>
            <b>Clarifications & Resubmissions:</b> If any document is unclear or
            additional information is required, the candidate will be prompted
            to resubmit or provide further clarification.
          </p>
          <p>
            <b>Final Approval:</b> Upon successful verification, candidates
            receive confirmation that they are eligible to proceed with the exam
            or course registration.
          </p>
          <p>
            <b>Retention of Records:</b> Verified documents are securely stored
            in the system, and candidates can access their verification status
            through their accounts.
          </p>
          <p>
            This verification ensures that only qualified candidates are
            permitted to enroll in the skill- based performance evaluation
            programs, maintaining the quality and trust of IIST certifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default DocumentVerification;
