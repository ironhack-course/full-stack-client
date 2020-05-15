import React from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/index";

export default function Navbar() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        return (
          <>
            <nav>
              <NavLink to="/">Home</NavLink>
              {isLoggedIn ? (
                <>
                  <NavLink to="/private">Private</NavLink>
                  <button onClick={context.handleLogout}>Logout</button>
                </>
              ) : (
                <NavLink to="/signup-page">Signup</NavLink>
              )}
            </nav>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}
