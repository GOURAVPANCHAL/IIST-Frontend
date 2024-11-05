import React from "react";
import "../../Components/centerLogin/login.css";
const VerifyCenterCode = () => {
  return (
    <>
      <div className="loginForm">
        <div className="form-logo">
          <h2 className="m-4">Verify Your Center Code</h2>
        </div>
        <div className="form_main">
          <form action="">
            <div>
              <label htmlFor="">Center ID</label>
              <input
                className="w-100"
                type="text"
                placeholder="Enter Your Center ID"
              />
            </div>
            <div className="text-center">
              <button className="loginBtn">Verify</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyCenterCode;
