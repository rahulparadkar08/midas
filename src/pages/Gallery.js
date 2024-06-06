import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import GalleryBox from "../components/GalleryBox.js";
import "./Gallery.css";
function NoAnimationExample() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image URLs and descriptions
  const images2 = [
    {
      url: "images/gallery/202201.jpg",
      description: "Saraswati Puja 2023",
    },
    {
      url: "images/gallery/202202.jpg",
      description: "Saraswati Puja 2023",
    },
    {
      url: "images/gallery/202203.jpg",
      description: "Saraswati Puja 2023",
    },
    {
      url: "images/gallery/202204.jpg",
      description: "Saraswati Puja 2023",
    },
    // Add more image URLs and descriptions as needed
  ];

  const images1 = [
    {
      url: "images/gallery/m20.jpg",
      description: "Patrika Newspaper : 6 june 2024",
    },
    {
      url: "images/gallery/m21.jpg",
      description: "Divya express Newspaper : 6 june 2024",
    },
    {
      url: "images/gallery/m22.jpg",
      description: "The Hitavada English Newspaper : 6 june 2024",
    },
    {
      url: "images/gallery/m23.jpg",
      description: "Navbharat Newspaper : 6 june 2024",
    },
    {
      url: "images/gallery/m24.jpg",
      description: "Miraj Bharat Newspaper : 6 june 2024",
    },
    {
      url: "images/gallery/m30.jpg",
      description: "Jabalpur Newspaper : 6 june 2024",
    },
    {
      url: "images/gallery/m25.jpg",
      description: "",
    },
    {
      url: "images/gallery/m26.jpg",
      description: "",
    },
    {
      url: "images/gallery/m27.jpg",
      description: "",
    },
    {
      url: "images/gallery/m28.jpg",
      description: "",
    },
    {
      url: "images/gallery/m29.jpg",
      description: "",
    },
    {
      url: "images/gallery/m5.jpg",
      description:
        "Ms. Soumya Singh, Civil Judge of Sausar, Visit MIDAS TAJ CLASSES, SAUSAR",
    },
    {
      url: "images/gallery/m6.jpg",
      description:
        "Ms. Soumya Singh, Civil Judge of Sausar, Visit MIDAS TAJ CLASSES, SAUSAR",
    },
    {
      url: "images/gallery/m7.jpg",
      description:
        "Ms. Soumya Singh, Civil Judge of Sausar, Visit MIDAS TAJ CLASSES, SAUSAR",
    },
    {
      url: "images/gallery/m8.jpg",
      description:
        "Ms. Soumya Singh, Civil Judge of Sausar, Visit MIDAS TAJ CLASSES, SAUSAR",
    },
    {
      url: "images/gallery/m9.jpg",
      description:
        "Ms. Soumya Singh, Civil Judge of Sausar, Visit MIDAS TAJ CLASSES, SAUSAR",
    },
    {
      url: "images/gallery/m1.jpg",
      description: "Midas Arrives in Pandhurna! New Enquiry Office Now Open",
    },
    {
      url: "images/gallery/m2.jpg",
      description: "Midas Arrives in Pandhurna! New Enquiry Office Now Open",
    },
    {
      url: "images/gallery/m3.jpg",
      description: "MTSE 2024-25 Sausar Branch",
    },
    {
      url: "images/gallery/m4.jpg",
      description: "MTSE 2024-25 Sausar Branch",
    },
    {
      url: "images/gallery/m10.jpg",
      description: "MTSE 2024-25 Seoni Branch",
    },
    {
      url: "images/gallery/m11.jpg",
      description: "MTSE 2024-25 Seoni Branch",
    },
    {
      url: "images/gallery/m12.jpg",
      description: "Saraswati Puja 2024",
    },
    {
      url: "images/gallery/m13.jpg",
      description: "Saraswati Puja 2024",
    },
    {
      url: "images/gallery/m14.jpg",
      description: "Saraswati Puja 2024",
    },
    {
      url: "images/gallery/m15.jpg",
      description: "Saraswati Puja 2024",
    },
    {
      url: "images/gallery/m16.jpg",
      description: "Saraswati Puja 2024",
    },
    {
      url: "images/gallery/m18.jpg",
      description: "Saraswati Puja 2024",
    },
    {
      url: "images/gallery/m19.jpg",
      description: "Saraswati Puja 2024",
    },
    // Add more image URLs and descriptions as needed
  ];

  return (
    <Tabs
      defaultActiveKey="2024"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 scrollmenu"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tab eventKey="2024" title="2024">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Gallery : </span> 2024
          </h1>
          <GalleryBox images={images1} />
          {/* video */}
          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/UA36JC4Rl8s?si=1NKsUO3l8krkzZyc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Tab>
      <Tab eventKey="2023" title="2023">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 class="headingTitleNormal display-3">
            <span class="headingTitleGradient"> Result : </span> 2023
          </h1>
          <GalleryBox images={images2} />
        </div>
      </Tab>
    </Tabs>
  );
}

const Result = () => {
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <NoAnimationExample />
    </div>
  );
};

export default Result;
