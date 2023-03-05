import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoginApi from "../Services/LoginApi.js";

const OtpVerify = (props) => {
  const navigate = useNavigate();
  const [uotp, setOtp] = useState("");
  const [message, setMessage] = useState("Invalid OTP");

  const otpVr = useRef();
  const otpVr2 = useRef();

  const validateOtp = () => {
    const otpId = uotp;
    const otpRegex = /^\d{6}$/;
    if (otpRegex.test(otpId)) {
        otpVr2.current.innerHTML = "";
    } else {
      otpVr2.current.innerHTML = "OTP must be six digits.";
      return false;
    }
  };
  
  const removeAlert = () => {
    otpVr2.current.innerHTML = "";
  };
  console.log(uotp);
  /////////////////////////////////////////////////////////////////////////////
  const OtpVerify = (e) => {
    if (uotp === "") {
      Swal.fire({
        title: "Please fill the Credentials",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    const user = {
      uotp,
    };
    console.log(user.uotp);
    LoginApi.verifyotp(uotp)
      .then((response) => {
        console.log(response.data.role);
        console.log(response.data);
        setMessage("Login successful.");
        console.log(message);
        console.log(uotp);
        navigate("/changepassword");
        // if (response.data.role === "admin") {
        //   localStorage.setItem("admin", JSON.stringify(response.data));
        //   console.log(response.data);        
        //   navigate("/admindashboard");
        // } else if (response.data.role === "hospital") {
        //   localStorage.setItem("hospital", JSON.stringify(response.data));
        //   console.log(response.data);      
        //   navigate("/hospitaldashboard");
        // } else {
        //   localStorage.setItem("user", JSON.stringify(response.data));
          
        //   navigate("/userdashboard");
        // }
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        setMessage("Invalid OTP");
        Swal.fire({
          title: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  ///////////////////////////////////////////////////

  //
  return (
  
  <div>
     <div className="container-fluid login p-0 m-0 row">
        <div className="pt-5">
          <form
            className="container pt-2 border border-primary shadow-lg p-3 mb-5 bg-white rounded col-lg-4 col-sm-8"
            // style={{ width: "30vw" }} 
          >
            <h2 className="text-muted text-center mb-4">Verify OTP</h2>
            <div className="form-group">
              <input
                id="uotp"
                type="text"
                className="form-control text-center mt-3"
                placeholder="OTP"
                value={uotp}
                onChange={(e)=>setOtp(e.target.value)}
                onBlur={validateOtp}
                onFocus={removeAlert}
                name="otp"
                required
              />
              <span style={{ color: "red" }} id="otpVr" ref={otpVr}></span>
            </div>
            
            <div className="row my-3">
              <div className="col-sm d-flex justify-content-center">
                 <button 
                  className="btn btn-primary  btn-lg text-light mb-3 "
                onClick={OtpVerify}>
                  Verify OTP
                </button>
              </div>
            </div>
          </form>         
          <span id="span"></span>
        </div>
      </div>
  </div>
  );
};
export default OtpVerify;
