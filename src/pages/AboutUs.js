import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./AboutUs.css";
import CardComponentTeacher from "../components/CardComponentTeacher";

const AboutUs = () => {
  return (
    <div className="container" id="aboutUs">
      <Image src="./images/aboutUs/t1.jpg" style={{ width: "100%" }} rounded />

      <h1
        className="headingTitleNormal display-6"
        style={{ textAlign: "left" }}
      >
        <span className="headingTitleGradient">{"About "}</span>
        {"Midas"}
      </h1>

      {/* <h5 className="display-6">About Midas</h5> */}
      <p>
        MIDAS TAJ Classes Pvt. Ltd. Established with the aim of imparting
        quality education in the field IIT-JEE MAINS & ADVANCE, NEET, PRE-
        FOUNDATION, NTSE, KVPY, Science Olympiads and Math Olympiad. In view of
        the challenging environment, a responsibility is placed is placed on the
        young men & women possessing skills to manage the complex business
        environment. For this, the students of new era are required to be well
        equipped with knowledge, skill and inspiration to lead. We at MIDAS TAJ
        Classes Pvt. Ltd. Aim toward providing quality education, which will
        prove to be meaningful to the student and will give an complex business,
        and service oriented environment. We invite all those who share our
        vision, goal and purpose and will give justice to our efforts in
        building a new cadre of IITIANS & DOCTORS.
      </p>

      <div>
        <h1
          className="headingTitleNormal display-6"
          style={{ textAlign: "left" }}
        >
          <span className="headingTitleGradient">{"Message from "}</span>
          {"Director"}
        </h1>

        {/* <h5 className="display-6">Message From Director </h5> */}
        <Row>
          <Col sm={7}>
            <p>
              Only a father can understand the level of anxiety of a father. I
              am sure, like your children, you yourself are also on a cross road
              and it has become quite a difficult to make a selection of the
              right part that cab Lead to a right destination, that, is full of
              worldly achievements and satisfaction of fulfillment. All our life
              efforts. Our sacrifice and our hard work have to a promise a
              brighter career to our child. We have dreams for our children and
              we purse to bring them into reality. However, the present day
              situation is making our journey a difficult task. Dear student, As
              you stand upon the threshold that would mark the beginning of your
              career,many important decisions await your consideration. Along
              with hard work and intelligence, another crucial factor that would
              play a decisive role in your success is availing of the right
              guidance and being in the company of like-minded people. This is
              where the choice of the best coaching institute to realize your
              dream of a good rank in IIT-JEE MAINS & ADVANCE, NEET, PRE-
              FOUNDATION, NTSE, KVPY, Science Olympiads and Math Olympiads comes
              into play. IIT-JEE is not, as believed by many, a difficult
              examination albeit a different and hence requires a motivated and
              efficient approach with our experience and results, we feel
              confident that PACE offers the perfect balance of elite faculty,
              student supporting a healthy, compretitive environment to make
              your time here a memorable one. I believe institute are known by
              our best faculties.
              <br /> Founder & Director <br />
              Er. Vikash Kr. Singh
            </p>
          </Col>
          <Col sm={5}>
            <Image src="./images/aboutUs/vsir.jpeg" style={{ width: "100%" }} />
          </Col>
        </Row>
        <div id="faculties">
          <h1
            className="headingTitleNormal display-6"
            style={{ textAlign: "left" }}
          >
            <span className="headingTitleGradient">{"Team "}</span>
            {"MIDAS"}
          </h1>
          {/* <h5 className="display-6">Our Faculties</h5> */}
          <div
            style={{
              backgroundColor: "var(--light-yellow-color)",
              padding: "40px 20px",
            }}
          >
            <CardComponentTeacher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
