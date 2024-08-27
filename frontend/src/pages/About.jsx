import React from 'react'
import teamwork from '../images/teamwork.jpg'

const About = () => {
  return (
    <div className="App">
      <header className="App-header flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold m-10">About Us</h1>
        <div className="m-[10%]">
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
          onClick={() => alert('Button clicked!')}
          className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          >
            Click Me
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
      <div className="App-header flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold mb-[10%]">Meet the Team</h1>
        <div className="grid grid-cols-3 justify-items-center gap-4 w-[100%]">
          <div>
            <h1 className='text-4xl font-bold p-4'>DevOps</h1>
            <ul className='ml-6'>
              <li>Ty Reid</li>
              <li>Torell Butler</li>
              <li>Pierre Antwi</li>
              <li>Jovens Sagesse</li>
              <li>Alfred Chukwuma</li>
              <li>Jahaziel Ramos</li>
              <li>Brauleo Lizardo</li>
              <li>Clara Edwards</li>
            </ul>
          </div>
          <div>
            <h1 className='text-4xl font-bold p-4'>Support</h1>
            <ul className='ml-6'>
              <li>Ty Reid</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h1 className='text-4xl font-bold p-4'>Data</h1>
            <ul className='ml-6'>
              <li>Ty Reid</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About