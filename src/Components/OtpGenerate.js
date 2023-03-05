import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoginApi from "../Services/LoginApi.js";

const OtpGenerate = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Email not Found");

  const emailVR = useRef();

  const validateEmail = () => {
    const emailId = email;
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(emailId) === true || email === "") {
      return true;
    } else {
      emailVR.current.innerHTML = "Email format should be abc@xyz.com";
      return false;
    }
  };
  const removeAlert = () => {
    emailVR.current.innerHTML = "";
  };
  console.log(email);
  /////////////////////////////////////////////////////////////////////////////
  const OtpGenerate = (e) => {
    if (email === "") {
      Swal.fire({
        title: "Please fill the Credentials",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    const user = {
      email,
    };
    console.log(user.email);
    LoginApi.generateotp(email)
      .then((response) => {
        console.log(response.data.email);
        console.log(response.data);
        setMessage("Login successful.");
        console.log(message);
        
        if (response.data.email === "email") {
          localStorage.setItem("email", JSON.stringify(response.data.email));
          console.log(response.data);        
          navigate("/otpverify");
        } else{
          navigate("/otpverify");
        }
          
        //   navigate("/userdashboard");
        // }
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        setMessage("Invalid Email ID");
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
            <h2 className="text-muted text-center mb-4">Verify Email</h2>
           
            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-control text-center mt-3"
                placeholder="Please enter your email id"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                onBlur={validateEmail}
                onFocus={removeAlert}
                name="email"
                required
              />
              <span style={{ color: "red" }} id="emailVR" ref={emailVR}></span>
            </div>
            
            <div className="row my-3">
              <div className="col-sm d-flex justify-content-center">
                 <button 
                  className="btn btn-primary  btn-lg text-light mb-3 "
                onClick={OtpGenerate}>
                  Send OTP
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
export default OtpGenerate;
