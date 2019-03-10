import React, { Component } from 'react';
import Header from './Header';
import hr from './images/hr.png'


class Birds extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img className="hr" src={hr} />
				A project created for a Human Computer Interaction course at Stony Brook University.
				Developed in Adobe Director and written in Lingo.




				Inspired by this video:
				<iframe width="420" height="315"
					src="https://www.youtube.com/embed/LoM4ZZJ2UrM ">
				</iframe> 
				
				
				The "Sing" part of the project no longer works as the license (provided by my professor) for "asPitchDetect Xtra" seems to be invalid now. This plugin handled pitch tracking that allowed users to sing, and the software to capture the pitch, allowing us to place notes on the respective location. A shame as it was an impressive part of the project.
				As it requires Adobe Shockwave or running an exe locally, I have created a video of it in action.
      </div>
    );
  }
}

export default Birds;
