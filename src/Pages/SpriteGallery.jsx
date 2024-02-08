// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SpriteDetails from './SpriteDetails';
import { Navbar } from '../components/Navbar/Navbar';



const sprites = [
  { id: 1, name: 'Sprite 1', description: 'Description 1', animations: 'path/to/animation1.gif' },
  { id: 2, name: 'Sprite 2', description: 'Description 2', animations: 'path/to/animation2.gif' },
  // Add more sprites as needed
];

function SpriteGallery() {
  const [selectedSpriteId, setSelectedSpriteId] = useState(null);

  const handleSelectSprite = (id) => {
    setSelectedSpriteId(id);
  };

  return (
    <div>
      <Navbar/>
      {sprites.map((sprite) => (
        <div key={sprite.id}>
          <h3>{sprite.name}</h3>
          <button onClick={() => handleSelectSprite(sprite.id)}>View Animation</button>
        </div>
      ))}
      {selectedSpriteId && <SpriteDetails spriteId={selectedSpriteId} sprites={sprites} />}
    </div>
  );
}

export default SpriteGallery;
