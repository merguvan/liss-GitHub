import React, { useEffect, useState } from "react";
import {
  Modal,
  Container,
  Button,
  CloseButton,
  Col,
  Form,
  InputGroup,
  FormControl,
  Navbar,
} from "react-bootstrap";
import CountrySelect from "react-bootstrap-country-select";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

const Workexperience = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { workExperience: storeWorkExperience } = useSelector(
    (state) => state.workExperienceReducer
  );

  const [save, setSave] = useState(false);
  const [value, setValue] = useState(null);
  const [ongoing, setOngoing] = useState(false);
  const [workExperience, setWorkExperience] = useState(
    storeWorkExperience || {}
  );
  const [show, setShow] = useState(true);

  const handleWorkExperience = (e) => {
    setWorkExperience({
      ...workExperience,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (
      Object.values(storeWorkExperience).join("") !==
      Object.values(workExperience).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeWorkExperience, workExperience]);
  
  const handleSubmit = () => {
    if (Object.values(workExperience).join("").length > 0) {
      console.log("calisti");
    } else {
      console.log("calismadi");
    }
  };
  // console.log(workExperience);
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        
     
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Work Experience</h2>
          <p className="modal-description">
            Please provide details about your work experience.
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
                <Col xs={12} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Name of the Institution</Form.Label>
                    <FormControl
                      id="personInstitutionName"
                      name="personInstitutionName"
                      type="text"
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Please enter the name of the institution you worked"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Website of the Institution</Form.Label>
                    <InputGroup className="mb-3">
                      <FormControl
                        id="personInstitutionWebsite"
                        name="personInstitutionWebsite"
                        type="text"
                        value={workExperience["personInstitutionWebsite"]}
                        onChange={handleWorkExperience}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Please enter the website of the institution"
                        placeholder=""
                        aria-describedby="basic-addon3"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <CountrySelect
                      id=""
                      className="country"
                      value={value}
                      onChange={setValue}
                      noMatchesText
                      data-toggle="tooltip"
                      data-placement="top"
                      placeholder=""
                      title="In which city was this institution located?"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <CountrySelect
                      className="country"
                      value={value}
                      onChange={setValue}
                      noMatchesText
                      data-toggle="tooltip"
                      data-placement="top"
                      placeholder=""
                      title="In which country was this institution located?"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Started on ...</Form.Label>
                    <Form.Control
                      id="personWorkFrom"
                      name="personWorkFrom"
                      type="date"
                      value={workExperience["personWorkFrom"]}
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="You started working at this institution on ..."
                      placeholder=""
                      aria-describedby="basic-addon3"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Worked until ...</Form.Label>
                    <Form.Control
                      id="personWorkTo"
                      name="personWorkTo"
                      type="date"
                      value={workExperience["personWorkTo"]}
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="You worked at this institution until ..."
                      placeholder=""
                      disabled={ongoing}
                      aria-describedby="basic-addon3"
                    />
                    <Form.Check
                      id="personWorkOngoing"
                      name="personWorkOngoing"
                      type="checkbox"
                      value={workExperience["personWorkOngoing"]}
                      onClick={() => {
                        setOngoing(!ongoing);
                        setWorkExperience({
                          ...workExperience,
                          personWorkTo: "",
                        });
                      }}
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Still working there?"
                      placeholder=""
                      label="ongoing"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Institutional type-1</Form.Label>
                    <Form.Control
                      id="personInstitutionType1"
                      name="personInstitutionType1"
                      value={workExperience["personInstitutionType1"]}
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Please select the type of the institution from the list ..."
                      as="select"
                    >
                      <option value="select">Select</option>
                      <option value="school">School</option>
                      <option value="college">College</option>
                      <option value="university">University</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col xs={12} md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Institutional type-2</Form.Label>
                    <Form.Control
                      id="personInstitutionType1"
                      name="personInstitutionType1"
                      value={workExperience["personInstitutionType1"]}
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Please select the type of the institution from the list ..."
                      as="select"
                    >
                      <option value="select">Select</option>
                      <option value="state">State</option>
                      <option value="private">Private</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={4} lg={4}>
                  <Form.Group>
                    <label htmlFor="basic-url">Your Position</label>
                    <InputGroup className="mb-3">
                      <FormControl
                        id="personInstitutionPosition"
                        name="personInstitutionPosition"
                        value={workExperience["personInstitutionPosition"]}
                        onChange={handleWorkExperience}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Please type the position you occupied ..."
                        aria-describedby="basic-addon3"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col xs={12} md={4} lg={4}>
                  <Form.Group>
                    <Form.Label>Position type-1</Form.Label>
                    <Form.Control
                      name="personInstitutionPositionType1"
                      onChange={handleWorkExperience}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Please select the type of the institution from the list ..."
                      aria-describedby="basic-addon3"
                      as="select"
                    >
                      <option value="select">Select</option>
                      <option value="academic">Academic</option>
                      <option value="administrative">Administrative</option>
                      <option value="teacher">Teacher</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <Form.Group>
                    <Form.Label>Position type-2</Form.Label>
                    <Form.Control
                      name="personInstitutionPositionType1"
                      onChange={handleWorkExperience}
                      as="select"
                    >
                      <option value="select">Select</option>
                      <option value="topmanagement">Top Management</option>
                      <option value="seniormanagement">
                        Senior Management
                      </option>
                      <option value="midmanagement">Mid-Management</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form.Group>
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

export default Workexperience;
