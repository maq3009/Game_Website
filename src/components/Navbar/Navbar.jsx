// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className = {styles.Navbar}>
        <img 
                className={styles.menuBtn} 
                src={menuOpen ? "../../assets/nav/closeIcon.png" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC"}
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
        />
        <a className={styles.mainPageTitle} href="/">
            Game Design Document
        </a>
            <div className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                <ul className={styles.menu}>
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

