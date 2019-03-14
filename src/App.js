import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Birds from './Birds';
import './css/style.css';
import './css/header.css';
import './css/project.css';
import './css/about.css';

class App extends Component {

  render() {
    return (
      <div className="All">
      <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/birds" render={()=> <Birds />} />
      </div>
    );
  }
}

export default App;
