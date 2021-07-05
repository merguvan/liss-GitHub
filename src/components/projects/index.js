import React, { useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Projects = (props) => {
  const history = useHistory();

  const [projects, setProjects] = useState({});

  const handleProjects = (e) => {
    setProjects({
      ...projects,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  const handleChange = () => {};
  console.log(projects);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => history.push("/")}>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Projects</h2>
          <p className="modal-description">
            Please enter details about the project you have been involved in so
            far.
          </p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              data-toggle="tooltip"
              data-placement="top"
              title="Name of the project"
              onChange={handleProjects}
              id="personProjectName"
              type="text"
              name="personProjectName"
              placeholder=""
              aria-describedby="basic-addon3"
              size="lg"
            />
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Label>Number</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Project number"
                  onChange={handleProjects}
                  id="personProjectNumber"
                  type="text"
                  name="personProjectNumber"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={6}>
                <Form.Label>Acronym</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Project acronym"
                  onChange={handleProjects}
                  id="personProjectAcronym"
                  type="text"
                  name="personProjectAcronym"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={12}>
                <Form.Label>Grant Provider</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Grant provider"
                  onChange={handleProjects}
                  id="personProjectGrantProvider"
                  type="text"
                  name="personProjectGrantProvider"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Currency"
                    onChange={handleProjects}
                    id="personGrantCurrency"
                    type="text"
                    name="personGrantCurrency"
                    placeholder=""
                    aria-describedby="basic-addon3"
                    as="select"
                    value={projects["personInstitutionType1"]}
                  >
                    <option>Select</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBR</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Label>*If others (please specify)</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Other currency"
                  name="personProjectsOtherCurrency"
                  onChange={handleProjects}
                  id="personInstitutionOthers1"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={4}>
                <Form.Label>Total Amount</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Total amount"
                  onChange={handleProjects}
                  id="personProjectGrantAmount"
                  type="text"
                  name="personProjectGrantAmount"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label>Amount Involed</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Amount your institution was involved"
                  onChange={handleProjects}
                  id="personInstGrantAmount"
                  type="text"
                  name="personInstGrantAmount"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Your role in the project"
                  onChange={handleProjects}
                  id="personProjectRole"
                  type="text"
                  name="personProjectRole"
                  placeholder=""
                  aria-describedby="basic-addon3"
                  as="select"
                >
                  <option>Select</option>
                  <option>Project Manager</option>
                  <option>Institutional Coordinator</option>
                  <option>Technical Staff</option>
                  <option>Administrative Staff</option>
                  <option>Accountant</option>
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>From </Form.Label>
                  <Form.Control
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When did the project start?"
                    onChange={handleProjects}
                    id="personProjectFrom"
                    name="personProjectFrom"
                    placeholder=""
                    aria-describedby="basic-addon3"
                    type="date"
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When did the project end?"
                    onChange={handleProjects}
                    id="personProjectTo"
                    name="personProjectTo"
                    placeholder=""
                    aria-describedby="basic-addon3"
                    type="date"
                  />
                  <Form.Check
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Is this an ongoing project?"
                    id="personProjectTo"
                    name="personProjectTo"
                    placeholder=""
                    aria-describedby="basic-addon3"
                    type="checkbox"
                    label="ongoing"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control 
              data-toggle="tooltip"
              data-placement="top"
              title="The website of the project"
              onChange={handleProjects}
              id="personProjectWebsite"
              name="personProjectWebsite"
              placeholder=""
              aria-describedby="basic-addon3"
              type="text"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}>
            {" "}
            {Object.keys(projects).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.projectsReducer.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
