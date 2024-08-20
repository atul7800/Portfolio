import React from "react";

function ProjectCard({ url, name, descrption, image }) {
  return (
    <a href={url} target="_blank">
      <img src={image} alt={`${name} logo`} />
      <h3>{name}</h3>
      <p>{descrption}</p>
    </a>
  );
}

export default ProjectCard;
