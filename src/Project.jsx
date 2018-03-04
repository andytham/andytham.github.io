import React, { Component } from 'react';

class Project extends Component {
// ${project.shortname}
  render() {
    let project = this.props.project;
    return (
      <div className="project" key={project.key}>
        <div className="proj-name"> {project.name} </div>
        <img className="proj-image" src={require(`./images/${project.shortname}-1.png`)} />
        <img className="proj-image hover" src={require(`./images/${project.shortname}-2.png`)} />
        


      </div>
    );
  }
}

export default Project;
