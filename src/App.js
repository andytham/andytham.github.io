import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import './css/style.css';
import './css/header.css';
import './css/project.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <About />

      </div>
    );
  }
}

export default App;
