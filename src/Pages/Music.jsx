// eslint-disable-next-line no-unused-vars
import React from 'react';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import { Navbar } from '../components/Navbar/Navbar';
import styles from "./Music.module.css";
import Incubus1  from "../assets/Music/ab67616d00001e02326f79385d6287bb8052cffd.jpg";
// import Incubus2 from "../assets/Music/a03f3aa1-3647-48b5-b7dd-3ab1b776db32_984x984.jpg";
// import Incubus3 from "../assets/Music/ab67616d00001e02599ffabb377d3ea534a7f710.jpg";
// import Incubus4 from "../assets/Music/ab67616d00001e02f485a27298fbd17d868f7565.jpg";
// import Incubus5 from "../assets/Music/ab67616d0000b273289320ef78f164a472698926.jpg";
// import Incubus6 from "../assets/Music/Annamolly.JPG";
// import Incubus7 from "../assets/Music/R-603513-1556796679-7934.jpg";
// import Incubus8 from "../assets/Music/ab67616d00001e02599ffabb377d3ea534a7f710.jpg";

import soundsBtnImg from "../assets/nav/icons8-hamburger-menu-100.png";




  // const [songs] = useState([  PLAYLIST***************
  //   {
  //     title: "Nice to Know You",
  //     artist: "Incubus",
  //     img_src: {Incubus1},
  //     src: "https://archive.org/download/11-are-you-in/01NiceToKnowYou.mp3",
  //   },
  //   {
  //     title: "Just A Phase",
  //     artist: "Incubus" ,
  //     img_src: {Incubus2},
  //     src: "https://archive.org/download/11-are-you-in/04JustAPhase.mp3" ,
  //   },
  //   {
  //     title: "Blood On The Ground" ,
  //     artist: "Incubus",
  //     img_src: {Incubus3},
  //     src: "https://archive.org/download/11-are-you-in/06BloodOnTheGround.mp3",
  //   },
  //   {
  //     title: "Echo",
  //     artist: "Incubus",
  //     img_src: {Incubus4},
  //     src: "https://archive.org/download/11-are-you-in/09Echo.mp3",
  //   },
  //   {
  //     title: "Have You Ever",
  //     artist: "Incubus",
  //     img_src: {Incubus5},
  //     src: "https://archive.org/download/11-are-you-in/10HaveYouEver.mp3",
  //   },
  //   {
  //     title: "Under My Umbrella",
  //     artist: "Incubus",
  //     img_src: {Incubus6} ,
  //     src: "https://archive.org/download/11-are-you-in/12UnderMyUmbrella.mp3",
  //   },
  //   {
  //     title: "Speak Free",
  //     artist: "Incubus",
  //     img_src: {Incubus7},
  //     src: "https://archive.org/download/11-are-you-in/Incubus%20-%20Speak%20Free.mp3",
  //   },
  //   {
  //     title: "Glass",
  //     artist: "Incubus",
  //     img_src: {Incubus8},
  //     src: "https://archive.org/download/11-are-you-in/Incubus%20-%20Glass.mp3",
  //   },

  // ]);




  const Music = () => {


    const renderButtons = () => {  {/* Function to render out the Buttons */}
      let rows = [];
      for (let i = 0; i < 6; i++) { // 6 rows
        let row = [];
        for (let j = 0; j < 22; j++) { // 22 columns
          row.push(
            <button key={`button-${i}-${j}`} className={styles.musicButton}>
              <img src={soundsBtnImg} alt="" style={{ width: '10px', height: '10', marginRight: '5px'}} />
              Btn {i * 22 + j + 1}</button>);
        }
        rows.push(<div key={`row-${i}`} className={styles.buttonRow}>{row}</div>);
      }
      return rows;
    };


  return (
    <div className={styles.App}>
      <Navbar />
      <h1 className={styles.pageTitle}>Music Page</h1>
       <div className={styles.container}> {/* Container for the PreviewImage and the AudioPlayer */}
        <div className={styles.playerContainer}>
          <img 
          src={Incubus1}
          className={styles.previewImage}/>
          <div className={styles.audioPlayer}>
            <AudioPlayer />
          </div>
        </div>
        <div className={styles.buttonsContainer}>
            {renderButtons()}
        </div>
      </div>
    </div>
  );
}

export default Music;