import React, { Component } from 'react';

class Project extends Component {

  render() {
    return (
      <div className="project">
        {this.props.name}
      </div>
    );
  }

}

export default Project;
