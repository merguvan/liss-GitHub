import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfile,
  deleteUserProfile,
} from "../actions/userRegistration";

const Profile = ({ location, history }) => {
  const { userLogin } = useSelector((state) => state.userLogin);
  const [data, setData] = useState({});
  const [message, setMessage] = useState(null);

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.newPassword) {
      if (data?.newPassword === data?.confirmNewPassword) {
        dispatch(updateUserProfile(data));
      } else {
        console.log("passwords don't match");
      }

      dispatch(updateUserProfile(data));
    }
  };
  const handleDelete = () => {
    setShow(false);
    dispatch(deleteUserProfile());
  };
  return (
    <Row className="profile-page-content-container">
      <Modal show={show} fullscreen="sm-down" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure that you want to delete your profile permenantly
        </Modal.Body>
        <Modal.Footer>
          <Row className="button-container">
            <Button onClick={() => setShow(false)}>No</Button>

            <Button type="submit" variant="danger" onClick={handleDelete}>
              Yes
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>
      <Col md={6} className="profile-page-update-content">
        <h2>User Profile</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="personName"
              value={data["personName"] || ""}
              onChange={handleData}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="personEmail"
              value={data["personEmail"] || ""}
              onChange={handleData}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter current  password"
              name="currentPassword"
              value={data["currentPassword"] || ""}
              onChange={handleData}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="newPassword"
              value={data["newPassword"] || ""}
              onChange={handleData}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              name="confirmNewPassword"
              value={data["confirmNewPassword"] || ""}
              onChange={handleData}
            ></Form.Control>
          </Form.Group>

          <Col className="d-flex justify-content-between">
            <Button type="submit" variant="primary">
              Update
            </Button>
            <Button
              type="submit"
              variant="danger"
              onClick={() => setShow(true)}
            >
              Delete
            </Button>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default Profile;
