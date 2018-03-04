import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Projects />
      </div>
    );
  }
}

export default App;
