import React from "react";

export const AuthContext = React.createContext({
  state: {
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
  },
});
