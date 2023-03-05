import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoginApi from "../Services/LoginApi.js";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("Invalid user Id or password");
  const navigate = useNavigate();

  const passwordVr=useRef();
  const passwordVr2=useRef();
  const confirmPasswordVr=useRef();
  const confirmPasswordVr2=useRef();

  const  validatePassword=()=> {
    const password = passwordVr.current.value;
    const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;

    if (regexPassword.test(password) === true) {
      passwordVr2.current.innerHTML = "";
      return true;
    } else {
      passwordVr2.current.innerHTML =
        "password must be alphanumeric and should contains at least a special character with length 5";
    }
  }

  const  validateConfirmPassword=()=> {
    const confirmPassword = confirmPasswordVr.current.value;
    const regexConfirmPassword = password;

    if (regexConfirmPassword.test(confirmPassword) === true) {
      confirmPasswordVr2.current.innerHTML = "";
      return true;
    } else {
      confirmPasswordVr2.current.innerHTML =
        "password must be same";
    }
  }

  const  removeWarnings=()=> { 
    passwordVr2.current.innerHTML = "";
    confirmPasswordVr2.current.innerHTML = "";
  }

  const  changepassword = (p) => {
      
    if (  
      password === "" ||
      confirmPassword === ""      
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;
        if (regexPassword.test(password) === false) {
          Swal.fire({
            title: "Enter valid password",
            icon: "warning",
            confirmButtonText: "Ok",
          });
          return false;
        }
        const regexConfirmPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;
        if (regexConfirmPassword.test(confirmPassword) === false) {
          Swal.fire({
            title: "Password not match",
            icon: "warning",
            confirmButtonText: "Ok",
          });
          return false;
        }
    p.preventDefault();
        p.currentTarget.disabled = true;
        const user = {        
          password,
          confirmPassword,
        };
        
        LoginApi.changepassword(user)
        .then((res) => {
          console.log(res.data);
          setMessage("Password changed successfully.");
          console.log(message);
          Swal.fire({
            title:"Password changed successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/login");
         
        })
        .catch((error) => {
          console.error("in err ", error.response.data);
          Swal.fire({
            title: "Error",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
      };
    return (
          <>
          <div>
             <div className="container-fluid login p-0 m-0 row">
                <div className="pt-5">
                  <form
                    className="container pt-2 border border-primary shadow-lg p-3 mb-5 bg-white rounded col-lg-4 col-sm-8"
                    // style={{ width: "30vw" }} 
                  >
                    <h2 className="text-muted text-center mb-4">Change Password</h2>
                   
                    <div className="form-group my-3">
              <input
                type="password"
                className="form-control text-center"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                onBlur={validatePassword}
                placeholder="Password"
                onFocus={removeWarnings}
                ref={passwordVr}
                required
              />
            </div>
            <div className="form-group my-3">
              <input
                type="password"
                className="form-control text-center"
                name="ConfirmPassword"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                onBlur={validateConfirmPassword}
                placeholder="Confirm Password"
                onFocus={removeWarnings}
                ref={confirmPasswordVr}
                required
              />
            </div>
                    
                    <div className="row my-3">
                      <div className="col-sm d-flex justify-content-center">
                         <button 
                          className="btn btn-primary  btn-lg text-light mb-3 "
                        onClick={changepassword}>
                          Change Password
                        </button>
                      </div>
                    </div>
                  </form>         
                  <span id="span"></span>
                </div>
              </div>
          </div>
        </>
      )
}


export default ChangePassword;
