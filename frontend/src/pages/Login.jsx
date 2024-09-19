import React, { useState } from 'react';
import '../styles/Login.css';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';
import SignUpForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const Login = ({isLoggedIn, setLoggedIn, userInfo, setUserInfo}) => {

  const [action, setAction] = useState("Sign Up");
  const [showSignUp, setShowSignUp] = useState(true);

  const handleNavigation = (url) => {
    window.location.href = url;
  }

  return (
    <>
    {showSignUp ? <SignUpForm showSignUp={showSignUp} setShowSignUp={setShowSignUp}/> : <LoginForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo}/>}
    </>
  );
}

export default Login;
