import React from "react";
import image1 from '../img/guillaume.jpg';
import image2 from '../img/matthieu.jpg';
import image3 from '../img/issal.jpg';
import image4 from '../img/thomas.jpg';
import image5 from '../img/stephanne.jpg';
import image6 from '../img/geoffroy.jpg';

function ImageGallery() {
  return (
    <div>
      <div className="grid">
        <img src={image1} alt="Sample" />
        <img src={image2} alt="Sample" />
        <img src={image3} alt="Sample" />
        <img src={image4} alt="Sample" />
        <img src={image5} alt="Sample" />
        <img src={image6} alt="Sample" />
      </div>
    </div>
  );
}

export default ImageGallery;
