// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import img1 from "../assets/Characters/0_Blacksmith_Communication_001.png";
import img2 from "../assets/Characters/0_Jeweler_Chagrin_000.png";
import img3 from "../assets/Characters/0_Minotaur_Falling Down_001.png";
import img4 from "../assets/Characters/0_Sage_Communication_001.png";
import img5 from "../assets/Characters/0_Warlord_Communication_001.png";
import img6 from "../assets/Characters/Idle.png";
import styles from "./Characters.module.css";


const Characters = () => {
  return (
    <section className={styles.characterSectionStyling}>
      <div>
      <Navbar/>
      <h1>Characters Page</h1>
      </div>
      <div className={styles.character}>
        <div className={styles.imgDiv}>
          <h1>Frank</h1>
          <img src={img1} className={styles.image1} alt="firstImage" />
        </div>
        <div className={styles.imgDiv}>
          <h1>Ponz</h1>
          <img src={img2} className={styles.image2} alt="secondImage" />
        </div>
        <div className={styles.imgDiv}>
          <h1>Night</h1>
          <img src={img3} className={styles.image3} alt="thirdImage" />
        </div>
        <div className={styles.imgDiv}>
          <h1>Silo</h1>
          <img src={img4} className={styles.image4} alt="fourthImage" />
        </div>
        <div className={styles.imgDiv}>
          <h1>Toad</h1>
          <img src={img5} className={styles.image5} alt="fifthImage" />
        </div>
        <div className={styles.imgDiv}>
          <h1>Albert</h1>
          <img src={img6} className={styles.image6} alt="sixthImage" />
        </div>
      </div>
    </section>
  );
};

export default Characters;