import React, { useState } from "react";



const SignUpForm = ({ showSignUp, setShowSignUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  // Form validation function
  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    const name = formData.name
    const email = formData.email
    const password = formData.password

    const data = {
      name,
      email,
      password
    }
    const url = "http://127.0.0.1:5000/sign-up"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted: ", formData);
      setSubmitted(true);
    }
    const response = await fetch(url, options)
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json()
      alert(data.message)
    } else {
      setShowSignUp(false)
      alert("Account created!")
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

  // Call the Login component
  const callLogin = (e) => {
    e.preventDefault(true)
    setShowSignUp(false);
  }

  return (
    <div className="w-[600px] mx-auto p-6 bg-white shadow-md rounded-lg  m-[200px]">
      <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
      {submitted && <span className="block text-center text-green-600 mb-4">Sign up successful!</span>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-2xl font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-2xl font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
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
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="flex justify-around">
          <button
            type="submit"
            className="w-[30%] px-4 py-2 bg-indigo-600 text-2xl font-semibold text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
          <button
            onClick={callLogin}
            className="w-[30%] px-4 py-2 bg-indigo-600 text-2xl font-semibold text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;