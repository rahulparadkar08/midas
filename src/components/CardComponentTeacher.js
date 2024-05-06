import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./CardComponentTeacher.css";
function CardComponentTeacher() {
  const dummyData = [
    {
      id: 1,
      title: "Kishan Kr. Singh",
      image: "./images/aboutUs/t5.jpg",
      text: "Mr.Kishan Singh is the Administrative Director of Midas Taj coaching classes. He has completed his MBA in Marketing/ H.R from Nagpur university. He is having 8+ years of management experience. Mr. Kishan is responsible for all the management related activities of the Institute.",
      subtitle: "Administrative Director",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 2,
      title: "Satish Kr. Vishwakarma",
      image: "./images/aboutUs/t4.jpg",
      text: "Mr Satish is an Admin Manager/PRO in Midas Taj coaching classes. He has completed his M.B.A in Marketing/Operations from Nagpur University. He is having 8+ years of marketing and operations experience. Mr. Satish is responsible for marketing related activities",
      subtitle: "Regional Branch Head",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 3,
      title: "Naresh Kr. Rawani",
      image: "./images/aboutUs/t7.jpg",
      text: "Mr..Naresh Rawani is the Finance Officer of Midas Taj coaching classes. He has completed his M.com in Accounts from IGNU. He is having 4+ years of management experience. Mr Naresh is responsible for all the Finance related activities of the Institute.",
      subtitle: "Finance related activities",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 4,
      title: "Rohit Kr. Singh",
      image: "./images/aboutUs/t6.jpg",
      text: "Mr Rohit is a Academic Head and Biology Lecturer in Midas Taj coaching classes. He has completed his M.Sc in Zoology from Ranchi University. He is having 12+ years of teaching experience in teaching Biology subject to NEET and AIIMS and medical students.",
      subtitle: "Academic Head & Biology Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 5,
      title: "Randhir Kumar",
      image: "./images/aboutUs/t13.jpg",
      text: "Mr Randhir Kumar is a Chemistry Lecturer in Midas Taj coaching classes. He has completed his B.Tech in Electrical Engineering from Rajasthan Technical University, Kota. He is having 7+ years of teaching experience in IIT JEE Mains and Advance, NEET.",
      subtitle: "Chemistry Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 6,
      title: "Banavathu Kishore",
      image: "./images/aboutUs/t14.jpg",
      text: "Mr Banavathu Kishore is a Chemistry Lecturer in Midas Taj coaching classes. He has completed his M.Sc. in Chemistry from IIT Bombay. He is having 12+ years of teaching experience in IIT JEE Mains and Advance, NEET.",
      subtitle: "Academic Head & Chemistry Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 7,
      title: "Sachin Singh Chauhan",
      image: "./images/aboutUs/t11.jpg",
      text: "Mr Sachin Singh Chauhan is a Mathematics Lecturer in Midas Taj coaching classes. He has completed his M.Sc in Mathemtics from IIT, Guwahati (Assam). He is having 10+ years of teaching experience in subject to IIT, JEE and ADVANCE.",
      subtitle: "Mathematics Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 8,
      title: "Manoj Kumar",
      image: "./images/aboutUs/t22.jpg",
      text: "Mr Manoj Kumar is a Academic Head and Mathematics Lecturer in Midas Taj coaching classes. He has completed his M.Sc in Physics from VBU Hazaribhag. He is having 8+ years of teaching experience in Mathematics subject.",
      subtitle: "Academic Head & Mathematics Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 9,
      title: "Kanchan Mandal",
      image: "./images/aboutUs/t18.jpg",
      text: "Mr Kanchan Mandal is a Mathematics Lecturer in Midas Taj coaching classes. He has completed his M.Sc in Mathematics from IIT, Guwahati (Assam). He is having 8+ years of teaching experience in subject to IIT, JEE and ADVANCE.",
      subtitle: "Mathematics Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 10,
      title: "Saket Singh",
      image: "./images/aboutUs/t12.jpg",
      text: "Mr Saket is a Mathematics  Lecturer in Midas Taj coaching classes. He has completed his B.Sc in Mathematics from Vinoba Bhave University, Jharkhand and B.Ed from CRSU Jind. He is having 8+ years of teaching experience in Mathematics subject.      ",
      subtitle: "Mathematics Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 11,
      title: "Mihir Choudhary",
      image: "./images/aboutUs/t15.jpg",
      text: "Mr. Mihir Choudhary is a Mathematics Lecturer at Midas Taj Coaching Classes. He has completed his B.Tech. from MANIT Bhopal, M.P. He has over 2 years of teaching experience in subjects related to IIT, JEE, and ADVANCE.",
      subtitle: "Mathematics Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 12,
      title: "Suraj Trivedi",
      image: "./images/aboutUs/t27.jpg",
      text: "Mr. Suraj Trivedi is a Mathematics Lecturer at Midas Taj Coaching Classes. He has completed his M.Sc. and M.Phil from IIT Bombay. He has over 5 years of teaching experience in IIT JEE Mains and Advanced, as well as NEET.",
      subtitle: "Mathematics Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 13,
      title: "Koushik Roy",
      image: "./images/aboutUs/t8.jpg",
      text: "Mr. Koushik Roy is a Chemistry Lecturer at Midas Taj Coaching Classes. He has completed his M.Sc. in Chemistry from IIT Madras. He has over 3 years of teaching experience in IIT JEE Mains and Advanced, as well as NEET.",
      subtitle: "Chemistry Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 14,
      title: "Yogesh Jadhav",
      image: "./images/aboutUs/t19.jpg",
      text: "Mr. Yogesh Jadhav is a Chemistry Lecturer at Midas Taj Coaching Classes. He has completed his M.Sc. in Chemistry from IIT Madras. He has over 3 years of teaching experience in IIT JEE Mains and Advanced, as well as NEET.",
      subtitle: "Chemistry Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 15,
      title: "Anurag kumar",
      image: "./images/aboutUs/t24.jpg",
      text: "Mr. Anurag Kumar is a Physics Lecturer at Midas Taj Coaching Classes. He has completed his BTech from IIT Kharagpur and has over 5 years of teaching experience in IIT JEE Mains and Advanced, as well as NEET.",
      subtitle: "Physics Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 16,
      title: "Vinay Kr. Malviy",
      image: "./images/aboutUs/t16.jpg",
      text: "Mr. Vinay Kr. Malviy is a Biology Lecturer in Midas Taj coaching classes. He has Completed his M.SC in Botany from Govt. BHEL College, Bhopal (MP). He is Having 6+ Years of teaching experience in Biology Subject.",
      subtitle: "Biology Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 17,
      title: "Sachin Choure",
      image: "./images/aboutUs/t20.jpg",
      text: "Mr Sachin Choure is a Physics Lecturer in Midas Taj coaching classes. He has completed his B.Tech. in from UEC,M.P. He is having 2+ years of teaching experience in subject to IIT, JEE and ADVANCE.",
      subtitle: "Physics Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 18,
      title: "Dr.Nidhi Upgade",
      image: "./images/aboutUs/t10.jpg",
      text: "Dr. Nidhi Upgade is a Social Science Lecturer in Midas Taj coaching classes. She has completed her BDS from SAIMS,Indore,M.P. she is having 2+ years of teaching experience in Social Science subject.",
      subtitle: "Social Science Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 19,
      title: "Abhishek Verma",
      image: "./images/aboutUs/t9.jpg",
      text: "Mr Abhishek Verma is a Social Science Lecturer in Midas Taj coaching classes. He has completed his M.A in Poltical Science from CIMTI, Ridhora,M.P, M.Ed, B.A( Hindi ), D.EL.ED.  He is having 8+ years of teaching experience in Social Science subject.",
      subtitle: "Social Science Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 20,
      title: "Trapti Rajpoot",
      image: "./images/aboutUs/t17.jpg",
      text: "Ms Trapti Rajpoot is a Biology Lecturer in Midas Taj coaching classes. She has Completed her B.SC in Microbiology from Rani Durgavati Vishwavidyalaya, Jabalpur (MP) & B.Ed. from Chhinwada University. She is Having 2+ Years of teaching experience in Biology Subject.",
      subtitle: "Biology Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 21,
      title: "Vaibhav Arun Dongre",
      image: "./images/aboutUs/t21.jpg",
      text: "Mr Vaibhav Arun Dongre is a Mental Ability, English Grammar & Social Science in Midas Taj coaching classes. He has completed his Engineering in Electrical and Electronic from LNCT Bhopal, Bhopal. He is having 4+ years of teaching experience in NTSE",
      subtitle: "Social Science Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 22,
      title: "Yash Lonare",
      image: "./images/aboutUs/t23.jpg",
      text: "Mr Yash Lonare is a Physics Lecturer in Midas Taj coaching classes. He has completed his B.Tech. in from UEC, Ujjain,M.P. He is having 2+ years of teaching experience in subject to IIT, JEE and ADVANCE.",
      subtitle: "Physics Lecturer",
      backgroundColor: "var(--red-color)",
    },
    {
      id: 23,
      title: "Sakshi Singh",
      image: "./images/aboutUs/t25.jpg",
      text: "Ms. Sakshi Singh is a Chemistry Lecturer at Midas Taj Coaching Classes. She has completed her M.Sc. in Chemistry from RTMNU, Nagpur. She has over 3 years of teaching experience in Foundation courses. ",
      subtitle: "Chemistry Lecturer",
      backgroundColor: "var(--green-color)",
    },
    {
      id: 24,
      title: "Vishal Pratap Singh",
      image: "./images/aboutUs/t26.jpg",
      text: "Mr. Vishal Pratap Singh is a Social Science Lecturer at Midas Taj Coaching Classes. He has completed his MBA and B.Ed. from Delhi University. He has over 8 years of teaching experience in Foundation courses",
      subtitle: "Social Science Lecturer",
      backgroundColor: "var(--red-color)",
    },

    // Add more dummy data as needed
  ];

  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {dummyData.map((data) => (
          <Col key={data.id} className="mb-4" style={{ textAlign: "center" }}>
            <Card
              className="h-100"
              style={{
                paddingTop: "15px",
                backgroundColor: data.backgroundColor,
              }}
              id="teacherCard"
            >
              <Image
                src={data.image}
                roundedCircle
                style={{
                  width: "50%",
                  margin: "auto",
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "var(--yellow-color)" }}>
                  {data.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.subtitle}
                </Card.Subtitle>
                <Card.Text style={{ color: "white" }}>{data.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardComponentTeacher;
