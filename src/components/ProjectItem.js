import React from "react";

function ProjectItem({name, about, technologies}) {
  const techStacks = technologies.map((tech,index) => {
    return <span key={index}>{tech}</span>
  });

  console.log(techStacks)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techStacks}
      </div>
    </div>
  );
}

export default ProjectItem;
