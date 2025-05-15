import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Richa</h1>
        <p className={styles.description}>
        I'm a software developer with a logical mindset, focused on building practical solutions to real-world problems. 
        I enjoy turning complex challenges into simple, impactful software.
        </p>
        <a href="mailto:richasinghkk972@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Richa.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
