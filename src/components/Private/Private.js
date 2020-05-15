import React from "react";
import { AuthContext } from "../../context/index";

export default class Private extends React.Component {
  componentDidMount() {
    // console.log('--------------> ', this.context.state.currentUser);

    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
  }
  render() {
    // console.log('++++++++++++++++> ', this.context.state.currentUser);

    const { username } = this.context.state.currentUser;
    return (
      <>
        <h3>A very private page!</h3>
        <h2>User in the session is: {username}</h2>
      </>
    );
  }
}

Private.contextType = AuthContext;

// https://reactjs.org/docs/context.html#classcontexttype
