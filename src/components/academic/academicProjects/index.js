import { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addAcademicWorkDetails } from "../../../actions/academicWorkDetails";

function Projects(props) {
  const history = useHistory();

  const [academicWork, setAcademicWork] = useState(props.academicWork || {});

  const handleAcademicWork = (e) => {
    setAcademicWork({
      ...academicWork,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.addAcademicWorkDetails(academicWork);
    history.push("/");
  };

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
        <Modal.Title id="contained-modal-title-vcenter">Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              value={academicWork["personProjectName"]}
              name="personProjectName"
              onChange={handleAcademicWork}
              size="lg"
              type="text"
              placeholder=""
            />
            <Form.Label>Number</Form.Label>
            <Form.Control
              value={academicWork["personProjectNumber"]}
              name="personProjectNumber"
              onChange={handleAcademicWork}
              type="text"
              placeholder=""
            />
            <Form.Label>Grant Provider</Form.Label>
            <Form.Control
              value={academicWork["personProjectGrantProvider"]}
              name="personProjectGrantProvider"
              onChange={handleAcademicWork}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Acronym</Form.Label>
              <Form.Control
                value={academicWork["personProjectAcronym"]}
                name="personProjectAcronym"
                onChange={handleAcademicWork}
                placeholder=""
              />
            </Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Currency</Form.Label>
              <Form.Control
                value={academicWork["personGrantCurrency"]}
                name="personGrantCurrency"
                onChange={handleAcademicWork}
                as="select"
              >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
            <Col>
              <Form.Label>Total Amount</Form.Label>
              <Form.Control
                value={academicWork["personGrantAmount"]}
                name="personGrantAmount"
                onChange={handleAcademicWork}
                placeholder=""
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={academicWork["personProjectRole"]}
                name="personProjectRole"
                onChange={handleAcademicWork}
                as="select"
              >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
            <Col>
              <Form.Label>Amount You Were Involed</Form.Label>
              <Form.Control
                value={academicWork["personInstGrantAmount"]}
                name="personInstGrantAmount"
                onChange={handleAcademicWork}
                placeholder=""
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>From </Form.Label>
                <Form.Control
                  value={academicWork["personProjectFrom"]}
                  name="personProjectFrom"
                  onChange={handleAcademicWork}
                  type="date"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>To</Form.Label>
                <Form.Control
                  value={academicWork["personProjectTo"]}
                  name="personProjectTo"
                  onChange={handleAcademicWork}
                  type="date"
                />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/academicInfo/1">
          <Button>Back</Button>
        </Link>
        <Link to="/">
          <Button onClick={handleSubmit}>Save & Continue</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToPros = (state) => {
  return { academicWork: state.academicWorksDetailsReducer.academicWork };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addAcademicWorkDetails: (details) =>
      dispatch(addAcademicWorkDetails(details)),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Projects);
