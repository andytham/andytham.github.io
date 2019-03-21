import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className="about-wrapper">
        <div id="about" className="about">
          <img className="me" src={require("../images/me2.png")} alt=""/>
          <div className="info-wrapper">
            <div className="info">
              Hello, I'm Andy, a full stack web developer, and my strengths include my problem solving and creativity. Please contact me if you have any questions!
            </div>
            <br />
            <div className="links">
              <div className="link">
                <a href="https://github.com/andytham"> GitHub </a>
              </div>
              <div className="link">
                <a href="https://linkedin.com/in/andytham"> LinkedIn </a>
              </div>
              <div className="link">
                <a href="mailto:thamandyy@gmail.com"> thamandyy@gmail.com </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tech">
          D3.js, Ruby on Rails, Node.js, React.js, Redux, Express.js, PostgreSQL, JWT, socket.io, Python, CSS3, HTML5, JavaScript ES6
        </div>
      </div>
    );
  }

}

export default About;
