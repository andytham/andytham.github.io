import React, { Component } from 'react';

class Project extends Component {
// ${project.shortname}
  render() {
    let project = this.props.project;
    let ext = project.gif ? project.gif : {one: "png", two: "png", oneF: "png", twoF: "png"};
    return (
      <div className="project project-featured featured-big">
        <div className="project-name"> {project.name} </div>
        <a className="anchor-image" href={`${project.url}`}>
          <img className="project-image featured-start" src={require(`../images/${project.shortname}-1-featured.${ext.oneF}`)} alt="Featured" />
          <img className="project-image featured-start featured-end" src={require(`../images/${project.shortname}-2-featured.${ext.twoF}`)} alt="Featured 2" />
        </a>
        <div className="text-wrapper">
          <div className="project-tagline hover-text featured-text">{project.tagline}</div>
          <div className="project-description hover-text featured-text"> {project.description}</div>
          <div className="project-technologies hover-text featured-text">{project.technologies}</div>
        </div>
      </div>
    );
  }
}

export default Project;
