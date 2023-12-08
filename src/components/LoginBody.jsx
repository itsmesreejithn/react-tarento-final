import React from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";

const LoginBody = () => {
  return (
    <Container className="body-container">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Form>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="mb-3"
                  id="email"
                  name="email"
                />
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="mb-3"
                  id="password"
                  name="password"
                />
                <Button varient="primary-outline" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBody;
