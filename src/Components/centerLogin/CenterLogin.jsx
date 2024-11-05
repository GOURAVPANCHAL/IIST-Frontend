import React, { useEffect } from "react";
import logo from "../../Assets/gallery/IISD.png";
import "./login.css";
const CenterLogin = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <div className="loginForm">
        <div className="form-logo">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h4>INDIAN INSTITUTE OF SKILL DEVELOPMENT</h4>
            <h4>भारतीय कौशल विकास संस्थान</h4>
            <h2>CENTER LOGIN</h2>
          </div>
        </div>
        <div className="form_main">
          <form action="">
            <div>
              <label htmlFor="">Center Code</label>
              <input
                className="w-100"
                type="text"
                placeholder="Enter Your Center Code"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                className="w-100"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="text-center">
              <button className="loginBtn">Login</button>
            </div>
          </form>
        </div>
        <div className="form-forgot">
          <a href="#">Forgot Your Password ?</a>
          <a href="#">Apply For Franchise</a>
        </div>
      </div>
    </>
  );
};

export default CenterLogin;
