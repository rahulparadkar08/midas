import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import "./Gallery.css";
function NoAnimationExample() {
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
      <Tab eventKey="2023" title="2023">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Gallery : </span> 2023
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2022" title="2022">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2022
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2021" title="2021">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2021
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2020" title="2020">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2020
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2019" title="2019">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2019
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2018" title="2018">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2018
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2017" title="2017">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2017
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2016" title="2016">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2015
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2015" title="2015">
        Tab content for 2015
      </Tab>
      <Tab eventKey="2014" title="2014">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2024
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
      <Tab eventKey="2013" title="2013">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2013
          </h1>
          <Image src="./2.jpg" fluid />;
        </div>
      </Tab>
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
