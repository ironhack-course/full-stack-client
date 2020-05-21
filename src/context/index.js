import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "../services/AuthService";

import { AuthContext } from "./AuthContext";

const AuthProvider = (props) => {
  const [state, setState] = useState({
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

  useEffect(() => {
    AUTH_SERVICE.getUser()
      .then((responseFromServer) => {
        const { user } = responseFromServer.data;

        setState({
          ...user,
          currentUser: user,
          isLoggedIn: true,
        });
      })
      .catch((err) =>
        console.log("Error while getting the user: ", err.response?.data)
      );
  }, []);

  const handleSignupInput = (e) => {
    const {
      target: { name, value },
    } = e;
    setState({
      ...state,
      formSignup: {
        ...state.formSignup,
        [name]: value,
      },
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(state.formSignup)
      .then((responseFromServer) => {
        const {
          data: { user, message },
        } = responseFromServer;

        setState({
          ...state,
          formSignup: {
            username: "",
            email: "",
            password: "",
          },
          currentUser: user,
          isLoggedIn: true,
        });
        alert(`${message}`);
        props.history.push("/home");
      })
      .catch((err) => {
        if (err.response?.data) {
          setState({
            ...state,
            message: err.response.data.message,
          });
        }
      });
  };

  const handleLogout = () => {
    AUTH_SERVICE.logout()
      .then(() => {
        setState({
          ...state,
          currentUser: {},
          isLoggedIn: false,
        });
        props.history.push("/");
      })
      .catch((err) => alert("Error while logout: ", err));
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        handleSignupInput,
        handleSignupSubmit,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthProvider);
