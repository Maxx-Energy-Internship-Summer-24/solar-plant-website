import React from 'react'

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Us</h1>
        <p>This is a simple homepage built with React.</p>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </header>
    </div>
  )
}

export default About