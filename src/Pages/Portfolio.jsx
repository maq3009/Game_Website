// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar';

const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <h1>Portfolio Page</h1>
      <Link to="/portfolio">Portfolio</Link>{/* Content goes here */}
    </div>
  );
};

export default Portfolio;