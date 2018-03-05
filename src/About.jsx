import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className="about-wrapper">
        <div id="about" className="about">
          <img className="me" src={require("./images/me.jpg")} />
          <div className="info-wrapper">
            <div className="info">
              Hello, I'm Andy, a full stack web developer, and I like to think I'm pretty creative. Please contact me if you have any questions! This site is a work in progress.
            </div>
            <br />
            <div className="links">
              <div className="link">
                GitHub: https://github.com/andytham
              </div>
              <div className="link">
                LinkedIn: https://linkedin.com/andytham
              </div>
              <div className="link">
                E-mail: thamandyy@gmail.com
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