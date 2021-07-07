import React, { useState } from "react";
import {
  Modal,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Background = (props) => {
  const history = useHistory();

  const [achievements, setAchievements] = useState({});

  const handleAchievements = (e) => {
    setAchievements({
      ...achievements,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(achievements);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        onClick={() => {
          history.push("/");
        }}
      >
        {" "}
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Achievements</h2>
          <p className="modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            unde.
          </p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Granted by</Form.Label>

                <FormControl
                  id="personAchievementGrantedBy"
                  name="personAchievementGrantedBy"
                  type="text"
                  value={achievements["personAchievementGrantedBy"]}
                  onChange={handleAchievements}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Grant Donor"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label>Country</Form.Label>

                <FormControl
                  id="personAchievementCountry"
                  name="personAchievementCountry"
                  type="number"
                  value={achievements["personAchievementCountry"]}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Country of the Donor"
                  onChange={handleAchievements}
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={6}>
                <Form.Label>Name</Form.Label>

                <FormControl
                  id="personAchievementName"
                  name="personAchievementName"
                  type="text"
                  value={achievements["personAchievementName"]}
                  onChange={handleAchievements}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Name of the Donor"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={6} md={6}>
                Date{" "}
                <Form.Control
                  id="personAchievementFrom"
                  name="personAchievementFrom"
                  type="date"
                  value={achievements["personAchievementFrom"]}
                  onChange={handleAchievements}
                  data-toggle="tooltip"
                  data-placement="top"
                  placeholder=""
                  title="Date"
                />
              </Col>
            </Row>
          </Form.Group>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}>
            {" "}
            {Object.keys(achievements).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    achievements: state.achievementsReducer.achievements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Background);
