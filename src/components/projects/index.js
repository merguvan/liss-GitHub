import React, { useState } from "react";
import {
  Modal,
  Container,
  CloseButton,
  Button,
  Col,
  Form,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Projects = (props) => {
  const history = useHistory();

  // const errorCheck = [[ad, kural], [ad, kural]]

  const [projects, setProjects] = useState({});

  const handleProjects = (e) => {
    setProjects({
      ...projects,
      [e.target.name]: e.target.value,
      // if (errorCheck.find() == ) {

      // }
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
      keyboard
      animation
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Projects</h2>
          <p className="modal-description">
            Please enter details about the projects you have been involved in so
            far.
          </p>
        </Modal.Title>
        <CloseButton
          onClick={() => {
            history.push("/");
          }}
        />
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    id="personProjectName"
                    name="personProjectName"
                    type="text"
                    value={projects["personProjectName"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Name of the project"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    id="personProjectNumber"
                    name="personProjectNumber"
                    type="text"
                    value={projects["personProjectNumber"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Project number"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label>Acronym</Form.Label>
                  <Form.Control
                    id="personProjectAcronym"
                    name="personProjectAcronym"
                    type="text"
                    value={projects["personProjectAcronym"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Project acronym"
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
                    id="personProjectGrantProvider"
                    name="personProjectGrantProvider"
                    type="text"
                    value={projects["personProjectGrantProvider"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Grant provider"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Group
                    controlId="exampleForm.ControlSelect1"
                    className="deneme"
                  >
                    <Form.Label>Currency</Form.Label>
                    <Form.Control
                      id="personGrantCurrency"
                      name="personGrantCurrency"
                      type="text"
                      value={projects["personGrantCurrency"]}
                      onChange={handleProjects}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Currency"
                      placeholder=""
                      className="options_cn"
                      aria-describedby="basic-addon3"
                      as="select"
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
                    id="personProjectsOtherCurrency"
                    name="personProjectsOtherCurrency"
                    type="text"
                    value={projects["personProjectsOtherCurrency"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    placeholder=""
                    title="Other currency"
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
                    id="personProjectGrantAmount"
                    name="personProjectGrantAmount"
                    type="text"
                    value={projects["personProjectGrantAmount"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Total amount"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>Amount Involed</Form.Label>
                  <Form.Control
                    id="personInstGrantAmount"
                    name="personInstGrantAmount"
                    type="text"
                    value={projects["personInstGrantAmount"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Amount your institution was involved"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    id="personProjectRole"
                    name="personProjectRole"
                    type="text"
                    value={projects["personProjectRole"]}
                    onChange={handleProjects}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Your role in the project"
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
                      id="personProjectFrom"
                      name="personProjectFrom"
                      type="date"
                      value={projects["personProjectFrom"]}
                      onChange={handleProjects}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="When did the project start?"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      id="personProjectTo"
                      name="personProjectTo"
                      type="date"
                      value={projects["personProjectTo"]}
                      onChange={handleProjects}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="When did the project end?"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                    <Form.Check
                      id="personProjectTo"
                      name="personProjectTo"
                      type="checkbox"
                      value={projects["personProjectTo"]}
                      onChange={handleChange}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Is this an ongoing project?"
                      placeholder=""
                      aria-describedby="basic-addon3"
                      label="ongoing"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control
                id="personProjectWebsite"
                name="personProjectWebsite"
                type="text"
                value={projects["personProjectWebsite"]}
                onChange={handleProjects}
                data-toggle="tooltip"
                data-placement="top"
                title="The website of the project"
                placeholder=""
                aria-describedby="basic-addon3"
              />
            </Form.Group>
          </Form>
        </Container>
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
  return {
    projects: state.projectsReducer.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
