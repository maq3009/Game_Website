// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
import hamburgerIcon from '../../assets/nav/icons8-hamburger-menu-100.png';
import closeIcon from '../../assets/nav/closeIcon.png';


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
            <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#Portfolio">Porfolio</a>
                    </li>
                    <li>
                        <a href="#Characters">Characters</a>
                    </li>
                    <li>
                        <a href="#Enemies">Enemies</a>
                    </li>
                    <li>
                        <a href="#Bosses">Bosses</a>
                    </li>
                    <li>
                        <a href="#Main Story">Main Story</a>
                    </li>
                    <li>
                        <a href="#Side Quests">Side Quests</a>
                    </li>
                    <li>
                        <a href="#Weapons">Weapons</a>
                    </li>
                    <li>
                        <a href="#Game Items">Game Items</a>
                    </li>
                    <li>
                        <a href="#Music">Music</a>
                    </li>
                    <li>
                        <a href="#Map">Map</a>
                    </li>
                    <li>
                        <a href="#Game Code">Game Code</a>
                    </li>
                    <li>
                        <a href="#Updates">Updates</a>
                    </li>
                </ul>
                
            </div>
    </nav>
  );
};

