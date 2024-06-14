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
import { Modal, Button } from "react-bootstrap";
const imagesFirst = [
  "./images/home/student/1.jpg",
  "./images/home/student/2.jpg",
  "./images/home/student/3.jpg",
  "./images/home/student/4.jpg",
  "./images/home/student/5.jpg",
  "./images/home/student/6.jpg",
  "./images/home/student/7.jpg",
  "./images/home/student/8.jpg",
  "./images/home/student/9.jpg",
  "./images/home/student/10.jpg",
  "./images/home/student/11.jpg",
  "./images/home/student/12.jpg",
];

const imagesThird = [
  "./images/home/student/25.jpg",
  "./images/home/student/32.jpg",
  "./images/home/student/26.jpg",
  "./images/home/student/27.jpg",
  "./images/home/student/28.jpg",
  "./images/home/student/29.jpg",
  "./images/home/student/30.jpg",
  "./images/home/student/31.jpg",
  "./images/home/student/33.jpg",
  "./images/home/student/34.jpg",
  "./images/home/student/35.jpg",
  "./images/home/student/36.jpg",
];
const imagesSecond = [
  "./images/home/student/13.jpg",
  "./images/home/student/14.jpg",
  "./images/home/student/15.jpg",
  "./images/home/student/16.jpg",
  "./images/home/student/17.jpg",
  "./images/home/student/18.jpg",
  "./images/home/student/19.jpg",
  "./images/home/student/20.jpg",
  "./images/home/student/21.jpg",
  "./images/home/student/22.jpg",
  "./images/home/student/23.jpg",
  "./images/home/student/24.jpg",
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
            CardText="Student moving from 10th to 11th for IIT-JEE/NEET, including the full syllabus of 11th."
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--green-color)"
            buttonColor="light"
            cardTitle="XII Targte/Ultimate"
            linkRedirect="/course2"
            CardText="For class 12th appearing/passed students targeting the IIT-JEE (Main+Advanced) exam."
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--red-color)"
            buttonColor="warning"
            cardTitle="VIII Foundation"
            linkRedirect="/course3"
            CardText="Building a foundation for upcoming board examinations and preparing for Olympiads."
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--green-color)"
            buttonColor="light"
            cardTitle="IX Foundation"
            linkRedirect="/course4"
            CardText="Building a foundation for upcoming board examinations and preparing for Olympiads."
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CardComponent
            backgroundColor="var(--red-color)"
            buttonColor="warning"
            cardTitle="X Foundation"
            linkRedirect="/course5"
            CardText="Building a foundation for upcoming board examinations and preparing for IIT-JEE/NEET."
          />
        </Col>
      </Row>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="hmodel"
    >
      <Button className="close-button" onClick={props.onHide}>
        <span aria-hidden="true">&times;</span>
      </Button>
      <div closeButton>
        <Modal.Body>
          <Image src="./images/home/hmodel.jpg" fluid />
        </Modal.Body>
      </div>
    </Modal>
  );
}

const Home = () => {
  const [marqueeRef, setMarqueeRef] = useState(null);
  const [modalShow, setModalShow] = useState(true);

  const handleMouseOver = () => {
    if (marqueeRef) marqueeRef.stop();
  };

  const handleMouseOut = () => {
    if (marqueeRef) marqueeRef.start();
  };
  const HomeFirstImages = [
    "./images/home/top1.jpg",
    "./images/home/top3.jpg",
    "./images/home/top2.jpg",
  ];

  const HomeSecondImages = [
    "./images/home/s3.jpg",
    "./images/home/s2.jpg",
    "./images/home/s1.jpg",
    "./images/home/s4.jpg",
  ];
  return (
    <>
      <div className="container" style={{ marginTop: "15px" }}>
        {/* model part start-------------------------------------- */}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* model part end-------------------------------------- */}

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
                        New Batch ( JEE / NEET ){" "}
                        <span style={{ color: "yellow" }}>New</span>
                      </strong>
                      <p style={{ color: "var(--light-yellow-color)" }}>
                        <label>Starting From 17 june 2024</label>
                      </p>
                    </li>
                    <li>
                      <strong>
                        CA / CS <span style={{ color: "yellow" }}>New</span>
                      </strong>
                      <p style={{ color: "var(--light-yellow-color)" }}>
                        <label>ca/cs batch starting from june</label>
                      </p>
                    </li>

                    <li>
                      <strong>
                        MIDAS — Sausar | Seoni | Pandhurna{" "}
                        <span style={{ color: "yellow" }}>New video</span>
                      </strong>
                      <p style={{ color: "var(--light-yellow-color)" }}>
                        <a
                          href="https://www.youtube.com/watch?v=UA36JC4Rl8s"
                          target="_blank"
                        >
                          Click to open
                        </a>
                      </p>
                    </li>

                    <li>
                      <strong>
                        Admit Card for JEE(Advanced) 2024 Examination
                        <span style={{ color: "yellow" }}> New</span>
                      </strong>
                      <p style={{ color: "var(--light-yellow-color)" }}>
                        <a
                          href="https://jeeadv.iitm.ac.in/applicant24/"
                          target="_blank"
                        >
                          Click to open
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
