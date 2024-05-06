import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const WrongPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        src="./images/notFound.jpg"
        fluid
        style={{ maxWidth: "100% !important", padding: "10px" }}
      />
      <Row style={{ margin: "10px" }}>
        <Button variant="primary">
          {/* Click Here */}
          <Nav.Link as={Link} to={"/"} style={{ color: "white" }}>
            Go Back
          </Nav.Link>
        </Button>{" "}
      </Row>
    </Container>
  );
};

export default WrongPage;
