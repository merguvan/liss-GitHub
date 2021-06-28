import React, { useState } from "react";
import {
  Modal,
  Container,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Background = (props) => {
  const history = useHistory();

  const [workExperience, setWorkExperience] = useState({});

  const handleWorkExperience = (e) => {
    setWorkExperience({
      ...workExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(workExperience);
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
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Grant Donor"
                  Tooltip
                  on
                  top
                  name="personAchievementGrantedBy"
                  onChange={handleWorkExperience}
                  id="personAchievementGrantedBy"
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
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Country of the Donor"
                  Tooltip
                  on
                  top
                  name="personAchievementCountry"
                  onChange={handleWorkExperience}
                  id="personAchievementCountry"
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={6}>
                <Form.Label>Name</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Name of the Donor"
                  Tooltip
                  on
                  top
                  name="personAchievementName"
                  onChange={handleWorkExperience}
                  id="personAchievementName"
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
                  type="date"
                  name="personAchievementFrom"
                  onChange={handleWorkExperience}
                  value={workExperience["personAchievementFrom"]}
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
            {Object.keys(workExperience).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    workExperience: state.workExperienceReducer.workExperience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Background);