// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Hero } from '../components/Navbar/Hero/Hero';
import { About } from '../components/About';
import { Navbar } from '../components/Navbar/Navbar';
import logo from "../assets/nav/MAQ.png";
import styles from "./HomePage.module.css";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.logoDiv} >
        <img src={logo} 
          alt="My Logo" 
          className={styles.aboutImage}
        />
      </div>
      <Hero />
      <About />
    </>
  );
};

export default HomePage;