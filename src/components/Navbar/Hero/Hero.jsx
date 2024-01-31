// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Hero.module.css";


export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>.....Hi, My name is Misael</h1>
            <p className={styles.description}>I am a Freelance Graphic Artist that does jobs as a side-hustle.  I am a Navy Vet and also a Boiler Operator.  Thanks for coming to my website.</p>
            <a href="mailto:maq3009@gmail.com" className={styles.contactBtn}>Contact Me</a>

        </div>
    </section>
    )
}