import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';


const faqData = [
  {
    question: "What are solar panels?",
    answer: "Solar panels are devices that convert sunlight into electricity. They are made up of photovoltaic cells that capture and convert solar energy into usable power."
  },
  {
    question: "How do solar panels work?",
    answer: "Solar panels work by using photovoltaic cells to convert sunlight into direct current (DC) electricity. This DC electricity is then converted into alternating current (AC) by an inverter, which can be used to power your home or business."
  },
  {
    question: "What are the benefits of installing solar panels?",
    answer: "Installing solar panels can reduce your electricity bills, lower your carbon footprint, and increase the value of your property. Solar energy is a renewable and clean source of power."
  },
  {
    question: "How much does it cost to install solar panels?",
    answer: "The cost of installing solar panels varies depending on the size of the system, the type of panels, and installation complexity. On average, solar panel installations can range from $15,000 to $30,000 before incentives or rebates."
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require minimal maintenance. It is recommended to clean them periodically to remove dust and debris, and to have them inspected by a professional every few years to ensure they are functioning efficiently."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
    <div className="faq-container max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg m-[10%]" >
      <h1 className="text-4xl font-bold text-center mb-8">Solar Panel FAQ</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item mb-4 border-b border-gray-300">
            <div
              className="faq-question cursor-pointer py-3 text-2xl font-semibold text-green-700"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer py-2 text-gray-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <ContactForm />
    </div>
  );
}

export default FAQ;