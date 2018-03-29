import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className="about-wrapper">
        <div id="about" className="about">
          <img className="me" src={require("./images/me.jpg")} />
          <div className="info-wrapper">
            <div className="info">
              Hello, I'm Andy, a full stack web developer, and my strengths include my logical thinking and creativity. Please contact me if you have any questions! This site is a work in progress.
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
          Ruby on Rails, Node.js, React.js, Express.js, D3.js, CSS3, ES6,
        </div>
      </div>
    );
  }

}

export default About;
