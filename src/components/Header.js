import React from "react";
import { Link } from "react-router-dom";

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
              src="./logo.png"
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
              <Nav.Link as={Link} to="/course">
                Course
              </Nav.Link>
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
            <Nav
              className="d-flex"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Nav.Link as={Link} to="/applyOnline">
                <Button variant="warning">Apply Online</Button>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/enquiry">
                <Button variant="light">Enquiry</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
