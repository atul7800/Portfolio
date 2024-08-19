import SkillList from "../../common/SkillList";
import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">SKILLS</h1>
      <div className={styles.skillsContainer}>
        <SkillList skill="Javascript" />
        <SkillList skill="React.js" />
        <SkillList skill="React Router" />
        <SkillList skill="Context API" />
        <SkillList skill="Redux" />
      </div>
      <hr />
      <div className={styles.skillsContainer}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="Bootstrap" />
        <SkillList skill="Tailwind CSS" />
        <SkillList skill="MUI" />
        <SkillList skill="Shadcn" />
      </div>
      <hr />
      <div className={styles.skillsContainer}>
        <SkillList skill="Ajax" />
        <SkillList skill="DOM" />
        <SkillList skill="REST APIs" />
        <SkillList skill="JSON" />
        <SkillList skill="Strapi CMS" />
        <SkillList skill="Git" />
      </div>
    </section>
  );
}

export default Skills;
