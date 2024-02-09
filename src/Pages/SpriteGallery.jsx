// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import Sprite from "./Sprite";




const sprites = [
  { id: 1, name: 'Sprite 1', description: 'Description 1', animations: 'path/to/animation1.gif' },
  { id: 2, name: 'Sprite 2', description: 'Description 2', animations: 'path/to/animation2.gif' },
  // Add more sprites as needed
];

function SpriteGallery() {
  return (
    <div>
      <Navbar/>
      {sprites.map(sprite => <Sprite key={sprite.id} sprite={sprite} />)}
    </div>
  );
}

export default SpriteGallery;
