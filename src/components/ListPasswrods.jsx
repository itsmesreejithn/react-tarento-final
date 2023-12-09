import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { passwordsAtom } from "../states/atoms";

const ListPasswrods = () => {
  const passwordList = useRecoilValue(passwordsAtom);
  return (
    <>
      {passwordList.map((passwords, index) => (
        <Row key={index}>
          <Col className="pt-4">
            <Card>
              <Card.Body className="fs-4 fw-bold">
                Website: {passwords.website}
                <br />
                Email: {passwords.email}
                <br />
                Password: {passwords.password}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ListPasswrods;
