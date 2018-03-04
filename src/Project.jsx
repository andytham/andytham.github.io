import React, { Component } from 'react';

class Project extends Component {
// ${project.shortname}
  render() {
    let project = this.props.project;
    return (
      <div className="project" key={project.key}>
        <div className="project-name"> {project.name} </div>
        <img className="project-image image-start" src={require(`./images/${project.shortname}-1.png`)} alt="fuck off react warning" />
        <img className="project-image hover" src={require(`./images/${project.shortname}-2.png`)} alt="fuck off react warning" />
        <div className="project-technologies hover-text">{project.techonologies}</div>
        <div className="project-tagline hover-text">{project.tagline}</div>
        <div className="project-description hover-text"> {project.description}</div>
      </div>
    );
  }
}

export default Project;
