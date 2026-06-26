import React from "react";
import heroImage from "../../assets/hero-headphones.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          100 Thousand Songs, ad-free
          <br />
          Over thousands podcast episodes
        </h1>
      </div>

      <div className={styles.heroImage}>
        <img src={heroImage} alt="Headphones" />
      </div>
    </section>
  );
};

export default Hero;