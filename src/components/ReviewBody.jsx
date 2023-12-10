import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  Form,
} from "react-bootstrap";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { isUserAuthenticatedAtom, reviewAtom } from "../states/atoms";
import { appendReviewsSelector } from "../states/selector";

const ReviewBody = () => {
  const reviews = useRecoilValue(reviewAtom);

  const isUserAuthenticated = useRecoilValue(isUserAuthenticatedAtom);

  const appendReview = useRecoilCallback(({ set }) => (newReview) => {
    set(appendReviewsSelector, newReview);
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [reviewData, setReviewData] = useState({
    userName: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      userName: reviewData.userName,
      content: reviewData.content,
    };
    appendReview(newReview);
    setShow(false);
  };

  return (
    <Container className="body-container">
      {reviews.map((review, index) => (
        <Row key={index} className="py-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{review.userName}</Card.Title>
                <Card.Text>{review.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
      {isUserAuthenticated ? (
        <Button variant="primary" onClick={handleShow}>
          Add Review
        </Button>
      ) : (
        <div className="text-center text-body-secondary">
          To add review please Login
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label htmlFor="inputUserName">User Name</Form.Label>
            <Form.Control type="text" name="userName" onChange={handleChange} />
            <Form.Label htmlFor="inputContent">Content</Form.Label>
            <Form.Control
              as="textarea"
              name="content"
              rows={3}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ReviewBody;
