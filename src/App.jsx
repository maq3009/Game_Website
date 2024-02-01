// import { useState } from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import styles from './App.module.css';
import { Hero } from "./components/Navbar/Hero/Hero";
import { ImageSlider } from "./components/Navbar/ImageSlider/ImageSlider";
import { About } from "./components/About";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className = {styles.App}>
        <Navbar />
        <Hero />
        <ImageSlider />
        <About />
      </div>
    </>
  )
}

export default App




// Complete React Portfolio Website Tutorial | Build & Deploy | Beginners Tutorial