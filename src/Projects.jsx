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
    let count = 0;
    let sortedProjects = projects.sort((a, b) => {
      return a.display_id-b.display_id
    })

    return sortedProjects.map((project, index) => {
      count++;
      return <Project project={project} key={count}/>
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
