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
import { addReference } from "../../actions/reference";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const References = (props) => {
  const history = useHistory();
  const [addReference, setAddReference] = useState({});
  const handleAddReference = (e) => {

    setAddReference({
      ...addReference,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = () => {
    props.addReference(addReference);
    console.log(props);
  };
  console.log(addReference);
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
        Reference
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="select"
                  name="personTitle"

                  onChange={handleAddReference}

                  value={addReference["personTitle"]}
                >
                  <option>Mrs</option>
                  <option>Miss</option>
                  <option>Mr</option>
                  <option>Prof</option>
                  <option>Dr</option>
                  <option>Assoc.Prof.Dr</option>
                  <option>Assist.Prof.Dr</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Name</Form.Label>

                <FormControl
                  name="personRefereeName"
                  onChange={handleAddReference}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Position</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personRefereePosition"
                    onChange={handleAddReference}
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
                <label htmlFor="basic-url">Institution</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personRefereeInstitution"
                    onChange={handleAddReference}

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
                <label htmlFor="basic-url">Email</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personRefereeEmail"
                    onChange={handleAddReference}

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

                <label htmlFor="basic-url">Phone Number</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personRefereePhoneNumber"

                    onChange={handleAddReference}

                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>
          {/* <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <Form.Label>Position type</Form.Label>
                <Form.Control
                  name="personInstitutionPositionType1"
                  onChange={handleAddReference}
                  as="select"
                >
                  <option>Academic</option>
                  <option>Administrative</option>
                  <option>Teacher</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group> */}
          <Form.Group>
            <Row>

              <Col xs={12} md={12}>
                Date Signed{" "}
                <Form.Control
                  type="date"
                  name="personRefDateSigned"
                  onChange={handleAddReference}
                  value={addReference["personRefDateSigned"]}

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
            {Object.keys(addReference).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    addReference: state.referenceReducer.addReference,
  };
};

const mapDispatchToProps = {
  addReference,
};
export default connect(mapStateToProps, mapDispatchToProps)(References);