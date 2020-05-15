import React from "react";
import { Link } from "react-router-dom";
import "./StartScreen.css";

function StartScreen(props) {
  return (
    <div className="StartScreen">
      <div className="landing-wrapper">
        <h1>petful</h1>
        <p>lets get a pet!</p>
        <Link id="start" to="/cats">
          <button type="button">look at these kitties!!</button>{" "}
        </Link>{" "}
        <Link id="start" to="/dogs">
          <button type="button">look at these doggos!!</button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}

export default StartScreen;
