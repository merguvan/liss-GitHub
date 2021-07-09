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
import SelectLanguage from "../../commonModules/language/SelectLanguage";
// import ReactLanguageSelect from './language/Lang'
// import Lang from './language/Lang'

import { addCapacityDetails } from "../../actions/capacityAction";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Capacity = (props) => {
  const history = useHistory();
  const [lang1, setLang1] = useState(true);
  const [lang2, setLang2] = useState(true);

  const [capacityDetails, setCapacityDetails] = useState({});

  const showLanguageList = (e) => {
    if (e.target.name === "lang1") {
      setLang1(false);
    } else if (e.target.name === "lang2") {
      setLang2(false);
    } else {
      setLang1(true);
      setLang2(true);
    }
  };
  const handleCapacityDetails = (e) => {
    setCapacityDetails({
      ...capacityDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(capacityDetails);
  return (
    <Modal
      onClick={showLanguageList}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Capacity</h2>
          <p className="modal-description">
            Please enter details about the courses you may teach and/or theses
            you may supervise.
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
                <Col xs={12} md={4}>
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    id="personAvailableFrom"
                    name="personAvailableFrom"
                    type="date"
                    value={capacityDetails["personAvailableFrom"]}
                    onChange={handleCapacityDetails}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="You can start teaching from ..."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    id="personAvailableTo"
                    name="personAvailableTo"
                    type="date"
                    value={capacityDetails["personAvailableTo"]}
                    onChange={handleCapacityDetails}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="You can start teaching until ..."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    id="personInstitutionType1"
                    name="personInstitutionType1"
                    type="date"
                    as="select"
                    onChange={handleCapacityDetails}
                    value={capacityDetails["personInstitutionType1"]}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="What level/cycle can you offer this course?"
                    placeholder=""
                  >
                    <option value="select">Select</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="doctoral">Doctoral</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label>Course Name</Form.Label>
                  <FormControl
                    id="personCourseName"
                    name="personCourseName"
                    type="text"
                    value={capacityDetails["personCourseName"]}
                    onChange={handleCapacityDetails}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Course you would like to offer"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <label htmlFor="basic-url">Language</label>
                  <SelectLanguage 
                    name="lang1"
                    displayLanguageList={lang1}
                  />
                </Col>

                <Col xs={12} md={6}>
                  <label htmlFor="basic-url">Experience</label>
                  <InputGroup className="mb-3">
                    <FormControl
                      id="personCourseExperience"
                      name="personCourseExperience"
                      type="number"
                      value={capacityDetails["personCourseExperience"]}
                      onChange={handleCapacityDetails}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="How many years of experience do you have in teaching this subject?"
                      placeholder=""                      
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <br />
              <h6>Supervision</h6>
              <hr />
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    id="personCourseLevel"
                    name="personCourseLevel"
                    value={capacityDetails["personCourseLevel"]}
                    onChange={handleCapacityDetails}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="At which level have you supervised theses?"                    
                    as="select"
                  >
                    <option value="select">Select</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="doctoral">Doctoral</option>
                  </Form.Control>
                </Col>
                <Col xs={12} md={6}>
                  <label htmlFor="basic-url">Language</label>
                  <SelectLanguage 
                    name="lang2"
                    displayLanguageList={lang2} 
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
            {Object.keys(capacityDetails).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    capacityDetails: state.capacityReducer.capacityDetails,
  };
};

const mapDispatchToProps = {
  addCapacityDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(Capacity);
