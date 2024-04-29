import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardComponent.css";
import { CardText, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent(props) {
  const { backgroundColor, buttonColor, cardTitle, linkRedirect, CardText } =
    props;
  return (
    <Card
      style={{ width: "200px !important", backgroundColor: backgroundColor }}
      id="courseCard"
    >
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>{CardText}</Card.Text>
        <Button variant={buttonColor}>
          {/* Click Here */}
          <Nav.Link as={Link} to={linkRedirect} style={{ color: "black" }}>
            Click Here
          </Nav.Link>
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
