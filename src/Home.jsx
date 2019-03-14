import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import hr from './images/hr.png'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img className="hr" src={hr} alt=""/>
        <Projects />
        <img className="hr" src={hr} alt=""/>
      </div>
    );
  }
}

export default Home;
