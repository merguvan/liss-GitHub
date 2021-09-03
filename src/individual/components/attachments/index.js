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
import { addAttachmentAction } from "../../actions/attachments";
import { Link, useHistory } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";

const Attachments = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addAttachment: storeAddAttachment } = useSelector(
    (state) => state.attachmentReducer
  );

  const [save, setSave] = useState(false);
  const [value, setValue] = useState(null);
  const [show, setShow] = useState(true);

  const [addAttachment, setAddAttachment] = useState(storeAddAttachment || {});
  const handleAddAttachment = (e) => {
    setAddAttachment({
      ...addAttachment,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = () => {
  //   dispatch(addReferenceAction(addReference));
  // };

  useEffect(() => {
    if (
      Object.values(storeAddAttachment).join("") !==
      Object.values(addAttachment).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeAddAttachment, addAttachment]);

  const handleSubmit = () => {
    if (Object.values(addAttachment).join("").length > 0) {
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
          <h2>Attachments</h2>
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
                <Form.Label class="font-weight-bold">Title</Form.Label>
                <Form.Control
                  as="select"
                  name="personTitle"
                  onChange={handleAddAttachment}
                  value={addAttachment["personTitle"]}
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
                <Form.Label class="font-weight-bold">Full Name</Form.Label>
                <FormControl
                  name="personRefereeName"
                  onChange={handleAddAttachment}
                  id=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label class="font-weight-bold">Position</Form.Label>
                <FormControl
                  name="personRefereePosition"
                  onChange={handleAddAttachment}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url" class="font-weight-bold">Institution</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personRefereeInstitution"
                    onChange={handleAddAttachment}
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
                <Form.Label class="font-weight-bold">Email</Form.Label>
                <FormControl
                  name="personRefereeEmail"
                  onChange={handleAddAttachment}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label class="font-weight-bold">Phone Number</Form.Label>
                <FormControl
                  name="personRefereePhoneNumber"
                  onChange={handleAddAttachment}
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4}>
                <Form.Label class="font-weight-bold">Date Signed</Form.Label>
                <Form.Control
                  type="date"
                  name="personRefDateSigned"
                  onChange={handleAddAttachment}
                  value={addAttachment["personRefDateSigned"]}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Row>
            <Form.Group>
              <Form.Label class="font-weight-bold">Attachment Letter</Form.Label>
              <Form.Control
                type="file"
                name="personAttachmentLetter"
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
        <Link to="/individual">
          <Button onClick={handleSubmit}> {save ? "save" : "close"} </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Attachments;
