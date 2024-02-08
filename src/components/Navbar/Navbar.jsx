// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
import hamburgerIcon from '../../assets/nav/icons8-hamburger-menu-100.png';
import closeIcon from '../../assets/nav/closeIcon.png';
import MAQ from "../../assets/nav/MAQ.png";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className = {styles.Navbar}>
        <img 
            className={styles.menuBtn} 
            src={menuOpen ? closeIcon : hamburgerIcon}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
        />
        <a className={styles.mainPageTitle} href="/">
            Game Design Document
        </a>
        <a href="mailto:maq3009@gmail.com" className={styles.contactBtn}>Contact Me</a>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            <img className={styles.MAQ}
            src={MAQ}
            alt="MAQ"
            >
            </img>
            <ul className={styles.menuItems}>
                <li>
                    <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                    <Link to="/SpriteGallery">Characters</Link>
                </li>
                <li>
                    <Link to="/enemies">Enemies</Link>
                </li>
                <li>
                    <Link to="/bosses">Bosses</Link>
                </li>
                <li>
                    <Link to="/gameCode">GameCode</Link>
                </li>
                <li>
                    <Link to="/sideQuests">Side Quests</Link>
                </li>
                <li>
                    <Link to="/gameItems">GameItems</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/mainStory">MainStory</Link>
                </li>
                <li>
                    <Link to="/map">Map</Link>
                </li>
                <li>
                    <Link to="/weapons">Weapons</Link>
                </li>
                <li>
                    <Link to="/updates">Updates</Link>
                </li>
            </ul>
            
        </div>
    </nav>
  );
};

