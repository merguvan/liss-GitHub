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

  const [education, setEducation] = useState({});

  const handleEducation = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(education);
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
          <h2>Education</h2>
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
              <h6>Date</h6>
            </Row>
            <hr />
            <Row>
              <Col xs={6} md={6}>
                From{" "}
                <Form.Control
                  type="date"
                  name="personEduFrom"
                  onChange={handleEducation}
                  id="personEduFrom"
                  value={education["personEduFrom"]}
                />
              </Col>
              <Col xs={6} md={6}>
                To
                <Form.Control
                  name="personEduTo"
                  onChange={handleEducation}
                  id="personEduTo"
                  value={education["personEduTo"]}
                  type="date"
                />
              </Col>
            </Row>
          </Form.Group>

          <br />
          <Row>
            <h6>Institution</h6>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Type1</Form.Label>
                <Form.Control
                  as="select"
                  name="personInstitutionType2"
                  onChange={handleEducation}
                  id="personInstitutionType2"
                  value={education["personInstitutionType2"]}
                >
                  <option>State</option>
                  <option>Private</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type2</Form.Label>
                <Form.Control
                  as="select"
                  name="personInstitutionType1"
                  onChange={handleEducation}
                  id="personInstitutionType1"
                  value={education["personInstitutionType1"]}
                >
                  <option>School</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>*If others (please specify)</Form.Label>

              <FormControl
                data-toggle="tooltip"
                data-placement="top"
                title="Type of the educational institution"
                Tooltip
                on
                top
                name="personInstitutionOthers1"
                onChange={handleEducation}
                id="personInstitutionOthers1"
                aria-describedby="basic-addon3"
              />
            </Col>
          </Row>

          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Name</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Name of the educational institution"
                  Tooltip
                  on
                  top
                  name="personInstitutionName"
                  onChange={handleEducation}
                  id="personInstitutionName"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label>City</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="City of the educational institution"
                  Tooltip
                  on
                  top
                  name="personInstitutionCity"
                  onChange={handleEducation}
                  id="personInstitutionCity"
                  aria-describedby="basic-addon3"
                />
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>Country</Form.Label>

                <FormControl
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Country of the educational institution"
                  Tooltip
                  on
                  top
                  name="personInstitutionCountry"
                  onChange={handleEducation}
                  id="personInstitutionCountry"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Website</label>
                <InputGroup className="mb-3">
                  <FormControl
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Website of the educational institution"
                    Tooltip
                    on
                    top
                    name="personInstitutionWebsite"
                    onChange={handleEducation}
                    id="personInstitutionWebsite"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <br />
            <Row>
              <h6>Degree/Academic Title</h6>
            </Row>
            <hr />
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Program</label>
                <InputGroup className="mb-3">
                  <FormControl
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Academic program studied"
                    Tooltip
                    on
                    top
                    name="personInstitutionProgram"
                    onChange={handleEducation}
                    id="personInstitutionProgram"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Degree Obtained</Form.Label>
                <Form.Control
                  name="personInstitutionDegree"
                  onChange={handleEducation}
                  id="personInstitutionDegree"
                  as="select"
                >
                  <option>High School</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>Doctoral</option>
                  <option>Assistant Professorship</option>
                  <option> Associate Professors</option>
                  <option>Professor</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Degree Title</label>
                <InputGroup className="mb-3">
                  <FormControl
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Title of the degree"
                    Tooltip
                    on
                    top
                    name="personInstitutionDegreeTitle"
                    onChange={handleEducation}
                    id="personInstitutionDegreeTitle"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>

          <Form.File name="personEduDiploma" id="personEduDiploma">
            <Form.File.Label>Upload Diploma</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}>
            {" "}
            {Object.keys(education).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    education: state.educationReducer.education,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Background);
