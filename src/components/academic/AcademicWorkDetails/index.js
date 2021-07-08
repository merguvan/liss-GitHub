import { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addAcademicWorkDetails } from "../../../actions/academicWorkDetails";
import SelectLanguage from "../../capacity/language/SelectLanguage";
function AcademicWorkDetails(props) {
  const history = useHistory();
  const [displayLanguageList, setDisplayLanguageList] = useState(true);
  const [academicWork, setAcademicWork] = useState(props.academicWork || {});

  const showLanguageList = (e) => {
    if (e.target.name === "personCourseLanguage") {
      setDisplayLanguageList(false);
    } else {
      setDisplayLanguageList(true);
    }
  };
  const handleAcademicWork = (e) => {
    setAcademicWork({
      ...academicWork,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.addAcademicWorkDetails(academicWork);
    history.push("/academicInfo/2");
  };

  return (
    <Modal
      onClick={showLanguageList}
      show={true}
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
          <h2>Academic Work Details</h2>
          <p className="modal-description">
            Please enter details about your academic work in the past.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Full APA7 Citation</Form.Label>
            <Form.Control
              id="personPublicationAPA"
              name="personPublicationAPA"
              type="text"
              value={academicWork["personPublicationAPA"]}
              onChange={handleAcademicWork}
              as="textarea"
              rows={3}
              data-toggle="tooltip"
              data-placement="top"
              title="Full APA7 Citation"
              placeholder=""
              aria-describedby="basic-addon3"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>DOI</Form.Label>
            <Form.Control
              id="personPublicationDOI"
              name="personPublicationDOI"
              type="text"
              value={academicWork["personPublicationDOI"]}
              onChange={handleAcademicWork}
              data-toggle="tooltip"
              data-placement="top"
              title="DOI"
              placeholder=""
              aria-describedby="basic-addon3"
            />
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url">Language</label>
                <SelectLanguage displayLanguageList={displayLanguageList} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type</Form.Label>
            <Form.Control
              id="personPublicationType"
              name="personPublicationType"
              as="select"
              value={academicWork["personPublicationType"]}
              onChange={handleAcademicWork}
              data-toggle="tooltip"
              data-placement="top"
              title="Type"
              placeholder=""
              aria-describedby="basic-addon3"
            >
              <option>Select</option>
              <option>Article</option>
              <option>Book</option>
              <option>Book Chapter</option>
              <option>Conference Paper</option>
              <option>Computer Program</option>
              <option>Report</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date </Form.Label>
            <Form.Control
              id="personPublicationDate"
              name="personPublicationDate"
              type="date"
              value={academicWork["personPublicationDate"]}
              onChange={handleAcademicWork}
              data-toggle="tooltip"
              data-placement="top"
              title="Date"
              placeholder=""
              aria-describedby="basic-addon3"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
              id="personPublicationURL"
              name="personPublicationURL"
              type="text"
              value={academicWork["personPublicationURL"]}
              onChange={handleAcademicWork}
              data-toggle="tooltip"
              data-placement="top"
              title="URL"
              placeholder=""
              aria-describedby="basic-addon3"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/academicInfo/2">
          <Button type="submit" onClick={handleSubmit}>
            Save & Next
          </Button>
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

export default connect(mapStateToPros, mapDispatchToProps)(AcademicWorkDetails);
