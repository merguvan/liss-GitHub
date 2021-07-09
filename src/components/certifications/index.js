import React, { useState } from "react";
import {
  Modal,
  Container,
  Button,
  CloseButton,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Certifications = (props) => {
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
      <Modal.Header>
        <Modal.Title 
          id="contained-modal-title-vcenter"
          className="modal-title" 
          >
          <h2>Certifications</h2>
          <p className="modal-description">
            Please enter details about the certificates you have earned so far.
          </p>
        </Modal.Title>
        <CloseButton 
          onClick={() => { 
            history.push("/")
          }}
        />
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Awarded by</Form.Label>
                  <FormControl
                    id="personCertificationInstitutionName"
                    name="personCertificationInstitutionName"
                    type="text"
                    value={certification["personCertificationInstitutionName"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Organization awarding the certificate"
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
                    id="personCertificationInstitutionCountry"
                    name="personCertificationInstitutionCountry"
                    type="text"
                    value={
                      certification["personCertificationInstitutionCountry"]
                    }
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Country of the organization awarding the certificate"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>City</Form.Label>

                  <FormControl
                    id="personCertificationInstitutionCity"
                    name="personCertificationInstitutionCity"
                    type="text"
                    value={certification["personCertificationInstitutionCity"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="City of the organization awarding the certificate"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <label htmlFor="basic-url">Website</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      id="personCertificationInstitutionWebsite"
                      name="personCertificationInstitutionWebsite"
                      type="text"
                      value={
                        certification["personCertificationInstitutionWebsite"]
                      }
                      onChange={handleCertification}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Website of the organization awarding the certificate"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    id="personInstitutionType1"
                    name="personInstitutionType1"
                    as="select"
                    value={certification["personInstitutionType1"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Type of the organization"
                    placeholder=""
                  >
                    <option>Select</option>
                    <option>School</option>
                    <option>College</option>
                    <option>University</option>
                    <option>Company</option>
                    <option>NGO</option>
                    <option>Governmental Organization</option>
                  </Form.Control>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    id="personInstitutionType2"
                    name="personInstitutionType2"
                    as="select"
                    value={certification["personInstitutionType2"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="State or Private?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  >
                    <option>Select</option>
                    <option>State</option>
                    <option>Private</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  From{" "}
                  <Form.Control
                    id="personCertificateFrom"
                    name="personCertificateFrom"
                    type="date"
                    value={certification["personCertificateFrom"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When did the certification period start?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
                <Col xs={12} md={6}>
                  To
                  <Form.Control
                    id="personCertificateTo"
                    name="personCertificateTo"
                    type="date"
                    value={certification["personCertificateTo"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When did the certification period end?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={4}>
                  <Form.Label>Hours</Form.Label>
                  <FormControl
                    id="personCertificateHours"
                    name="personCertificateHours"
                    type="number"
                    value={certification["personCertificateHours"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="How many hours did it last in total?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Form.Label>Days</Form.Label>
                  <FormControl
                    id="personCertificateDays"
                    name="personCertificateDays"
                    type="number"
                    value={certification["personCertificateDays"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="How many days did it last in total?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Form.Label>Grade (if any)</Form.Label>
                  <FormControl
                    id="personCertificateGrade"
                    name="personCertificateGrade"
                    type="text"
                    value={certification["personCertificateGrade"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Did you receive a grade?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Certificate Number</Form.Label>

                  <FormControl
                    id="personCertificateNumber"
                    name="personCertificateNumber"
                    type="text"
                    value={certification["personCertificateNumber"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Your certificate number (if any)"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Certificate Type</Form.Label>
                  <Form.Control
                    id="personCertificateType"
                    name="personCertificateType"
                    as="select"
                    value={certification["personCertificateType"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="What kind of certificate did you receive?"
                    placeholder=""
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
              </Form.Row>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Topic (if any)</Form.Label>
                  <Form.Control
                    id="personCertificateTopic"
                    name="personCertificateTopic"
                    as="textarea"
                    rows={3}
                    value={certification["personCertificateTopic"]}
                    onChange={handleCertification}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="What was the certificate about? (please use the wording on the certificate - if any"
                    placeholder=""
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Row>
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
            </Form.Row>
          </Form>
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
    certification: state.certificationsReducer.certification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Certifications);
