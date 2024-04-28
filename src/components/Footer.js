import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div id="footer-bottom" style={{ backgroundColor: "#b70031" }}>
      <div className="container">
        <Row>
          <Col>
            <div className="terms-block">
              <a href="/rules_and_regulations">Rules And Regulations</a> |
              {/* <a href="/">Privacy Policy</a> |<a href="/">Payment Terms</a> | */}
              <a href="/refund_and_cancellation">Refund & Cancellation</a>
              {/* <a href="/">Disclaimer</a> | */}
              {/* <a
                href="/"
                onClick={() => {
                }}
                target="_blank"
              >
                Public Notice
              </a> */}
            </div>
          </Col>
        </Row>
        <hr style={{ margin: "0.5rem 0", color: "yellow", opacity: 0.6 }} />
        <Row>
          <Col>
            <div className="bottom-last-row">
              MIDAS TAJ CLASSES PVT. LTD. © All Rights Reserved.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-5" id="topfooter">
        <Container>
          <Row>
            <Col md={3}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="images/logo.png"
                  alt="MIDAS TAJ CLASSES"
                  style={{ width: "80px" }}
                />
                <h4 className="mt-3">
                  MIDAS TAJ CLASSES
                  <br />
                  PVT. LTD.
                </h4>
                <div
                  className="d-flex"
                  id="FIcon"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Nav.Link
                    as={Link}
                    to="https://www.instagram.com/midas_taj_classes_pvt_ltd/"
                  >
                    <i className="bi bi-instagram"></i>
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="https://www.facebook.com/midastajclasses/"
                  >
                    <i className="bi bi-facebook"></i>
                  </Nav.Link>

                  <Nav.Link as={Link} to="https://twitter.com/midastaj?lang=en">
                    <i className="bi bi-twitter-x"></i>
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="https://www.youtube.com/@MidasTajCoachingClassesPvtLtd"
                  >
                    <i className="bi bi-youtube"></i>
                  </Nav.Link>
                </div>
                {/* <div className="d-flex justify-content-around">
                  <i className="bi bi-whatsapp"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter-x"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-linkedin"></i>
                </div> */}
              </div>
            </Col>
            <Col
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "24px",
              }}
              id="space"
            >
              <div>
                <h4 style={{ color: "var(--yellow-color)" }}>Address</h4>
                <h5 style={{ color: "var(--light-dark-yellow-color)" }}>
                  Head Branch Office
                </h5>
                <p>
                  WARD NO 15, near CHATRAPATI SHIVAJI MAHARAJ CHAWK, Gawande
                  Colony, Sausar, Madhya Pradesh 480106
                </p>
                <h5 style={{ color: "var(--light-dark-yellow-color)" }}>
                  Phone Number
                </h5>
                <p>123-456-7890</p>
                <h5 style={{ color: "var(--light-dark-yellow-color)" }}>
                  Send us a Message
                </h5>
                <p>midastajclasses@gmail.com</p>
              </div>
            </Col>
            <Col
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
              id="disableFlex"
            >
              <div>
                <h4 style={{ color: "var(--yellow-color)" }}>Useful Links</h4>
                <ul>
                  <li>
                    <a href="/aboutUs" style={{ color: "#fff" }}>
                      About MIDAS
                    </a>
                  </li>
                  <li>
                    <a href="/aboutUs" style={{ color: "#fff" }}>
                      Directors Message
                    </a>
                  </li>
                  <li>
                    <a href="/aboutUS" style={{ color: "#fff" }}>
                      MIDAS system
                    </a>
                  </li>
                  <li>
                    <a href="/result" style={{ color: "#fff" }}>
                      Result
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" style={{ color: "#fff" }}>
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
              id="disableFlex"
            >
              <div>
                <h4 style={{ color: "var(--yellow-color)" }}>Courses</h4>
                <ul>
                  <li>
                    <a href="/course1">XI Fresher</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/course2">XII Target/Ultimate</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/course3">VIII Foundation</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/course4">IX Foundation</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/course5">X Foundation</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
