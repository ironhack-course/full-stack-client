import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// Components
import Home from "./components/Home/Home";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import Private from "./components/Private/Private";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup-page" component={Signup} />
        <Route exact path="/private" component={Private} />
      </Switch>
      <Login />
      <footer>
        Made with
        <span role="img" aria-label="emoji">
          ♥️
        </span>
        at Ironhack Miami - PTWD October 2019
      </footer>
    </div>
  );
}

export default App;
