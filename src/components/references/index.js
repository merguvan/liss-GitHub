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
} from "react-bootstrap";
import { addReferenceAction } from "../../actions/reference";
import { Link, useHistory } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";

const References = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addReference: storeAddReference } = useSelector(
    (state) => state.referenceReducer
  );

  const [save, setSave] = useState(false);
  const [value, setValue] = useState(null);
  const [show, setShow] = useState(true);

  const [addReference, setAddReference] = useState(storeAddReference || {});
  const handleAddReference = (e) => {
    setAddReference({
      ...addReference,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = () => {
  //   dispatch(addReferenceAction(addReference));
  // };

  useEffect(() => {
    if (
      Object.values(storeAddReference).join("") !==
      Object.values(addReference).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeAddReference, addReference]);

  const handleSubmit = () => {
    if (Object.values(addReference).join("").length > 0) {
      console.log("calisti");
    } else {
      console.log("calismadi");
    }
  };

  return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>References</h2>
          <p className="modal-description">
            Please upload your reference letters here.
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
          <Form.Group>
            <Form.Row>
              <Col xs={12} md={4}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="select"
                  name="personTitle"
                  onChange={handleAddReference}
                  value={addReference["personTitle"]}
                >
                  <option value="select">Select</option>
                  <option value="ms">Ms</option>
                  <option value="mr">Mr</option>
                  <option value="prof">Prof.Dr.</option>
                  <option value="assocprof">Assoc.Prof.Dr</option>
                  <option value="assistprof">Assist.Prof.Dr</option>
                  <option value="dr">Dr</option>
                </Form.Control>
              </Col>

              <Col xs={12} md={4}>
                <Form.Label>Full Name</Form.Label>
                <FormControl
                  name="personRefereeName"
                  onChange={handleAddReference}
                  id=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label>Position</Form.Label>
                <FormControl
                  name="personRefereePosition"
                  onChange={handleAddReference}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
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
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={4}>
                <Form.Label>Email</Form.Label>
                <FormControl
                  name="personRefereeEmail"
                  onChange={handleAddReference}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label>Phone Number</Form.Label>
                <FormControl
                  name="personRefereePhoneNumber"
                  onChange={handleAddReference}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label>Date Signed</Form.Label>
                <Form.Control
                  type="date"
                  name="personRefDateSigned"
                  onChange={handleAddReference}
                  value={addReference["personRefDateSigned"]}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Row>
            <Form.Group>
              <Form.Label>Reference Letter</Form.Label>
              <Form.Control
                type="file"
                name="personReferenceLetter"
                // files={addressInfo['personPhoto']}
                onChange={(e) => {
                  //setAddressInfo({ ...addressInfo, [e.target.name]: e.target.files[0] });
                }}
              />
            </Form.Group>
          </Form.Row>
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

export default References;
