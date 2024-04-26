import React from "react";
import "./LogoSliderFirst.css"; // Import CSS file containing styles and animation

const LogoSliderFirst = ({ images }) => {
  return (
    <div className="logos">
      <div className="logo_items">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`logo-${index}`} />
        ))}
      </div>
      <div className="logo_items">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`logo-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoSliderFirst;
