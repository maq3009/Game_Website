// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SpriteDetails from './SpriteDetails';

function Sprite({ sprite }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h3>{sprite.name}</h3>
      <button onClick={toggleDetails}>{showDetails ? 'Hide Animation' : 'View Animation'}</button>
      {showDetails && <SpriteDetails sprite={sprite} />}
    </div>
  );
}

export default Sprite;
