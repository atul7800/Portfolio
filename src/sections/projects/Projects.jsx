import React from "react";
import styles from "./ProjectsStyles.module.css";
import letmelogo from "../../assets/letmelogo.png";
import techtalkcentral from "../../assets/techtalkcentral.png";
import aqsat from "../../assets/aqsat.png";
import visionintelligence from "../../assets/visionintelligence.png"
import aha from "../../assets/aha.png"
import aha_logo from "../../assets/aha_logo.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          url="https://opensooqfs-632983-react.b632983.dev.eastus.az.svc.builder.cafe/"
          name="AQSAT"
          descrption="Rent now, Pay later"
          image={aqsat}
          
        />
        <ProjectCard
          url="https://visionintelligenceblackhat20232-422656-react.b422656.dev.eastus.az.svc.builder.cafe/"
          name="VisionIntelligence"
          descrption="Ticketing platform"
          image={visionintelligence}
        />
        <ProjectCard
          url="https://elearning.heart.org/"
          name="HIT"
          descrption="E-Learning Platform"
          image={aha_logo}
        />
        <ProjectCard
          url="https://letmelogo.vercel.app/"
          name="LetMeLogo"
          descrption="Logo Creation"
          image={letmelogo}
        />
        <ProjectCard
          url="https://techtalkcentral.vercel.app/"
          name="TechTalkCentral"
          descrption="Blog Website"
          image={techtalkcentral}
        />
      </div>
    </section>
  );
}

export default Projects;
