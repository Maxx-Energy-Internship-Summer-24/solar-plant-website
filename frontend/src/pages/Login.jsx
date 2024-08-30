import React, { useState } from 'react';
import '../styles/Login.css';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';

const Login = () => {

  const [action, setAction] = useState("Sign Up");

  const handleNavigation = (url) => {
    window.location.href = url;
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action !== "Login" && action !== "Password Reset" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter your first name" />
          </div>
        )}
        {action !== "Login" && action !== "Password Reset" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter your last name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Enter a password" />
        </div>
        {action !== "Login" && (
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Re-enter your password" />
          </div>
        )}
      </div>
      {action === "Login" && (
        <div className="forgot-password" onClick={() => { setAction("Password Reset") }}>
          Forgot Password?  
          <span> Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => { 
            if (action === "Sign Up") {
              handleNavigation("/");
            } else {
              setAction("Sign Up");
            }
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => { 
            if (action === "Login") {
              handleNavigation("/");
            } else {
              setAction("Login");
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
