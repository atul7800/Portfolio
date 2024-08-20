import React, { useEffect } from "react";
import styles from "./ContactStyles.module.css";
import phoneLight from "../../assets/phoneLight.png";
import phoneDark from "../../assets/phoneDark.png";
import emailLight from "../../assets/emailLight.png";
import emailDark from "../../assets/emailDark.png";
import { useTheme } from "../../common/ThemeContext";

function Contact() {
  const { theme } = useTheme();

  const phone = theme === "light" ? phoneLight : phoneDark;
  const email = theme === "light" ? emailDark : emailLight;

  const emailID = "atulgupta0824@gmail.com";
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
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
      <form action="https://formspree.io/f/mpwajgvl" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            style={{ backgroundImage: "none !important" }}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
