import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "react-bootstrap/Button";

import "./CardComponent.css";

function CardComponent(props) {
  const { backgroundColor, buttonColor, cardTitle, linkRedirect } = props;
  return (
    <Card
      style={{ width: "200px !important", backgroundColor: backgroundColor }}
      id="courseCard"
    >
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant={buttonColor} href={linkRedirect}>
          Click Here
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
