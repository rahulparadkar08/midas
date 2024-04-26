import Card from "react-bootstrap/Card";
import "./Jumbotron.css";
import Heading from "./Heading";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import React from "react";

function WithHeaderStyledExample() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card style={{ backgroundColor: "var(--green-color)" }}>
      <Card.Header>
        <h1
          className="display-3"
          style={{
            fontWeight: "500",
            textAlign: "center",
          }}
          id="titleContanctUS"
        >
          <span>Welcome To </span> <br />
          <span style={{ color: "var(--yellow-color)" }}>
            MIDAS TAJ CLASSES
          </span>
        </h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          MIDAS TAJ Classes Pvt. Ltd. Established with the aim of imparting
          quality education in the field IIT-JEE MAINS & ADVANCE, NEET, PRE-
          FOUNDATION, NTSE, KVPY, Science Olympiads and Math Olympiad. In view
          of the challenging environment, a responsibility is placed is placed
          on the young men & women possessing skills to manage the complex
          business environment. For this, the students of new era are required
          to be well equipped with knowledge, skill and inspiration to lead. We
          at MIDAS TAJ Classes Pvt. Ltd. Aim toward providing quality education,
          which will prove to be meaningful to the student and will give an
          complex business, and service oriented environment. We invite all
          those who share our vision, goal and purpose and will give justice to
          our efforts in building a new cadre of IITIANS & DOCTORS.....
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => setModalShow(true)}
          style={{
            backgroundColor: "var(--yellow-color)",
            color: "var(--green-color)",
          }}
        >
          Read More...
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ImgOverlayExample() {
  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <WithHeaderStyledExample />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ImgOverlayExample;
