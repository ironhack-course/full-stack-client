import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Private(props) {
  const context = useContext(AuthContext);
  useEffect(() => {
    if (!context.state.isLoggedIn) {
      return props.history.push("/signup-page");
    }
    // console.log('++++++++++++++++> ',context.state.currentUser);
  }, []);

  const { username } = context.state.currentUser;
  return (
    <>
      <h3>A very private page!</h3>
      <h2>User in the session is: {username}</h2>
    </>
  );
}
Private.contextType = AuthContext;

// https://reactjs.org/docs/context.html#classcontexttype
