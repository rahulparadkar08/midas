import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./ContactUs.css"; // Import your CSS file for additional styling
import ListGroup from "react-bootstrap/ListGroup";

const ContanctInfo = () => {
  return (
    <Container className="contact-icons-container">
      <Row>
        <Col>
          <div className="contact-icon-item">
            <i className="bi bi-phone-vibrate contact-icon"></i>
          </div>
          <row>
            <h2 className="contact-title" style={{ textAlign: "center" }}>
              Call (08:00 AM to 08:00 PM)
            </h2>{" "}
            <p className="contact-info">
              +91-9905451200, 07165-220666, +91-7004455253{" "}
            </p>
          </row>
        </Col>
        <Col>
          <div className="contact-icon-item">
            <i className="bi bi-envelope contact-icon"></i>
          </div>
          <row>
            <h2 className="contact-title" style={{ textAlign: "center" }}>
              Email
            </h2>
            <p className="contact-info">midastajclasses@gmail.com</p>
          </row>
        </Col>
        <Col style={{ borderRight: "none" }}>
          <div className="contact-icon-item">
            <i className="bi bi-geo-alt contact-icon"></i>
          </div>
          <row>
            <h2 className="contact-title" style={{ textAlign: "center" }}>
              Address
            </h2>
            <p className="contact-info">
              Chatrapati Shivaji Maharaj Chawk, Sausar ( M.P. ) 480106
            </p>
          </row>
        </Col>
      </Row>
    </Container>
  );
};

function KitchenSinkExample({ src, title, text, listItems }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Image src={src} rounded />
      <Card.Body style={{ color: "black" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {listItems.map((item, index) => (
          <ListGroup.Item key={index}>
            <i
              class="bi bi-telephone-fill"
              style={{ color: "var(--red-color)" }}
            ></i>{" "}
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <ContanctInfo />
        <div>
          <Row style={{ padding: "30px 0px 0px 0px" }}>
            <Col
              className="d-flex justify-content-center"
              style={{ alignItems: "center" }}
            >
              <hr className="horizontal-line" />
              <span className="header-text">
                <h1 className="headingTitleNormal display-6">
                  <span className="headingTitleGradient">
                    {"ADMISSION OFFICE "}
                  </span>
                  {"& CLASSROOM CAMPUSES"}
                </h1>
              </span>
              <hr className="horizontal-line" />
            </Col>
          </Row>
          <Row id="branchDiv" style={{ padding: "0px 0px 30px 0px" }}>
            <Col>
              <KitchenSinkExample
                src="./images/home/branch1.jpg"
                title="Sausar (Head Branch)"
                text="WARD NO 15, near CHATRAPATI SHIVAJI MAHARAJ CHAWK, Gawande Colony, Sausar, Madhya Pradesh 480106"
                listItems={["7004455253, 07165-220666"]}
              />
            </Col>
            <Col>
              <KitchenSinkExample
                src="./images/home/branch2.jpg"
                title="Seoni"
                text="Bangana Building, First and Second Floor, Above Axis Bank, Main Road, Seoni Bypass Road, Seoni - 480661 (Opposite Kacheri Chouk)"
                listItems={["9993184435, 9993174435"]}
              />
            </Col>
            <Col>
              <KitchenSinkExample
                src="./images/home/branch3.jpg"
                title="Pandhurna"
                text="2nd floar near pop club, front of shankar mandhir,shankar nagar,main road Pandhurna, Madhya Pradesh ( 480334 )"
                listItems={["7903175271, 7004455253"]}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
