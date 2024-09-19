import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ showSignUp, setShowSignUp, isLoggedIn, setLoggedIn, userInfo, setUserInfo }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate()

  // Form validation function
  const validate = () => {
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    const email = formData.email
    const password = formData.password

    const data = {
      email,
      password
    }
    const url = "http://127.0.0.1:5000/login"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Data Submitted: ', formData);
      
    }
    const response = await fetch(url, options)
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json()
      alert(data.message)
    } else {
      const data = await response.json()
      if (data.result == "success") {
        setSubmitted(true)
        setLoggedIn(true)
        alert("You have successfully logged in!")
        setUserInfo(data.user)
        sessionStorage.setItem('user', JSON.stringify(data.user));
        navigate('/UserProfile')
      } else if (data.result == "wrong password") {
        alert("You have entered the wrong password")
      } else if (data.result == "no user found") {
        alert("No user found")
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Call the Sign Up component
  const callSignUp = (e) => {
    e.preventDefault();
    setShowSignUp(true);
  };

  return (
    <div className="w-[600px] mx-auto p-6 bg-white shadow-md rounded-lg m-[200px]">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      {submitted && <span className="block text-center text-green-600 mb-4">Login successful!</span>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-2xl font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-2xl font-semibold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="flex justify-around">
        <button
            onClick={callSignUp}
            className="w-[30%] px-4 py-2 bg-indigo-600 text-2xl font-semibold text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
          <button
            type="submit"
            className="w-[30%] px-4 py-2 bg-indigo-600 text-2xl font-semibold text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
         
        </div>
      </form>
    </div>
  );
};

export default LoginForm;