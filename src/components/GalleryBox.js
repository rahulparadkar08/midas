import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./GalleryBox.css";
const GalleryBox = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="gallery-item">
            <img
              src={image.url}
              alt={image.description}
              className="img-fluid"
              onClick={() => handleImageClick(image)}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="md">
        <Modal.Header>
          <Modal.Title>
            {selectedImage && selectedImage.description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage.url}
              alt={selectedImage.description}
              className="img-fluid"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GalleryBox;
