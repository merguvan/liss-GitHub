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
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Affiliation</h2>
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
              <h6>Membership</h6>
            </Row>
            <hr />

            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Institution</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="To which Institution are you affiliated to?"
                  Tooltip
                  on
                  top
                  name="personAffiliatedInstitution"
                  onChange={handleWorkExperience}
                  id="personAffiliatedInstitution"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={6} md={6}>
                From{" "}
                <Form.Control
                  type="date"
                  name="personAffiliationFrom"
                  onChange={handleWorkExperience}
                  id="personAffiliationFrom"
                  value={workExperience["personAffiliationFrom"]}
                />
              </Col>

              <Col xs={6} md={6}>
                To
                <Form.Control
                  name="personAffiliationTo"
                  onChange={handleWorkExperience}
                  id="personAffiliationTo"
                  value={workExperience["personAffiliationTo"]}
                  type="date"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="exampleForm.ControlSelect">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="personAffiliationType"
                    onChange={handleWorkExperience}
                    value={workExperience["personAffiliationType"]}
                  >
                    <option>Member</option>
                    <option>Associate</option>
                    <option>Fellow</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>*If others (please specify)</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="The type of the membership"
                  Tooltip
                  on
                  top
                  name="personAffiliationOthers1"
                  onChange={handleWorkExperience}
                  id="personAffiliationOthers1"
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={12}>
                <Form.Label>Country</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Where is the institution located?"
                  Tooltip
                  on
                  top
                  name="personAffiliationCountry"
                  onChange={handleWorkExperience}
                  id="personAffiliationCountry"
                  aria-describedby="basic-addon3"
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