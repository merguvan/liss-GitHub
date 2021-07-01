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
      <Modal.Header
        closeButton
        onClick={() => {
          history.push("/");
        }}
      >
        Projects
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control size="lg" type="text" placeholder="" />
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Label>Number</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>Acronym</Form.Label>
                <Form.Control placeholder="" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group></Form.Group>
          <Form.Row>
            <Form.Label>Grant Provider</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Col xs={12} md={6}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Currency</Form.Label>
                <Form.Control
                  as="select"
                  name="personInstitutionType1"
                  onChange={handleProjects}
                  id="personInstitutionType1"
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
                title="Type of the educational institution"
                Tooltip
                on
                top
                name="personInstitutionOthers1"
                onChange={handleProjects}
                id="personInstitutionOthers1"
                aria-describedby="basic-addon3"
              />
            </Col>
          </Form.Row>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Label>Total Amount</Form.Label>
                <Form.Control placeholder="" />
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>Amount You Were Involed</Form.Label>
                <Form.Control placeholder="" />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control placeholder="" />
            </Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>From </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group></Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>To</Form.Label>
                <Form.Control type="date" />
                <Form.Check
                  type="checkbox"
                  label="ongoing"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="" />
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
