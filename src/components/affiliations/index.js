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
const Affiliations = (props) => {
  const history = useHistory();

  const [affiliations, setAffiliations] = useState({});

  const handleAffiliations = (e) => {
    setAffiliations({
      ...affiliations,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(affiliations);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Affiliation</h2>
          <p className="modal-description">
            Please provide details about the organizations you are affiliated
            to.
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
                  <Form.Label>Institution</Form.Label>
                  <FormControl
                    id="personAffiliatedInstitution"
                    name="personAffiliatedInstitution"
                    type="text"
                    value={affiliations["personAffiliatedInstitution"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="To which Institution are you affiliated to?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  From{" "}
                  <Form.Control
                    id="personAffiliationFrom"
                    name="personAffiliationFrom"
                    type="date"
                    value={affiliations["personAffiliationFrom"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Affiliation started from ..."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  To
                  <Form.Control
                    id="personAffiliationTo"
                    name="personAffiliationTo"
                    type="date"
                    value={affiliations["personAffiliationTo"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="exampleForm.ControlSelect">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      id="personAffiliationType"
                      name="personAffiliationType"
                      as="select"
                      value={affiliations["personAffiliationType"]}
                      onChange={handleAffiliations}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="What is your affiliation type?"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    >
                      <option>Member</option>
                      <option>Associate</option>
                      <option>Fellow</option>
                      <option>Honour</option>
                      <option>Emeritus</option>
                      <option>Volunteer</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Other?</Form.Label>
                  <FormControl
                    id="personAffiliationOthers1"
                    name="personAffiliationOthers1"
                    type=""
                    value={affiliations["personAffiliationOthers1"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please enter the type of affiliation that you could not find in the list."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={12}>
                  <Form.Label>Country</Form.Label>

                  <FormControl
                    id="personAffiliationCountry"
                    name="personAffiliationCountry"
                    type=""
                    value={affiliations["personAffiliationCountry"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="In which country is the institution you are affiliated located?"
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
            {Object.keys(affiliations).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    affiliations: state.affiliationsReducer.affiliations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Affiliations);
