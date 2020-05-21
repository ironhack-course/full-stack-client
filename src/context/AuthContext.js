import React from "react";

export const AuthContext = React.createContext({
  formSignup: {
    username: "",
    email: "",
    password: "",
  },
  formLogin: {
    email: "",
    password: "",
  },
  currentUser: {},
  isLoggedIn: false,
  message: null,
});
