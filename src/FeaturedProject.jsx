import React, { Component } from 'react';

class Project extends Component {
// ${project.shortname}
  render() {
    let project = this.props.project;
    return (
      <div className="project project-featured featured-big" key={project.key}>
        <div className="project-name"> {project.name} </div>
        <a className="anchor-image" target="_blank" href={`${project.url}`}>
          <img className="project-image featured-start" src={require(`./images/${project.shortname}-1-featured.png`)} alt="fuck off react warning" />
          <img className="project-image featured-start featured-end" src={require(`./images/${project.shortname}-2-featured.png`)} alt="fuck off react warning" />
        </a>
        <div className="text-wrapper">
          <div className="project-tagline hover-text featured-text">{project.tagline}</div>
          <div className="project-description hover-text featured-text"> {project.description}</div>
          <div className="project-technologies hover-text featured-text">{project.techonologies}</div>
        </div>
      </div>
    );
  }
}

export default Project;
