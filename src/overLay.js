import React from "react";
import ReactDOM from "react-dom";

const OverLay = ({ onClick }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>Press the button to signin</p>
          <button onClick={onClick} className="btn-overlay" id="signIn">
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, There!</h1>
          <p>Don't be shy and join us!</p>
          <button onClick={onClick} className="btn-overlay" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
