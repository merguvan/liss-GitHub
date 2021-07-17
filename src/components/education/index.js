import React, { useState, useEffect } from "react";
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
import CountrySelect from "react-bootstrap-country-select";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Education = (props) => {
  const history = useHistory();
  const { education: storeEducation } = useSelector(
    (state) => state.educationReducer
  );
  const [save, setSave] = useState(false);
  const [ongoing, setOngoing] = useState(false);
  // const [value, setValue] = useState(null);
  const [education, setEducation] = useState(
    storeEducation || {}
  );

  // const [education, setEducation] = useState({});
  const [show, setShow] = useState(true);

  const handleEducation = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      Object.values(storeEducation).join("") !==
      Object.values(education).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeEducation, education]);
  const handleSubmit = () => {
    if (Object.values(education).join("").length > 0) {
      console.log("calisti");
    } else {
      console.log("calismadi");
    }
  };
  return (
    <Modal
      // {...props}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>Education</h2>
          <p className="modal-description">
            Please enter details about your educational background.
          </p>
        </Modal.Title>
        <CloseButton
          onClick={() => {
            setShow(!show);
            history.push("/");
          }}
        />
      </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group>
              <Form.Row>
                <h6>Dates</h6>
              </Form.Row>
              <hr />
              <Form.Row>
                <Col xs={12} md={6}>
                  From{" "}
                  <Form.Control
                    id="personEduFrom"
                    name="personEduFrom"
                    type="date"
                    value={education["personEduFrom"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Educational period started from ..."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  To
                  <Form.Control
                    id="personEduTo"
                    name="personEduTo"
                    type="date"
                    value={education["personEduTo"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Educational period continued until ..."
                    placeholder=""
                    disabled={ongoing}
                    aria-describedby="basic-addon3"
                  />
                  <Form.Check
                      id="personWorkOngoing"
                      name="personWorkOngoing"
                      type="checkbox"
                      value={education["personWorkOngoing"]}
                      onClick={() => {
                        setOngoing(!ongoing);
                        setEducation({
                          ...education,
                          personWorkTo: "",
                        });
                      }}
                      onChange={handleEducation}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Still working there?"
                      placeholder=""
                      label="ongoing"
                    />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group >
              <Form.Row>
                <h6>Institution</h6>
              </Form.Row>
              <hr />
              <Form.Row>
                <Col xs={12} md={4}>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Institutional Type-1</Form.Label>
                    <Form.Control
                      id="personEduInstitutionType2"
                      name="personEduInstitutionType2"
                      as="select"
                      value={education["personEduInstitutionType2"]}
                      onChange={handleEducation}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="State or private?"
                      placeholder=""
                    >
                      <option value="select">Select</option>
                      <option value="private">Private</option>
                      <option value="state">State</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col xs={12} md={4}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Institutional Type-2</Form.Label>
                    <Form.Control
                      id="personEduInstitutionType1"
                      name="personEduInstitutionType1"
                      as="select"
                      value={education["personEduInstitutionType1"]}
                      onChange={handleEducation}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="University, school, other ..."
                      placeholder=""
                    >
                      <option value="select">Select</option>
                      <option value="school">School</option>
                      <option value="college">College</option>
                      <option value="university">University</option>
                      <option value="other">Others</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>Other? (please specify)</Form.Label>
                  <FormControl
                    id="personEduInstitutionOther"
                    name="personEduInstitutionOther"
                    type="text"
                    value={education["personEduInstitutionOther"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please enter the type of the educational institution"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Name</Form.Label>
                  <FormControl
                    id="personEduInstitutionName"
                    name="personEduInstitutionName"
                    type="text"
                    value={education["personEduInstitutionName"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Name of the educational institution"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>City</Form.Label>
                  <FormControl
                    id="personEduInstitutionCity"
                    name="personEduInstitutionCity"
                    type="text"
                    value={education["personEduInstitutionCity"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="City of the educational institution"
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label>Country</Form.Label>
                  <CountrySelect
                    id="personEduInstitutionCountry"
                    name="personEduInstitutionCountry"
                    type="text"
                    value={education["personEduInstitutionCountry"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Country of the educational institution"
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
                      id="personEduInstitutionWebsite"
                      name="personEduInstitutionWebsite"
                      type="text"
                      value={education["personEduInstitutionWebsite"]}
                      onChange={handleEducation}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Website of the educational institution"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <br />
              <Form.Row>
                <h6>Degree/Academic Title</h6>
              </Form.Row>
              <hr />
              <Form.Row>
                <Col xs={12} md={12}>
                  <label htmlFor="basic-url">Program</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      id="personEduInstitutionProgram"
                      name="personEduInstitutionProgram"
                      type="text"
                      value={education["personEduInstitutionProgram"]}
                      onChange={handleEducation}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Academic program studied"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Degree/Title Obtained</Form.Label>
                  <Form.Control
                    id="personEduInstitutionDegree"
                    name="personEduInstitutionDegree"
                    as="select"
                    value={education["personEduInstitutionDegree"]}
                    onChange={handleEducation}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Academic program studied"
                    placeholder=""
                  >
                    <option value="select">Select</option>
                    <option value="highschool">High School</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="doctoral">Doctoral</option>
                    <option value="assistprof">Assistant Professorship</option>
                    <option value="assocprof"> Associate Professorship</option>
                    <option value="prof">Professorship</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <label htmlFor="basic-url">
                    Title of the Degree (including field)
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      id="personEduInstitutionDegreeTitle"
                      name="personEduInstitutionDegreeTitle"
                      type="text"
                      value={education["personEduInstitutionDegreeTitle"]}
                      onChange={handleEducation}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Title of the degree (including field)"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.File id="personEduDiploma" name="personEduDiploma">
              <Form.File.Label>Upload Diploma</Form.File.Label>
              <Form.File.Input />
            </Form.File>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <Link to="/">
        <Button onClick={handleSubmit}> {save ? "save" : "close"} </Button>
      </Link>
      </Modal.Footer>
    </Modal>
  );
};


export default Education;
