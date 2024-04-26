import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import "./Result.css";

// Component to render the content of each tab
function TabContent({ year, imageUrl }) {
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
      <Image src={imageUrl} fluid />
    </div>
  );
}

function NoAnimationExample() {
  // Array of years and corresponding image URLs for tabs
  const tabsData = [
    { year: "2023", imageUrl: "./images/2019.jpg" },
    { year: "2022", imageUrl: "./images/2022.jpg" },
    { year: "2021", imageUrl: "./images/2019.jpg" },
    { year: "2020", imageUrl: "./images/2019.jpg" },
    { year: "2019", imageUrl: "./images/2019.jpg" },
    { year: "2018", imageUrl: "./images/2019.jpg" },
    { year: "2017", imageUrl: "./images/2019.jpg" },
    { year: "2016", imageUrl: "./images/2019.jpg" },
    { year: "2015", imageUrl: "./images/2015.jpg" },
    { year: "2014", imageUrl: "./images/2014.jpg" },
    { year: "2013", imageUrl: "./images/2013.jpg" },

    // Add more years and image URLs as needed
  ];

  return (
    <Tabs
      defaultActiveKey="2023"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 scrollmenu"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Render tabs dynamically */}
      {tabsData.map(({ year, imageUrl }) => (
        <Tab key={year} eventKey={year} title={year}>
          <TabContent year={year} imageUrl={imageUrl} />
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
