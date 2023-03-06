import axios from "axios";

const USER_LOGIN_BASE_URL = "http://localhost:9090/login";
//const USER_LOGIN_BASE_URL = "/login";

class LoginApi {
  loginUser(user) {
    return axios.post(USER_LOGIN_BASE_URL + "/userlogin", user);
  }

  generateotp(email) {
    console.log(email);
    return axios.post(USER_LOGIN_BASE_URL + "/generateotp/" + email);
  }

  verifyotp(uotp){
    console.log(uotp);
    return axios.post(USER_LOGIN_BASE_URL + "/verifyotp/" + uotp);
  }

  changepassword(password,e){
    console.log(password);
    return axios.put(USER_LOGIN_BASE_URL + "/changepassword/" + password +"/"+ e);
  }


}



export default new LoginApi();