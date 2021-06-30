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
//certification
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Background = (props) => {
  const history = useHistory();

  const [certification, setCertification] = useState({});

  const handleCertification = (e) => {
    setCertification({
      ...certification,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(certification);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => history.push("/")}>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Certifications</h2>
          <p className="modal-description">
            Please enter details about the certificates you have earned so far.
          </p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Awarded by</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                  Tooltipontop
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label>Country</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
              <Col xs={6} md={6}>
                <Form.Label>City</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
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
                    name="personInstitutionWebsite"
                    onChange={handleCertification}
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label>Type</Form.Label>

                <Form.Control
                  as="select"
                  name="personInstitutionType1"
                  onChange={handleCertification}
                  value={certification["personInstitutionType1"]}
                >
                  <option>Select</option>
                  <option>School</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
              <Col xs={6} md={6}>
                <Form.Label>Status</Form.Label>

                <Form.Control
                  as="select"
                  name="personInstitutionType1"
                  onChange={handleCertification}
                  value={certification["personInstitutionType1"]}
                >
                  <option>Select</option>
                  <option>School</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                From{" "}
                <Form.Control
                  type="date"
                  name="personEduFrom"
                  onChange={handleCertification}
                  value={certification["personEduFrom"]}
                />
              </Col>
              <Col xs={12} md={6}>
                To
                <Form.Control
                  name="personEduTo"
                  onChange={handleCertification}
                  value={certification["personEduTo"]}
                  type="date"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={4}>
                <Form.Label>Hours</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
              <Col xs={12} md={4}>
                <Form.Label>Days</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
              <Col xs={12} md={4}>
                <Form.Label>Grade (if any)</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label>Certificate Number</Form.Label>

                <FormControl
                  name="personInstitutionName"
                  onChange={handleCertification}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
              <Col xs={6} md={6}>
                <Form.Label>Certificate Type</Form.Label>
                <Form.Control
                  as="select"
                  name="personInstitutionType1"
                  onChange={handleCertification}
                  value={certification["personInstitutionType1"]}
                >
                  <option>Select</option>
                  <option>Language</option>
                  <option>
                    Appreciation (Thanks, Gratitude, Recognition, Honor)
                  </option>
                  <option>
                    Attendance (Completion, Participation, Graduation)
                  </option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Topic (if any)</Form.Label>
            <Form.Control
              value={certification["personInstitutionType1"]}
              name="personPublicationAPA"
              onChange={handleCertification}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Certificate</Form.Label>
            <Form.Control
              type="file"
              name="personPhoto"
              // files={addressInfo['personPhoto']}
              onChange={(e) => {
                //setAddressInfo({ ...addressInfo, [e.target.name]: e.target.files[0] });
              }}
            />
          </Form.Group>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}>
            {" "}
            {Object.keys(certification).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    certification: state.workExperienceReducer.certification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Background);
