import React from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { isUserAuthenticatedSelector } from "../states/selector";
import { userDataAtom } from "../states/atoms";

const LoginBody = () => {
  const navigate = useNavigate();

  const isUserAuthenticated = useRecoilCallback(
    ({ set }) =>
      (authenticationValue) => {
        set(isUserAuthenticatedSelector, authenticationValue);
      }
  );

  const userData = useRecoilValue(userDataAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === userData.email && password == userData.password) {
      isUserAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
      navigate("/login");
    }
  };

  return (
    <Container className="body-container">
      <Row className="pt-5">
        <Col>
          <Card>
            <Card.Body className="p-5">
              <Card.Title className="p-5 text-center fs-1 fw-bolder">
                Log In
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="mb-4 py-3"
                  id="email"
                  name="email"
                />
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="mb-4 py-3"
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
