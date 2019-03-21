import React, { Component } from 'react';

class Project extends Component {
// ${project.shortname}
  render() {
    let project = this.props.project;
    let ext = project.gif ? project.gif : {one: "png", two: "png", oneF: "png", twoF: "png"};
    if (project.featured && !project.hidden){
      return (
        <div className="project featured-small">
          <div className="project-name"> {project.name} </div>
          <a className="anchor-image" href={`${project.url}`}>
            <img className="project-image image-start" src={require(`../images/${project.shortname}-1.${ext.one}`)} alt="" />
            <img className="project-image hover" src={require(`../images/${project.shortname}-2.${ext.two}`)} alt="" />
          </a>

          <div className="project-tagline hover-text">{project.tagline}</div>
          <div className="project-description hover-text"> {project.description}</div>
          <div className="project-technologies hover-text">{project.technologies}</div>
        </div>
      );
    } else if (!project.hidden){
      return (
        <div className="project">
          <div className="project-name"> {project.name} </div>
          <a href={`${project.url}`}>
            <img className="project-image image-start" src={require(`../images/${project.shortname}-1.${ext.one}`)} alt="" />
            <img className="project-image hover" src={require(`../images/${project.shortname}-2.${ext.two}`)} alt="" />
          </a>
        
          <div className="project-tagline hover-text">{project.tagline}</div>
          <div className="project-description hover-text"> {project.description}</div>
          <div className="project-technologies hover-text">{project.technologies}</div>
        </div>
      );
   }       else {
    return false;
  }
  }
}

export default Project;
