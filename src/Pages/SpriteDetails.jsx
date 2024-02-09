// const spriteArray = [
//     {
//         id: 1,
//         name:,
//         image:,
//         description:,
//     },
//     {
//         id: 2,
//         name:,
//         image:,
//         description:,
//     },
//     {
//         id: 3,
//         name:,
//         image:,
//         description:,
//     },
//     {
//         id: 4,
//         name:,
//         image:,
//         description:,
//     },

// ];

// export default spriteArray;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from "prop-types";





function SpriteDetails({ sprite }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{sprite.name} - Animation</h2>
      <img src={sprite.animations} alt={`Animation for ${sprite.name}`} style={{ maxWidth: '100%' }} />
      <p>{sprite.description}</p>
    </div>
  );
}


SpriteDetails.propTypes = {
  spriteId: PropTypes.number.isRequired, // Assuming spriteId is a number
  sprite: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      animations: PropTypes.string, // Assuming animations is the correct prop, not image
      description: PropTypes.string,
    })
  ).isRequired,
};




export default SpriteDetails;
