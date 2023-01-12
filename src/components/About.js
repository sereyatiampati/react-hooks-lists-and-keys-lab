import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskVSdiLfFbCLHOzJCIMOM7K2cGIGN8lbTeg&usqp=CAU" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
