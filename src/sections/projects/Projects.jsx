import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import hipsterGlasses from "../../assets/hipsster.png";
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
          image={viberr}
        />
        <ProjectCard
          url="https://techtalkcentral.vercel.app/"
          name="TechTalkCentral"
          descrption="A Blog Website"
          image={hipsterGlasses}
        />
      </div>
    </section>
  );
}

export default Projects;
