import React, { useState } from "react";
import { Modal, CloseButton, Container, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addRemarksInfo } from "../../actions/remarks";
const Remarks = (props) => {
  const history = useHistory();
  const { remarks: storeRemarks } = useSelector(
    (state) => state?.remarksReducer
  );

  const [remarks, setRemarks] = useState(storeRemarks || {});
  const dispatch = useDispatch();
  //const [remarks, setRemarks] = useState({});
  const [show, setShow] = useState(true);

  const handleRemarks = (e) => {
    setRemarks({
      ...remarks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addRemarksInfo(remarks));
  };
  return (
    <Modal
      // {...props}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Remarks</h2>
          <p className="modal-description">
            You may enter any further remarks for the LISS Administration in
            this section.
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
        <Container className="mb-3">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label class="font-weight-bold">Remarks</Form.Label>
            <Form.Control
              id="personRemarks"
              name="personRemarks"
              value={remarks["personRemarks"]}
              onChange={handleRemarks}
              data-toggle="tooltip"
              data-placement="top"
              title="Your remarks"
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="contained"
          color="blue"
          type="submit"
          onClick={handleSubmit}
        >
          {remarks?.personRemarks ? "Save" : "Close"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Remarks;
