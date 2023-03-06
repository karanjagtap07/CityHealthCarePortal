import "./App.css";
import HeaderComponents from "./Components/HeaderComponents";
import FooterComponents from "./Components/FooterComponents";
import ScrollingImage from "./Components/ScrollingImage";
import FeaturesComponents from "./Components/FeaturesComponents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponents from "./Components/LoginComponents";
import ContactUsComponents from "./Components/ContactUsComponents";
import AdminDashboard from "./Components/AdminDashboard";
import AddHospital from "./Components/AddHospital";
import ViewHospitals from "./Components/ViewHospitals";
import ViewUserList from "./Components/ViewUserList";
import HospitalDashboard from "./Components/HospitalDashboard";
import ViewBedComponent from "./Components/ViewBedComponent";
import AddBedComponent from "./Components/AddBedComponent";
import AddBloodComponents from "./Components/AddBloodComponents";
import ViewBloodComponents from "./Components/ViewBloodComponents";
import AddOxygenComponents from "./Components/AddOxygenComponents";
import ViewOxygenComponents from "./Components/ViewOxygenComponents";
import AddDoctorInfoComponents from "./Components/AddDoctorInfoComponents";
import ViewDoctorInfo from "./Components/ViewDoctorInfo";
import ViewRequestComponent from "./Components/ViewRequestComponent";
import ActionOnRequestComponent from "./Components/ActionOnRequestComponent";
import UserSignUpComponents from "./Components/UserSignUpComponents";
import UserDashBoradComponent from "./Components/UserDashBoradComponent";
import UserBedBookComponent from "./Components/UserBedBookComponent";
import UserBedAvblComponent from "./Components/UserBedAvblComponent";
import UserBloodAvblCompo from "./Components/UserBloodAvblCompo";
import BookingStatusComponent from "./Components/BookingStatusComponent";
import OxygenAvailableComponent from "./Components/OxygenAvailableComponent";
import ViewAmbulanceComponent from "./Components/ViewAmbulanceComponent";
import DoctorInfoComponent from "./Components/DoctorInfoComponent";
import About from "./Components/About";
import { Navigate } from "react-router-dom";
import ErrorPageComponent from "./Components/ErrorPageComponent";
import OtpGenerate from "./Components/OtpGenerate";
import OtpVerify from "./Components/OtpVerify";
import ChangePassword from "./Components/ChangePassword";

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <CheckLogin>
                    <HeaderComponents /> <FeaturesComponents /><ScrollingImage /> <FooterComponents />
                  </CheckLogin>
                }
              ></Route>
              <Route
                exact
                path="/login"
                element={
                  <CheckLogin>
                    <HeaderComponents loginStatus={true} /> <LoginComponents /> <FooterComponents />
                    </CheckLogin>
                }
              ></Route>
              <Route
                exact
                path="/admindashboard"
                element={
                  <ProtectedRouteAdmin>
                    <HeaderComponents /> <AdminDashboard /> <FooterComponents />
                  </ProtectedRouteAdmin>
                }
              ></Route>
              <Route
                exact
                path="/addhospital"
                element={
                  <ProtectedRouteAdmin>
                    <HeaderComponents /> <AddHospital /> <FooterComponents />
                  </ProtectedRouteAdmin>
                }
              ></Route>
              <Route
                exact
                path="/viewhospitals"
                element={
                  <ProtectedRouteAdmin>
                    <HeaderComponents /> <ViewHospitals /> <FooterComponents />
                  </ProtectedRouteAdmin>
                }
              ></Route>
              <Route
                exact
                path="/viewuserlist"
                element={
                  <ProtectedRouteAdmin>
                    <HeaderComponents /> <ViewUserList /> <FooterComponents />
                  </ProtectedRouteAdmin>
                }
              ></Route>
              <Route
                exact
                path="/hospitaldashboard"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <HospitalDashboard />{" "} <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/bedlist"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <ViewBedComponent /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/addbed"
                element={
                  <ProtectedRouteHospital>
                    {" "}
                    <HeaderComponents /> <AddBedComponent />{" "} <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/addblood"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <AddBloodComponents /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/bloodlist"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <ViewBloodComponents /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/addoxygen"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <AddOxygenComponents /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/oxygenlist"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <ViewOxygenComponents /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/adddoctorinfo"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <AddDoctorInfoComponents /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/doctorinfolist"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <ViewDoctorInfo /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/viewrequest"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <ViewRequestComponent /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/approverejectrequest"
                element={
                  <ProtectedRouteHospital>
                    <HeaderComponents /> <ActionOnRequestComponent /> <FooterComponents />
                  </ProtectedRouteHospital>
                }
              ></Route>
              <Route
                exact
                path="/usersignup"
                element={
                  <>
                    <HeaderComponents /> <UserSignUpComponents /> <FooterComponents />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/userdashboard"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <UserDashBoradComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/userbedbook"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <UserBedBookComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/bedavailability"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents />  <UserBedAvblComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/bloodavailability"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <UserBloodAvblCompo /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/bookingstatus"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <BookingStatusComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/oxygenavailability"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <OxygenAvailableComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/ambulancecontact"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <ViewAmbulanceComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/doctorinfo"
                element={
                  <ProtectedRouteUser>
                    <HeaderComponents /> <DoctorInfoComponent /> <FooterComponents />
                  </ProtectedRouteUser>
                }
              ></Route>
              <Route
                exact
                path="/contactus"
                element={
                  <>
                    <HeaderComponents /> <ContactUsComponents /> <FooterComponents />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/aboutus"
                element={
                  <>
                    <HeaderComponents /> <About /> <FooterComponents />
                  </>
                }
              ></Route>
               <Route exact path="*" element={<ErrorPageComponent />}></Route>
               <Route
                exact
                path="/otpgenerate"
                element={
                  <>
                    <HeaderComponents /> <OtpGenerate /> <FooterComponents />
                  </>
                }
              ></Route>
              <Route exact path="*" element={<ErrorPageComponent />}></Route>
               <Route
                exact
                path="/otpverify"
                element={
                  <>
                    <HeaderComponents /> <OtpVerify /> <FooterComponents />
                  </>
                }
              ></Route>
              <Route exact path="*" element={<ErrorPageComponent />}></Route>
              <Route
                exact
                path="/changepassword"
                element={
                  <>
                    <HeaderComponents /> <ChangePassword /> <FooterComponents />
                  </>
                }
              ></Route>
            </Routes>
            
          
          </div>
        </Router>
      </div>
     
    </>
  );
}

function CheckLogin({ children }) {
  console.log();
  // IF LOGGED IN :: REDIRECT THE USER TO LOGIN
  if(localStorage.getItem("admin"))
       return <Navigate to="/admindashboard" replace={true} />;
   if(localStorage.getItem("user"))
       return <Navigate to="/userdashboard" replace={true} />;
   if(localStorage.getItem("hospital"))
       return <Navigate to="/hospitaldashboard" replace={true} />;
  

  return children;
}


function ProtectedRouteAdmin({ children }) {
  const adminSession = localStorage.getItem("admin");
  console.log(adminSession);
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (!adminSession) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
function ProtectedRouteUser({ children }) {
  const userSession = localStorage.getItem("user");
  console.log();
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (!userSession) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

function ProtectedRouteHospital({ children }) {
  const hospitalSession = localStorage.getItem("hospital");
  console.log();
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (!hospitalSession) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}


export default App;
