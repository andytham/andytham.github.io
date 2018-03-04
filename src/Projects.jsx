import React, { Component } from 'react';
import Project from './Project';
import projectData from './projects-data.json';

class Projects extends Component {
  constructor(props){
    super(props);
    this.renderProjects = this.renderProjects.bind(this);
  }

  componentDidMount(){
    console.log(projectData);
  }

  renderProjects(projects){
    return projects.map(project => {
      return <Project name={project.name} />
    })
  }
  render() {
    return (
      <div className="projects">
        {this.renderProjects(projectData)}
      </div>
    );
  }

}

export default Projects;
