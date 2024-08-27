import React from 'react'
import teamwork from '../images/teamwork.jpg'

const About = () => {
  return (
    <div className="App">
      <header className="App-header flex items-center justify-center min-h-screen bg-gray-100">
        <h1>About Us</h1>
        <p>This is a simple homepage built with React.</p>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </header>
      <div>
        <img 
        src={teamwork} 
        alt="h"
        style={{
          width: '100vw'
        }}
         />
        hello
      </div>
    </div>
  )
}

export default About