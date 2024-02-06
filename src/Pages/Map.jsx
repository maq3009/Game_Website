// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import styles from "./Map.module.css";
import map1 from "../assets/Maps/Screenshot 2023-12-25 005647.png";
import map2 from "../assets/Maps/Screenshot 2023-12-25 005707.png";
import map3 from "../assets/Maps/Screenshot 2023-12-25 005722.png";
import map4 from "../assets/Maps/Screenshot 2023-12-25 005839.png";
import map5 from "../assets/Maps/Screenshot 2023-12-25 005900.png";
import map6 from "../assets/Maps/Screenshot 2023-12-25 005918.png";
import map7 from "../assets/Maps/Screenshot 2023-12-25 005948.png";
import map8 from "../assets/Maps/Screenshot 2023-12-25 005849.png";

const Map = () => {
  const [previewImage, setPreviewImage] = useState(map1);


  return (
    <div className={styles.mapContainer}>
      <Navbar/>
      <div className={styles.MapSiteContent}>
        <h1 className={styles.MapPageTitle}>Map Page</h1>
        <div className={styles.topSection}>
          <img src={map1} alt="Main Map" className={styles.mapMainImage} />
          <img src={previewImage} alt="Preview" className={styles.previewImage} />
        </div>
        <div className={styles.bottomSection}>
          {[map2, map3, map4, map5, map6, map7, map8].map((image, index) => (
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
    </div>
  );
};

export default Map;