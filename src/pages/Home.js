import React from "react";
import CarouselAnySize from "../components/CarouselAnySize";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import CardComponent from "../components/CardComponent";
import Heading from "../components/Heading";
import LogoSliderFirst from "../components/LogoSliderFirst";
import LogoSliderSecond from "../components/LogoSliderSecond";
import { Image } from "react-bootstrap";
import { useState } from "react";

const imagesFirst = [
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
  "./images/home/student/6.jpg",
  "./images/home/student/7.jpg",
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
];

const imagesThird = [
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
  "./images/home/student/6.jpg",
  "./images/home/student/7.jpg",
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
];
const imagesSecond = [
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
  "./images/home/student/6.jpg",
  "./images/home/student/7.jpg",
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
];

function CoursesAndFees() {
  return (
    <div className="container" id="courses">
      <h1 className="headingTitleNormal display-3">
        <span className="headingTitleGradient">{"Courses And "}</span>
        {"Fees"}
      </h1>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--red-color)"
            buttonColor="warning"
            cardTitle="XI Fresher"
            linkRedirect="/course1"
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--green-color)"
            buttonColor="light"
            cardTitle="XII Targte/Ultimate"
            linkRedirect="/course2"
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--red-color)"
            buttonColor="warning"
            cardTitle="VIII Foundation"
            linkRedirect="/course3"
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--green-color)"
            buttonColor="light"
            cardTitle="IX Foundation"
            linkRedirect="/course4"
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--red-color)"
            buttonColor="warning"
            cardTitle="X Foundation"
            linkRedirect="/course5"
          />
        </Col>
      </Row>
    </div>
  );
}

const Home = () => {
  const [marqueeRef, setMarqueeRef] = useState(null);

  const handleMouseOver = () => {
    if (marqueeRef) marqueeRef.stop();
  };

  const handleMouseOut = () => {
    if (marqueeRef) marqueeRef.start();
  };
  const HomeFirstImages = [
    "./images/home/c1.jpg",
    "./images/home/c1.jpg",
    "./images/home/c1.jpg",
  ];

  const HomeSecondImages = [
    "./images/home/s1.jpg",
    "./images/home/s2.jpg",
    "./images/home/s1.jpg",
  ];
  return (
    <>
      <div className="container" style={{ marginTop: "15px" }}>
        <CarouselAnySize images={HomeFirstImages} />

        {/* notification start */}
        <div style={{ marginTop: "20px" }}>
          <Row className="secondCorousol">
            <Col sm={4} style={{ marginBottom: "15px" }}>
              <div className="whatsnew">
                <h2 className="heading2">Notification</h2>
                <marquee
                  direction="up"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  ref={(ref) => setMarqueeRef(ref)}
                >
                  <ul
                    id="Ul1"
                    className="servicesboxcontainer"
                    style={{
                      listStyleType: "none",
                      paddingLeft: "0rem",
                    }}
                  >
                    <li>
                      <strong>
                        05 April 2024 <span>New</span>
                      </strong>
                      <p>
                        <a
                          href="https://www.pnbindia.in/downloadprocess.aspx?fid=iIiR5N+tWP2qZjDFBVudhQ=="
                          target="_blank"
                        >
                          JEE Main 2024 (Session-2) Answer Key & Paper Solutions
                        </a>
                      </p>
                    </li>
                    <li>
                      <strong>
                        03 February 2024 <span>New</span>
                      </strong>
                      <p>
                        <a
                          href="https://www.pnbindia.in/downloadprocess.aspx?fid=riOvyS1kUecqaaAfNLjeJQ=="
                          target="_blank"
                        >
                          JEE-Main 2024 Test Papers with solutions book
                          accessible to all! SHOP NOW on
                        </a>
                      </p>
                    </li>
                    <li>
                      <strong>
                        11 January 2024 <span>New</span>
                      </strong>
                      <p>
                        <a
                          href="https://www.pnbindia.in/downloadprocess.aspx?fid=Enp+eT/uvrzB3IUXcOYa9A=="
                          target="_blank"
                        >
                          JEE-Main 2024 Test Papers with solutions book
                          accessible to all! SHOP NOW on
                        </a>
                      </p>
                    </li>
                  </ul>
                </marquee>
              </div>
            </Col>
            <Col sm={8}>
              <CarouselAnySize images={HomeSecondImages} />
            </Col>
          </Row>
        </div>
        {/* notification end */}
      </div>

      {/* courses section start */}
      <div
        style={{
          backgroundColor: "var(--light-yellow-color)",
          padding: "40px 0px",
        }}
      >
        <CoursesAndFees />
      </div>
      {/* courses section end */}
      <br />
      {/* transforming life content start */}
      <div
        style={{
          backgroundColor: "var(--light-yellow-color)",
          padding: "40px 0px",
        }}
      >
        <div className="container">
          <h1 className="headingTitleNormal display-3">
            <span className="headingTitleGradient">
              {"Transfroming lives since : "}
            </span>
            {"2013"}
          </h1>
          <div>
            <Image src="./images/home/8year.jpg" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      {/* transforming life content end */}

      {/* horizital gallery start */}
      <div style={{ padding: "20px 0px 0px 0px" }}>
        <h1 className="headingTitleNormal display-3">
          <span className="headingTitleGradient">{"Midasians : "}</span>
          {"Dreamers to Achievers "}
          {"year"}
        </h1>

        <LogoSliderFirst images={imagesFirst} />
        <LogoSliderSecond images={imagesSecond} />
        <LogoSliderFirst images={imagesThird} />
      </div>
      {/* horizital gallery end */}
    </>
  );
};

export default Home;
