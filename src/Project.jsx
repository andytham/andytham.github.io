import React, { Component } from 'react';

class Project extends Component {
// ${project.shortname}
  render() {
    let project = this.props.project;
    if (project.featured){
      return (
        <div className="project featured-small" key={project.key}>
          <div className="project-name"> {project.name} </div>
          <a className="anchor-image" target="_blank" href={`https://${project.url}`}>
            <img className="project-image image-start" src={require(`./images/${project.shortname}-1.png`)} alt="fuck off react warning" />
            <img className="project-image hover" src={require(`./images/${project.shortname}-2.png`)} alt="fuck off react warning" />
          </a>

          <div className="project-tagline hover-text">{project.tagline}</div>
          <div className="project-description hover-text"> {project.description}</div>
                  <div className="project-technologies hover-text">{project.techonologies}</div>
        </div>
      );
    } else {
      return (
        <div className="project" key={project.key}>
          <div className="project-name"> {project.name} </div>
          <a target="_blank" href={`https://${project.url}`}>
            <img className="project-image image-start" src={require(`./images/${project.shortname}-1.png`)} alt="fuck off react warning" />
            <img className="project-image hover" src={require(`./images/${project.shortname}-2.png`)} alt="fuck off react warning" />
          </a>

          <div className="project-tagline hover-text">{project.tagline}</div>
          <div className="project-description hover-text"> {project.description}</div>
          <div className="project-technologies hover-text">{project.techonologies}</div>
        </div>
      );
    }

  }
}

export default Project;
