import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Atul Gupta_SD_resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import phoneLight from "../../assets/phoneLight.png";
import phoneDark from "../../assets/phoneDark.png";
import emailLight from "../../assets/emailLight.png";
import emailDark from "../../assets/emailDark.png";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const phone = theme === "light" ? phoneDark : phoneLight;
  const email = theme === "light" ? emailLight : emailDark;

  const emailID = "atulgupta0824@gmail.com";

  return (
    <section className={styles.container} id="hero">
      <div className={styles.topContainer}>
        <div className={styles.coloModeContainer}>
          <img
            className={styles.hero}
            src={heroImg}
            alt="Profule picture of Atul"
          />

          <img
            onClick={toggleTheme}
            className={styles.colorMode}
            src={themeIcon}
            alt="dark/light mode"
          />
        </div>

        <div className={styles.info}>
          <h1>
            Atul <br /> Gupta
          </h1>
          <h2>Frontend Developer</h2>
          <span>
            {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
            <a
              href="https://github.com/atul7800?tab=repositories/"
              target="_blank"
            >
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="http://www.linkedin.com/in/atul-gupta24/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>

          <p className={styles.description}>
            With a passion for developing modern web applications for
            businesses.
          </p>

          {/* <a href={CV} download>
          <button className="hover">Resume</button>
        </a> */}
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.contactInfo}>
          <span className={styles.phone}>
            <img src={phone} alt="Phone" />
            <p>8285833862</p>
          </span>
          <span className={styles.email}>
            <img src={email} alt="Email" />
            <p className={styles.emaiInfo}>
              <a href={`mailto:${emailID}`}>atulgupta0824@gmail.com</a>
            </p>
          </span>
        </span>
      </div>
    </section>
  );
}

export default Hero;
