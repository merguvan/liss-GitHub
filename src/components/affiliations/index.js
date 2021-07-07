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
      <Modal.Header
        closeButton
        onClick={() => {
          history.push("/");
        }}
      >
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Affiliation</h2>
          <p className="modal-description">
           Please enter details about the institutions you are affiliated to.
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
                  id="personAffiliatedInstitution"
                  name="personAffiliatedInstitution"
                  type=""
                  value={affiliations["personAffiliatedInstitution"]}
                  onChange={handleAffiliations}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="To which Institution are you affiliated to?"
                  placeholder=""
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
                  id="personAffiliationFrom"
                  name="personAffiliationFrom"
                  type="date"
                  value={affiliations["personAffiliationFrom"]}
                  onChange={handleAffiliations}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Project number"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={6} md={6}>
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
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
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
                    title="Type"
                    placeholder=""
                    aria-describedby="basic-addon3"
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
                  id="personAffiliationOthers1"
                  name="personAffiliationOthers1"
                  type=""
                  value={affiliations["personAffiliationOthers1"]}
                  onChange={handleAffiliations}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="The type of the membership"
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
                  title="Where is the institution located?"
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
