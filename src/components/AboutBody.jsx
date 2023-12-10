import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutBody = () => {
  return (
    <Container className="body-container">
      <Row>
        <Col className="py-5">
          <Card className="px-4">
            <Card.Body className="lh-lg font-monospace fs-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              explicabo molestiae esse voluptatibus. Iusto similique animi quae
              laborum minus. Quidem, accusantium in mollitia doloribus eos autem
              minus nisi veniam cumque odio itaque officia, quo reiciendis
              deserunt temporibus modi sint! Minima qui necessitatibus similique
              enim nesciunt sed, fuga exercitationem nemo cupiditate?
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutBody;
