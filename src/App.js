import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import hr from './images/hr.png'
import './css/style.css';
import './css/header.css';
import './css/project.css';
import './css/about.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <img className="hr" src={hr} />
        <Projects />
        <img className="hr" src={hr} />
        <About />

      </div>
    );
  }
}

export default App;
