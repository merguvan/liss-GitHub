import React, { useState } from "react";
import { Modal, Container, Button, Form } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Remarks = (props) => {
  const history = useHistory();

  const [remarks, setRemarks] = useState({});

  const handleRemarks = (e) => {
    setRemarks({
      ...remarks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};
  console.log(remarks);
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
        Remarks
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              value={remarks["personRemarks"]}
              name="personRemarks"
              onChange={handleRemarks}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}>
            {" "}
            {Object.keys(remarks).length > 0 ? "save" : "close"}{" "}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    remarks: state.remarksReducer.remarks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Remarks);
