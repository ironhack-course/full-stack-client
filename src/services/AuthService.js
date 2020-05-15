import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const AUTH_SERVICE = {
  // userData is a placeholder (represents the user's inputs in the signup and login form)
  signup(userData) {
    // const { username, email, password } = req.body; <===> userData
    // console.log('user data in the service: ', userData);
    return service.post("/api/signup", userData);
  },
  login(userData) {
    return service.post("/api/login", userData);
  },
  logout() {
    return service.post("/api/logout", {});
  },
  getUser() {
    return service.get("/api/isLoggedIn");
  },
};

export default AUTH_SERVICE;
