import React, { Component } from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';
import projectData from './projects-data.json';

class Projects extends Component {
  constructor(props){
    super(props);
    this.renderProjects = this.renderProjects.bind(this);
  }

  componentDidMount(){
    // console.log(projectData);
  }

  renderProjects(projects){
    let count = 0;
    let sortedProjects = projects.sort((a, b) => {
      return a.display_id-b.display_id
    })

    return sortedProjects.map((project, index) => {
      count++;
      if (!project.featured){
        return <Project project={project} key={count}/>
      } else {
        return <Project project={project} key={count} />
      }
    })
  }
  renderFeatured(projects){
    let count = 0;
    return projects.map((project, index) => {
      if (project.featured){
        return <FeaturedProject project={project} key={count++}/>
      } else {
        return false;
      }
    })
  }
  render() {
    return (
      <div id="projects" className="projects">
        <div className="projects-title title">
          Projects
        </div>
        <div className="projects-wrapper">
          {this.renderFeatured(projectData)}
          {this.renderProjects(projectData)}
        </div>
      </div>
    );
  }

}

export default Projects;
