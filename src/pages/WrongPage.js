import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WrongPage = () => {
  return (
    <Container>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col xs={12} md={6}>
          <h1 className="text-center">Working</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default WrongPage;
