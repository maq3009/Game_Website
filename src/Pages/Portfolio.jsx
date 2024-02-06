// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from "react";
import { Navbar } from '../components/Navbar/Navbar';
import styles from "./Portfolio.module.css";
import image1 from "../assets/Portfolio/20eb5e26-5b86-46f7-a8d0-83f7a44aa5b2.png";
import image2 from "../assets/Portfolio/Drawing 2.gif";
import image3 from "../assets/Portfolio/JPEGofmyLOGO.webp";
import image4 from "../assets/Portfolio/Screenshot_20211103-104407_Instagram.jpg";
import image5 from "../assets/Portfolio/Screenshot_20211103-104412_Instagram.jpg";
import image6 from "../assets/Portfolio/Screenshot_20211103-104447_Instagram.jpg";
import image7 from "../assets/Portfolio/Screenshot_20211103-104453_Instagram.jpg";
import image8 from "../assets/Portfolio/Screenshot_20211103-104419_Instagram.jpg";
import image9 from "../assets/Portfolio/Screenshot_20211103-104459_Instagram.jpg";
import image10 from "../assets/Portfolio/Screenshot_20211103-104504_Instagram.jpg";
import image11 from "../assets/Portfolio/Screenshot_20211124-231139_Photos.jpg";
import image12 from "../assets/Portfolio/Screenshot_20211124-231743_Photos.jpg";
import image13 from "../assets/Portfolio/Screenshot_20211124-231818_Photos.jpg";
import image14 from "../assets/Portfolio/Screenshot_20211124-231831_Photos.jpg";





const Portfolio = () => {
  const [previewImage, setPreviewImage] = useState(image1);

  return (
    <section>
      <Navbar/>
      <h1 className={styles.portfolioPageTitle}>Portfolio</h1>
          <div>
              <div className={styles.topSection}>
                <img src={previewImage} alt="Preview" className={styles.previewImage} />
              </div>
              <div className={styles.bottomSection}>
                {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`map ${index + 2}`}
                    className={styles.sliderImage}
                    onClick={() => setPreviewImage(image)}
                    />
                ))}
              </div>    
          </div>
    </section>

  );
};

export default Portfolio;