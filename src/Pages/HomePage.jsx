// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Hero } from '../components/Navbar/Hero/Hero';
import { ImageSlider } from '../components/Navbar/ImageSlider/ImageSlider';
import { About } from '../components/About';
import { Navbar } from '../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageSlider />
      <About />
    </>
  );
};

export default HomePage;