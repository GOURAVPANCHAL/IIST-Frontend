import React, { useEffect } from "react";
import "./contact.css";
const Contact = () => {
  useEffect(()=>{
    window.scrollBy({
      top:0,
      behavior:'smooth'
    })
  })
  return (
    <>
      <div>
        <div className="container">
          <div className="py-3">
            <h2>Get in Touch</h2>
            <p>
              We value your feedback and are here to assist you with any queries
              or concerns you may have. Whether you're interested in
              accreditation, courses, or any other inquiries related to the
              Indian Institute of Skill Training (IIST), our dedicated team is
              ready to help you.
            </p>
          </div>
          <div className="row pb-5">
            <div className="col-md-6">
              <div>
                <p className="mb-3">
                  <b>Address:</b> Indian Institute of Skill Development (IISD)
                </p>
                <b>Phone:</b>
                <p>
                  <b>For general inquiries:</b>
                  <a className="achor" href="tel:+918882408906">
                    +91 8882408906
                  </a>
                </p>
                <p>
                  <b>For admissions and accreditation:</b>
                  <a className="achor" href="tel:+91-XXXX-XXXXXX">
                    +91-XXXX-XXXXXX
                  </a>
                </p>
                <p className="mb-3">
                  <b>Address:</b>
                  <a className="achor" href="mailto:testing@gmail.com">
                    testing@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>

            <div className="col-md-12 mt-3">
              <h2>Contact Form</h2>
              <p>
                To streamline your inquiries, you can fill out the contact form
                below, and we will respond to you as soon as possible.
              </p>
            </div>
            <div className="col-md-12">
              <div className="contact_form">
                <form action="">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label htmlFor="">Name</label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          name="name"
                          id=""
                          fullwidth
                          className="form-control"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="">Email</label>
                        <input
                          type="email"
                          name="email"
                          id=""
                          fullwidth
                          placeholder="Enter Your Email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div>
                        <label htmlFor="">Phone Number</label>
                        <input
                          type="number"
                          name="phoneNumber"
                          fullwidth
                          className="form-control"
                          id=""
                          placeholder="Enter Your Contact Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <label htmlFor="">Enter Your Message</label>
                        <textarea
                          name="message"
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="text-center">
                        <button className="loginBtn">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
