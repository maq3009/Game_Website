// eslint-disable-next-line no-unused-vars
import React from "react";
import MAQ from "../../../assets/nav/MAQ.png";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div>
            <h1> Hi, My name is Misael</h1>
            <p>I am a Freelance Graphic Artist that does jobs as a side-hustle.  I am a Navy Vet and also a Boiler Operator.  Thanks for coming to my website.</p>
            <a href="mailto:maq3009@gmail.com">Contact Me</a>

        </div>
        <img className={styles.MAQ}
            src={MAQ}
            alt="MAQ"
        >
        </img>
    </section>
}