import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ListPasswrods from "./ListPasswrods";
import { useRecoilCallback } from "recoil";
import { appendPasswordsSelector } from "../states/selector";

const PasswordBody = () => {
  const [show, setShow] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [formData, setFormData] = useState({
    website: "",
    email: "",
    password: "",
  });

  const appendPassword = useRecoilCallback(({ set }) => (newPasswordData) => {
    set(appendPasswordsSelector, newPasswordData);
  });

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleSumbit = (e) => {
    e.preventDefault();
    const newPasswordData = {
      website: formData.website,
      email: formData.email,
      password: formData.password || generatedPassword,
    };

    appendPassword(newPasswordData);
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=<>?";
    let password = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    console.log(password);
    setGeneratedPassword(password);
  };

  return (
    <Container className="body-container">
      <ListPasswrods />
      <Button variant="primary" onClick={handleShow} className="mt-4">
        Add new password
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Manger</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label htmlFor="inpuWebsite">Website</Form.Label>
            <Form.Control type="text" name="website" onChange={handleChange} />
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} />
            <Form.Label htmlFor="inpuPassword">Password</Form.Label>
            <Form.Control
              type="password"
              id="formPassword"
              name="password"
              value={generatedPassword || formData.password}
              onChange={handleChange}
            />
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
