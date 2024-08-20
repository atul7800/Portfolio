import React from "react";
import styles from "./ProjectsStyles.module.css";
import letmelogo from "../../assets/letmelogo.png";
import techtalkcentral from "../../assets/techtalkcentral.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          url="https://letmelogo.vercel.app/"
          name="LetMeLogo"
          descrption="A Logo Creation Tool"
          image={letmelogo}
        />
        <ProjectCard
          url="https://techtalkcentral.vercel.app/"
          name="TechTalkCentral"
          descrption="A Blog Website"
          image={techtalkcentral}
        />
      </div>
    </section>
  );
}

export default Projects;
