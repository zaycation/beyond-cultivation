import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import prp from "../images/purpleflowering.jpeg";
import green from "../images/greenhouse.jpg";
import suns from "../images/sunset.jpg";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="my-3 d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={prp} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="my-3 d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={suns} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            className="my-3 d-flex align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={green} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
