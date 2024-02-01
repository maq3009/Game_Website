// eslint-disable-next-line no-unused-vars
import React from "react";
import rpgGuy from "../../src/assets/nav/rpgGuy.png";
import styles from "./About.module.css";
import logo from "../../src/assets/nav/MAQ.png";

export const About = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={logo} 
                alt="Me sitting with a laptop" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={rpgGuy} alt="rpg icon"/> 
                    <div className={styles.aboutItemsText}>
                        <h3>I am a frontEnd Developer</h3>
                        <p>
                            I am a Front End Developer.  I have experience and stuff.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={rpgGuy} alt="rpg icon"/> 
                    <div>
                        <h3>I am a frontEnd Developer</h3>
                        <p>
                            I am a Front End Developer.  I have experience and stuff.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={rpgGuy} alt="rpg icon"/> 
                    <div>
                        <h3>I am a frontEnd Developer</h3>
                        <p>
                            I am a Front End Developer.  I have experience and stuff.
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    );
}