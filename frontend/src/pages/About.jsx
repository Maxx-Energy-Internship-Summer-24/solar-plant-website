import React from 'react'
import teamwork from '../images/teamwork.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <div className="App">
      <header className="about-txt flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold m-10">About Us</h1>
        <div className="m-[10%] max-w-[50%]">
          <p>At MAXX Energy, we are committed to advancing the future of sustainable energy through
            innovative technology and data-driven solutions. Our latest initiative aims to enhance
            how we and our stakeholders access and analyze solar plant generation data.</p>
          <p>Recognizing the need for an efficient, user-friendly platform, our executive
            team has embarked on developing a web application designed to securely provide
            real-time data insights to authorized users while maintaining transparency with publicly
            viewable information. This application will empower our employees and stakeholders by
            offering them an intuitive interface to explore and understand our solar plant data.</p>
        </div>
        <button
          className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          ><a href="https://maxxpotential.com/" target="_blank">
            Learn More</a>
        </button>
      </header>
      <div>
        <img 
        src={teamwork} 
        alt="h"
        style={{
          width: '100vw'
        }}
         />
      </div>
      <div className="about-txt flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold mb-[10%]">Meet the Team</h1>
        <div className="grid grid-cols-3 justify-items-center gap-4 w-[100%]">
          <div>
            <h1 className='text-4xl font-bold p-4'>DevOps</h1>
            <ul className='members ml-6'>
              <li><a href="https://www.linkedin.com/in/ty-reid-27277321b" target="_blank">Ty Reid</a></li>
              <li><a href="https://www.linkedin.com/in/torell-butler" target="_blank">Torell Butler</a></li>
              <li><a href="https://www.linkedin.com/in/jovens-sagesse/" target="_blank">Jovens Sagesse</a></li>
              <li><a href="https://www.linkedin.com/in/jahazielramos/" target="_blank">Jahaziel Ramos</a></li>
              <li><a href="https://www.linkedin.com/in/ty-reid-27277321b" target="_blank">Brauleo Lizardo</a></li>
              <li><a href="https://www.linkedin.com/in/clara-edward-a907b7213/" target="_blank">Clara Edwards</a></li>
            </ul>
          </div>
          <div>
            <h1 className='text-4xl font-bold p-4'>Data</h1>
            <ul className='members ml-6'>
              <li><a href="https://www.linkedin.com/in/pierre-antwi-boasiako-123209271/" target="_blank">Pierre Antwi</a></li>
              <li><a href="https://www.linkedin.com/in/dumebi-chukwuma-1a914a258/" target="_blank">Alfred Chukwuma</a></li>
            </ul>
          </div>
          <div>
            <h1 className='text-4xl font-bold p-4'>Support</h1>
            <ul className='members ml-6'>
              <li>Leah Smith</li>
              <li>Hsar Reh</li>
              <li>Michael Tran</li>
              <li>Arinze Adigwe</li>
              <li>Gustavo Nava</li>
              <li>Arnold Aguilar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About