import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { passwordsAtom } from "../states/atoms";
import { deletePasswordsSelector } from "../states/selector";

const ListPasswrods = () => {
  const passwordList = useRecoilValue(passwordsAtom);
  const deletePasswordVaue = useRecoilCallback(({ set }) => (index) => {
    set(deletePasswordsSelector, index);
  });
  const deletePassword = (index) => {
    deletePasswordVaue(index);
  };
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
                <br />
                <Button
                  variant="outline-danger"
                  onClick={() => deletePassword(index)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ListPasswrods;
