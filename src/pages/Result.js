import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import "./Result.css";

// Component to render the content of each tab
function TabContent({ year, imageUrls }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--light-yellow-color)",
        paddingBottom: "20px",
      }}
    >
      <h1 className="headingTitleNormal display-3">
        <span className="headingTitleGradient"> Result : </span> {year}
      </h1>
      {/* Mapping through imageUrls to render multiple images */}
      {imageUrls.map((url, index) => (
        <Image key={index} src={url} fluid style={{ marginBottom: "10px" }} />
      ))}
    </div>
  );
}

function NoAnimationExample() {
  // Array of years and corresponding image URLs for tabs
  const tabsData = [
    {
      year: "2024",
      imageUrls: [
        "./images/result/2024-08.jpg",
        "./images/result/2024-07.jpg",
        "./images/result/2024-05.jpg",
        "./images/result/2024-06.jpg",
        "./images/result/2024-01.jpg",
        "./images/result/2024-02.jpg",
        "./images/result/2024-03.jpg",
        "./images/result/2024-04.jpg",
      ],
    },
    {
      year: "2023",
      imageUrls: [
        "./images/result/2023-01.jpg",
        "./images/result/2023-02.jpg",
        "./images/result/2023-03.jpg",
        "./images/result/2023-04.jpg",
        "./images/result/2023-05.jpg",
      ], // Add multiple image URLs for 2023
    },
    {
      year: "2022",
      imageUrls: ["./images/result/2022-01.jpg", "./images/result/2022-02.jpg"],
    },
    { year: "2021", imageUrls: ["./images/result/2021.jpg"] },
    { year: "Our_Achievers", imageUrls: ["./images/result/old.jpg"] },
    // Add more years and image URLs as needed
  ];

  return (
    <Tabs
      defaultActiveKey="2024"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 scrollmenu"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Render tabs dynamically */}
      {tabsData.map(({ year, imageUrls }) => (
        <Tab key={year} eventKey={year} title={year}>
          <TabContent year={year} imageUrls={imageUrls} />
        </Tab>
      ))}
    </Tabs>
  );
}

const Result = () => {
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <NoAnimationExample />
    </div>
  );
};

export default Result;
