import { useState } from "react";
import { Button, Modal,Row,
  Col, Form } from "react-bootstrap";
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
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Academic Work Details</h2>
          <p className="modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            unde.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Full APA7 Citation</Form.Label>
            <Form.Control
              data-toggle="tooltip"
              data-placement="top"
              title="Full APA7 Citation"
              type="text"
              value={academicWork["personPublicationAPA"]}
              name="personPublicationAPA"
              onChange={handleAcademicWork}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>DOI</Form.Label>
            <Form.Control
               data-toggle="tooltip"
               data-placement="top"
               title="DOI"
              value={academicWork["personPublicationDOI"]}
              name="personPublicationDOI"
              onChange={handleAcademicWork}
              type="text"
              placeholder=""
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
               data-toggle="tooltip"
               data-placement="top"
               title="Type"
               value={academicWork["personPublicationType"]}
               name="personPublicationType"
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
          <Form.Group>
            <Form.Label>Date </Form.Label>
            <Form.Control
               data-toggle="tooltip"
               data-placement="top"
               title="Date"
               value={academicWork["personPublicationDate"]}
               name="personPublicationDate"
               onChange={handleAcademicWork}
               type="date"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
               data-toggle="tooltip"
               data-placement="top"
               title="URL"
              value={academicWork["personPublicationURL"]}
              name="personPublicationURL"
              onChange={handleAcademicWork}
              type="text"
              placeholder=""
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