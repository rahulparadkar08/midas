import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        style={{ backgroundColor: "red !important" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="./logo1.png"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Course" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/course1">
                  XI Fresher
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/course2">
                  XII Targte/Ultimate
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/course3">
                  VIII Foundation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/course4">
                  IX Foundation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/course5">
                  X Foundation
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/result">
                Result
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contactUs">
                Contact Us
              </Nav.Link>
            </Nav>
            {/* <Nav
              className="d-flex"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Nav.Link as={Link} to="/applyOnline">
                <Button variant="warning">Apply Online</Button>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/enquiry">
                <Button variant="light">Enquiry</Button>{" "}
              </Nav.Link>
            </Nav> */}
            <div className="d-flex" id="headerIcon">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
