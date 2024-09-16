import React, { useState } from 'react';

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f49593df-07b7-4622-b3d9-9355eff6cf68");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div class="w-[600px] mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Form</h1>
  <form onSubmit={onSubmit} class="space-y-4">
    <div>
      <label for="name" class="block text-2xl font-semibold text-black-700">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label for="email" class="block text-2xl font-semibold text-black-700">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div>
      <label for="message" class="block text-2xl font-semibold text-black-700">Message</label>
      <textarea
        name="message"
        id="message"
        required
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        class="w-full px-4 py-2 bg-indigo-600 block text-2xl font-semibold text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Form
      </button>
    </div>
  </form>
  <span class="block mt-4 text-center text-green-600">{result}</span>
</div>
  );
}

export default ContactForm;