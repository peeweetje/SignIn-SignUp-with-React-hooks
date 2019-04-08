import React, { useState } from "react";
import ReactDOM from "react-dom";

const SignIn = () => {
  return (
    <div className=" form-container sign-in-container">
      <form>
        <h1 className="header-signin">Sign in</h1>
        <div className="social-container">
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
