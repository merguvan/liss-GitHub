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
  ListGroup,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAttachmentInfo } from "../../actions/attachments";
import { List } from "@material-ui/core";
import { DeleteTwoTone } from "@material-ui/icons";
import { AiFillDelete } from "react-icons/ai";

const Attachments = () => {
  const [attachmentType, setAddAttachmentType] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { addAttachment: storeAddAttachment } = useSelector(
    (state) => state.attachmentReducer
  );

  const [save, setSave] = useState(false);
  const [value, setValue] = useState(null);
  const [show, setShow] = useState(true);

  const [attachments, setAttachments] = useState(storeAddAttachment || []);
  const handleAddAttachment = (e) => {
    setAttachments([
      ...attachments,
      { attachmentType, file: e.target.files[0], description },
    ]);
    setDescription("");
    setAddAttachmentType("");
  };

  const handleSubmit = () => {
    dispatch(addAttachmentInfo(attachments));
    if (2 == 3) {
      history.push("/individual");
    }
  };
  console.log(attachments);
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
            history.push("/individual");
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
                  onChange={(e) => setAddAttachmentType(e.target.value)}
                  value={attachmentType}
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
                <label htmlFor="basic-url" class="font-weight-bold">
                  Description
                </label>
                <InputGroup className="mb-3">
                  <FormControl
                    name="personAttachmentDescription"
                    onChange={(e) => setDescription(e.target.value)}
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={description}
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
                onChange={(e) => handleAddAttachment(e)}
                multiple
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <ListGroup>
              {attachments.map(({ attachmentType, file, description }, idx) => (
                <ListGroup.Item>
                  <span>{attachmentType}</span>
                  <span>{file.name}</span>
                  <span>{description}</span>
                  <AiFillDelete
                    onClick={() =>
                      setAttachments(
                        attachments.filter((el, index) => index !== idx)
                      )
                    }
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}> {save ? "save" : "close"} </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Attachments;
