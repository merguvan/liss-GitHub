import React, { useState } from "react";
import {
  Modal,
  Container,
  Button,
  CloseButton,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Achievements = (props) => {
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
      <Modal.Header>
        {" "}
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Achievements</h2>
          <p className="modal-description">
            Please provide details about your academic achievements so far.
          </p>
        </Modal.Title>
        <CloseButton
          onClick={() => {
            history.push("/");
          }}
        />
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>
                    Name of the Achievement / Award / Token
                  </Form.Label>
                  <FormControl
                    id="personAchievementName"
                    name="personAchievementName"
                    type="text"
                    value={achievements["personAchievementName"]}
                    onChange={handleAchievements}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Name of the achievement / award / token"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Country</Form.Label>
                  <FormControl
                    id="personAchievementCountry"
                    name="personAchievementCountry"
                    type="number"
                    value={achievements["personAchievementCountry"]}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Country where you received the award / token from"
                    onChange={handleAchievements}
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label>Granted by</Form.Label>
                  <FormControl
                    id="personAchievementGrantedBy"
                    name="personAchievementGrantedBy"
                    type="text"
                    value={achievements["personAchievementGrantedBy"]}
                    onChange={handleAchievements}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="The organization that awarded you with the award / token"
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  Date{" "}
                  <Form.Control
                    id="personAchievementDate"
                    name="personAchievementDate"
                    type="date"
                    value={achievements["personAchievementDate"]}
                    onChange={handleAchievements}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Date you received the award / token"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
