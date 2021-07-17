import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  CloseButton,
  Container,
  Col,
  Form,
} from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addAcademicWorkDetails } from "../../../actions/academicWorkDetails";
import SelectLanguage from "../../../commonModules/language/SelectLanguage";

function AcademicWorkDetails(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const {academicWork: storeAcademicWorkDetails }=useSelector((state)=>state.academicWorksDetailsReducer) ////

  const [save, setSave]=useState(false)
  const [displayLanguageList, setDisplayLanguageList] = useState(true);
  const [academicWork, setAcademicWork] = useState(storeAcademicWorkDetails|| {});
  const [show, setShow] = useState(true)

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
    console.log(academicWork)
  };

  useEffect(()=>{
    if(
      Object.values(storeAcademicWorkDetails).join("")!==
      Object.values(academicWork).join("")
    ){
      setSave(true)
    }else {
      setSave(false)
    }
  },[storeAcademicWorkDetails, academicWork])

  const handleSubmit = (e) => {
    if (Object.values(academicWork).join('').length > 0){
      console.log("data sent")
    } else {
      console.log("fill all the values")
    }
    // e.preventDefault();

    // props.addAcademicWorkDetails(academicWork);
    // history.push("/");
  };

  // const handleChange = () => {}

  return (
    <Modal
      onClick={showLanguageList}
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Academic Work Details</h2>
          <p className="modal-description">
            Please enter details about your academic work in the past.
          </p>
        </Modal.Title>
        <CloseButton
          onClick={() => {
            setShow(!show);
            history.push("/");
          }}
        />
      </Modal.Header>
      <Modal.Body>
        <Container>
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
                title="Enter the Full APA7 Citation"
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
                title="Please enter the DOI of the academic work here"
                placeholder=""
                aria-describedby="basic-addon3"
              />
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <label htmlFor="basic-url">Language</label>
                  <SelectLanguage
                    displayLanguageList={displayLanguageList}
                    onClick={showLanguageList}
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    id="personPublicationType"
                    name="personPublicationType"
                    as="select"
                    value={academicWork["personPublicationType"]}
                    onChange={handleAcademicWork}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please indicate the type of your academic work"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  >
                    <option value="select">Select</option>
                    <option value="article">Article</option>
                    <option value="book">Book</option>
                    <option value="bookchapter">Book Chapter</option>
                    <option value="conferencepaper">Conference Paper</option>
                    <option value="software">Software</option>
                    <option value="report">Report</option>
                  </Form.Control>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    id="personPublicationDate"
                    name="personPublicationDate"
                    type="date"
                    value={academicWork["personPublicationDate"]}
                    onChange={handleAcademicWork}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When was it published?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Form.Label>URL</Form.Label>
                <Form.Control
                  id="personPublicationURL"
                  name="personPublicationURL"
                  type="text"
                  value={academicWork["personPublicationURL"]}
                  onChange={handleAcademicWork}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Where can it be found online?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Form.Row>
            </Form.Group>

          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button type="submit" onClick={handleSubmit}>
          {save ? "save" : "close"}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

// const mapStateToPros = (state) => {
//   return { academicWork: state.academicWorksDetailsReducer.academicWork };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addAcademicWorkDetails: (details) =>
//       dispatch(addAcademicWorkDetails(details)),
//   };
// };

// export default connect(mapStateToPros, mapDispatchToProps)(AcademicWorkDetails);
export default AcademicWorkDetails;
