import React from "react";
import ReactDOM from "react-dom";

const SignUp = () => {
  return (
    <div className="form-container sign-up-container">
      <form>
        <h1 className="header-signin">Create Account</h1>
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
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
