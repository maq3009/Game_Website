// import { useState } from 'react'
// import { Navbar } from "./components/Navbar/Navbar";
import styles from './App.module.css';
// import { Hero } from "./components/Navbar/Hero/Hero";
// import { ImageSlider } from "./components/Navbar/ImageSlider/ImageSlider";
// import { About } from "./components/About";
import Bosses from "./Pages/Bosses";
import Characters from "./Pages/Characters";
import Enemies from "./Pages/Enemies";
import GameCode from "./Pages/GameCode";
import GameItems from "./Pages/GameItems";
import MainStory from "./Pages/MainStory";
import Map from "./Pages/Map";
import Music from "./Pages/Music";
import Portfolio from './Pages/Portfolio';
import SideQuests from "./Pages/SideQuests";
import Updates from "./Pages/Updates";
import Weapons from "./Pages/Weapons";
import HomePage from "./Pages/HomePage";
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/weapons",
    element: <Weapons />,
  },
  {
    path: "/updates",
    element: <Updates />,
  },
  {
    path: "/sideQuests",
    element: <SideQuests />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/mainStory",
    element: <MainStory />,
  },
  {
    path: "/gameItems",
    element: <GameItems />,
  },
  {
    path: "/gameCode",
    element: <GameCode />,
  },
  {
    path: "/enemies",
    element: <Enemies />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/bosses",
    element: <Bosses />,
  },
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className = {styles.App}>

        <RouterProvider router={router} />
        
      </div>
    </>
  )
}

export default App




// Complete React Portfolio Website Tutorial | Build & Deploy | Beginners Tutorial