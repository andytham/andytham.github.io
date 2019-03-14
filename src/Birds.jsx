import React, { Component } from 'react';

import './css/birds.css'

class Birds extends Component {
  render() {
    return (
      <div className="App">
				<div className="birds">
					<span className="birds-header">Harmony of Birds</span>
					<br/>
					<br/>
					A project created for a Human Computer Interaction course at Stony Brook University. Developed in Adobe Director and written in Lingo.
					<br/>
					<br/>
					As it requires Adobe Shockwave or running an exe locally, I have created a video of it in action.
					<br/>
					<iframe title="Harmony of Birds" className="birds-video" width="512" height="384"
						src="https://www.youtube.com/embed/ouMQ5YsdPxc" frameBorder="0" allowFullScreen>
					</iframe> 
					<br/>
					The "Sing" part of the project no longer works as the license (provided by my professor) for "asPitchDetect Xtra" seems to be invalid now. This plugin handled pitch tracking that allowed users to sing, capture the pitch, and allowed me to place notes on the correct location. A shame as it was an impressive part of the project.
					<br/>
					<br/>
					Inspired by this video:
					
					<br/>
					<iframe title="inspiration" className="inspiration-video" width="448" height="252" src="https://www.youtube.com/embed/LoM4ZZJ2UrM" frameBorder="0" allowFullScreen></iframe>
					
					<br/>
			
				</div>
      </div>
    );
  }
}

export default Birds;
