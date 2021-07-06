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
import SelectLanguage from "./language/SelectLanguage";
// import ReactLanguageSelect from './language/Lang'
// import Lang from './language/Lang'

import { addCapacityDetails } from "../../actions/capacityAction";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Capacity = (props) => {
  const history = useHistory();
  const [displayLanguageList, setDisplayLanguageList] = useState(true);

  const [capacityDetails, setCapacityDetails] = useState({});

  const showLanguageList = (e) => {
    if (e.target.name === "personCourseLanguage") {
      setDisplayLanguageList(false);
    } else {
      setDisplayLanguageList(true);
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
      <Modal.Header
        closeButton
        onClick={() => {
          history.push("/");
        }}
      >
        Capacity
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form.Group>
            <Row>
              <Col xs={12} md={6}>
                From{" "}
                <Form.Control
                  type="date"
                  name="personAvailableFrom"
                  onChange={handleCapacityDetails}
                  value={capacityDetails["personAvailableFrom"]}
                />
              </Col>
              <Col xs={12} md={6}>
                To
                <Form.Control
                  name="personAvailableTo"
                  onChange={handleCapacityDetails}
                  value={capacityDetails["personAvailableTo"]}
                  type="date"
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col xs={12} md={12}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  name="personInstitutionType1"
                  onChange={handleCapacityDetails}
                  value={capacityDetails["personInstitutionType1"]}
                >
                  <option>School</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Course Name</Form.Label>

                <FormControl
                  placeholder="Course you would like to offer"
                  name="personCourseName"
                  onChange={handleCapacityDetails}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Language</label>
                <SelectLanguage displayLanguageList={displayLanguageList} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Experience</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personCourseExperience"
                    onChange={handleCapacityDetails}
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Level</Form.Label>
                <Form.Control
                  name="personCourseLevel"
                  onChange={handleCapacityDetails}
                  as="select"
                >
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>PhD</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
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
