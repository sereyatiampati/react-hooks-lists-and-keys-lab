import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const allProjects = projects.map(project=> {
    
    const {id,name, about, technologies} = project
    return <ProjectItem key={id} name={name} about={about} technologies={technologies}/>;
  });
  console.log(allProjects)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {allProjects}
      </div>
    </div>
  );
}

export default ProjectList;
