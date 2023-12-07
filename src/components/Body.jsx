import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import cartoon from "../assets/cartoon.jpg";

const Body = () => {
  return (
    <Container className="p-0">
      <Row className="mt-3 mb-3">
        <Col>
          <Card className="px-4">
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              explicabo molestiae esse voluptatibus. Iusto similique animi quae
              laborum minus. Quidem, accusantium in mollitia doloribus eos autem
              minus nisi veniam cumque odio itaque officia, quo reiciendis
              deserunt temporibus modi sint! Minima qui necessitatibus similique
              enim nesciunt sed, fuga exercitationem nemo cupiditate?
            </Card.Body>
            <Card.Img variant="bottom" src={cartoon} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
