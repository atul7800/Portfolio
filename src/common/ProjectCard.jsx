import React from "react";
import styles from "../sections/projects/ProjectsStyles.module.css";

function ProjectCard({ url, name, descrption, image }) {
  return (
    <a href={url} target="_blank">
      <div className={styles.card}>
        <img className="projectImg" src={image} alt={`${name} logo`} />
      </div>
      <h3>{name}</h3>
      <p>{descrption}</p>
    </a>
  );
}

export default ProjectCard;
