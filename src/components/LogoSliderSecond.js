import React from "react";
import "./LogoSliderSecond.css"; // Import CSS file containing styles and animation

const LogoSliderSecond = ({ images }) => {
  return (
    <div className="logos-second">
      <div className="logo_items-second">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`logo-${index}`} />
        ))}
      </div>
      <div className="logo_items-second">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`logo-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoSliderSecond;
