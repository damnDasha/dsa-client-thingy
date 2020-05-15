import React from "react";
import { Link } from "react-router-dom";
import "./StartScreen.css";

function StartScreen(props) {
  return (
    <div className="StartScreen">
      <div className="landing-wrapper">
        <h1>petful</h1>
        <p>lets get a pet!</p>
        <Link id="start" to="/main">
          <button type="button">look at these bebbys!!</button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}

export default StartScreen;
