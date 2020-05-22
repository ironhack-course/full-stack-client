import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const context = useContext(AuthContext);
  const { isLoggedIn, handleLogout } = context.state;
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/private">Private</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/signup-page">Signup</NavLink>
        )}
      </nav>
    </>
  );
}
