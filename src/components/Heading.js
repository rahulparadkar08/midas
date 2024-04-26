import React from "react";

const Heading = ({ normalText, gradientText }) => {
  const normalStyle = {
    color: "black",
  };

  const gradientStyle = {
    background: "-webkit-linear-gradient(90deg, red, darkred)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <h1 className="headingTitleNormal display-3">
      <span style={normalStyle}>{normalText}</span>
      <span style={gradientStyle}>{gradientText}</span>
    </h1>
  );
};

export default Heading;
