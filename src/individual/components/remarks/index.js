import React, { useState, useEffect } from "react";
import { Modal, CloseButton, Container, Button, Form } from "react-bootstrap";

import CountrySelect from "react-bootstrap-country-select";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const Remarks = (props) => {
  const history = useHistory();
  const { remarks: storeRemarks } = useSelector(
    (state) => state.remarksReducer
  );
  const [save, setSave] = useState(false);
  const [remarks, setRemarks] = useState(
    storeRemarks || {}
  );


//const [remarks, setRemarks] = useState({});
  const [show, setShow] = useState(true);

  const handleRemarks = (e) => {
    setRemarks({
      ...remarks,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      Object.values(storeRemarks).join("") !==
      Object.values(remarks).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeRemarks, remarks]);

  const handleSubmit = () => {
    if (Object.values(remarks).join("").length > 0) {
      console.log("calisti");
    } else {
      console.log("calismadi");
    }
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
      <Link to="/individual">
        <Button onClick={handleSubmit}> {save ? "save" : "close"} </Button>
      </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Remarks;
