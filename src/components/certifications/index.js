import React, { useState } from "react";
import {
  Modal,
  Container,
  Button,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
//certification
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
          <Form>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Awarded by</Form.Label>
                  <FormControl
                    name="personInstitutionName"
                    onChange={handleCertification}
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    type="text"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Organization awarding the certificate"
                    placeholder=""
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Country</Form.Label>

                  <FormControl
                    name="personCertificationInstitutionCountry"
                    onChange={handleCertification}
                    id="personCertificationInstitutionCountry"
                    aria-describedby="basic-addon3"
                    type="text"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Country of the organization awarding the certificate"
                    placeholder=""
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>City</Form.Label>

                  <FormControl
                    name="personCertificationInstitutionCity"
                    onChange={handleCertification}
                    id="personCertificationInstitutionCity"
                    aria-describedby="basic-addon3"
                    type="text"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="City of the organization awarding the certificate"
                    placeholder=""
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
                      name="personCertificationInstitutionWebsite"
                      onChange={handleCertification}
                      id="personCertificationInstitutionWebsite"
                      aria-describedby="basic-addon3"
                      type="text"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Website of the organization awarding the certificate"
                      placeholder=""
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
                    as="select"
                    name="personInstitutionType1"
                    onChange={handleCertification}
                    id="personInstitutionType1"
                    value={certification["personInstitutionType1"]}
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
                    as="select"
                    name="personInstitutionType2"
                    id="personInstitutionType2"
                    onChange={handleCertification}
                    value={certification["personInstitutionType2"]}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="State or Private?"
                    placeholder=""
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
                    type="date"
                    name="personCertificateFrom"
                    id="personCertificateFrom"
                    onChange={handleCertification}
                    value={certification["personCertificateFrom"]}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When did the certification period start?"
                    placeholder=""
                  />
                </Col>
                <Col xs={12} md={6}>
                  To
                  <Form.Control
                    name="personCertificateTo"
                    onChange={handleCertification}
                    value={certification["personCertificateTo"]}
                    type="date"
                    id="personCertificateTo"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When did the certification period end?"
                    placeholder=""
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={4}>
                  <Form.Label>Hours</Form.Label>

                  <FormControl
                    name="personCertificateHours"
                    onChange={handleCertification}
                    id="personCertificateHours"
                    aria-describedby="basic-addon3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="How many hours did it last in total?"
                    placeholder=""
                    type="number"
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Form.Label>Days</Form.Label>

                  <FormControl
                    name="personCertificateDays"
                    onChange={handleCertification}
                    id="personCertificateDays"
                    aria-describedby="basic-addon3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="How many days did it last in total?"
                    placeholder=""
                    type="number"
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Form.Label>Grade (if any)</Form.Label>

                  <FormControl
                    name="personCertificateGrade"
                    onChange={handleCertification}
                    id="personCertificateGrade"
                    aria-describedby="basic-addon3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Did you receive a grade?"
                    placeholder=""
                    type="text"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Certificate Number</Form.Label>

                  <FormControl
                    name="personCertificateNumber"
                    onChange={handleCertification}
                    id="personCertificateNumber"
                    aria-describedby="basic-addon3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Your certificate number (if any)"
                    placeholder=""
                    type="text"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Certificate Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="personCertificateType"
                    id="personCertificateType"
                    onChange={handleCertification}
                    value={certification["personCertificateType"]}
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
                    value={certification["personCertificateTopic"]}
                    name="personCertificateTopic"
                    id="personCertificateTopic"
                    onChange={handleCertification}
                    as="textarea"
                    rows={3}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="What was the certificate about? (please use the wording on the certificate - if any"
                    placeholder=""
                    type="number"
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
