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

  // useEffect(() => {
  //   if (
  //     Object.values(storeAddAttachment).join("") !==
  //     Object.values(addAttachment).join("")
  //   ) {
  //     setSave(true);
  //   } else {
  //     setSave(false);
  //   }
  // }, [storeAddAttachment, addAttachment]);

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
            Please upload your attachments here.
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
              <Col xs={12} md={12}>
                <Form.Label class="font-weight-bold">Type</Form.Label>
                <Form.Control
                  as="select"
                  name="personAttachmentType"
                  onChange={handleAddAttachment}
                  value={addAttachment["personAttachmentType"]}
                >
                  <option value="select">Select</option>
                  <option value="cv">CV</option>
                  <option value="dbs">DBS</option>
                  <option value="md">Medical Declaration</option>
                  <option value="photo">Photo</option>
                  <option value="diploma">Diploma</option>
                  <option value="cert">Certificate</option>
                  <option value="ref">Reference Letter</option>
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={12}>
                <label htmlFor="basic-url" class="font-weight-bold">Description</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personAttachmentDescription"
                    onChange={handleAddAttachment}
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Form.Row>
          </Form.Group>

          
          <Form.Row>
            <Form.Group>
              <Form.Label class="font-weight-bold">Attachment</Form.Label>
              <Form.Control
                type="file"
                name="personAttachment"
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
// import React from 'react'

// function index() {
//   return (
//     <div>
//       Hello
//     </div>
//   )
// }

// export default index
