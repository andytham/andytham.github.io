import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import hr from './images/hr.png'
import Home from './Home';
import Birds from './Birds';
import About from './About';
import './css/style.css';
import './css/header.css';
import './css/project.css';
import './css/about.css';

class App extends Component {

  render() {
    return (
      <div className="All">
        <Header />
        <img className="hr" src={hr} alt=""/>
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/birds" render={()=> <Birds />} />
        <Route exact path="/about" render={()=> <About />} />
        <img className="hr" src={hr} alt=""/>
      </div>
    );
  }
}

export default App;
