import * as React from 'react';
import './cardImages.css'

export const CardImages = () => {

  return (
    <div>
      <img src="https://www.merchantequip.com/image/?logos=v&height=64"/>
      <img className="coming-soon" src="https://www.merchantequip.com/image/?logos=m&height=64" alt="Not implemented"/>
      <img src="https://www.merchantequip.com/image/?logos=a&height=64"/>
      <img className="coming-soon" src="https://www.merchantequip.com/image/?logos=d&height=64" alt="Not implemented"/>
    </div>
  );
}

export default CardImages