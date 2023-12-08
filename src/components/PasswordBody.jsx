import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ListPasswrods from "./ListPasswrods";

const PasswordBody = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSumbit = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const generatePassword = (length = 12) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  };
  return (
    <Container className="body-container">
      <ListPasswrods />
      <Button variant="primary" onClick={handleShow}>
        Add new password
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Manger</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label htmlFor="inpuWebsite">Website</Form.Label>
            <Form.Control type="text" />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control type="email" />
            <Form.Label htmlFor="inpuPassword">Password</Form.Label>
            <Form.Control type="password" />
            <Button
              variant="primary"
              className="mt-2"
              onClick={generatePassword}
            >
              Generate password
            </Button>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSumbit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default PasswordBody;
