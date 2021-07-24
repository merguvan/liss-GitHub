import React, { useState, useEffect } from "react";
import {
  Modal,
  Container,
  Button,
  CloseButton,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import CountrySelect from "react-bootstrap-country-select";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";

import { Link, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";

const Affiliations = (props) => {
  const history = useHistory();
  const { affiliations: storeAffiliations } = useSelector(
    (state) => state.affiliationsReducer
  );
  const [save, setSave] = useState(false);
  const [ongoing, setOngoing] = useState(false);
  // const [value, setValue] = useState(null);
  const [affiliations, setAffiliations] = useState(
    storeAffiliations || {}
  );

  // const [affiliations, setAffiliations] = useState({});
  const [show, setShow] = useState(true);

  const handleAffiliations = (e) => {
    setAffiliations({
      ...affiliations,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      Object.values(storeAffiliations).join("") !==
      Object.values(affiliations).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeAffiliations, affiliations]);

  const handleSubmit = () => {
    if (Object.values(affiliations).join("").length > 0) {
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
          <h2>Affiliation</h2>
          <p className="modal-description">
            Please provide details about the organizations you are affiliated
            to.
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
          <Form>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label class="font-weight-bold">Institution</Form.Label>
                  <FormControl
                    id="personAffiliatedInstitution"
                    name="personAffiliatedInstitution"
                    type="text"
                    value={affiliations["personAffiliatedInstitution"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="To which Institution are you affiliated to?"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  From{" "}
                  <Form.Control
                    id="personAffiliationFrom"
                    name="personAffiliationFrom"
                    type="date"
                    value={affiliations["personAffiliationFrom"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Affiliation started from ..."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  To
                  <Form.Control
                    id="personAffiliationTo"
                    name="personAffiliationTo"
                    type="date"
                    value={affiliations["personAffiliationTo"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    placeholder=""
                    disabled={ongoing}
                    aria-describedby="basic-addon3"
                  />
                  <Form.Check
                    id="personWorkOngoing"
                    name="personWorkOngoing"
                    type="checkbox"
                    value={affiliations["personWorkOngoing"]}
                    onClick={() => {
                      setOngoing(!ongoing);
                      setAffiliations({
                        ...affiliations,
                        personWorkTo: "",
                      });
                    }}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Still working there?"
                    placeholder=""
                    label="ongoing"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="exampleForm.ControlSelect">
                    <Form.Label class="font-weight-bold">Type</Form.Label>
                    <Form.Control
                      id="personAffiliationType"
                      name="personAffiliationType"
                      as="select"
                      value={affiliations["personAffiliationType"]}
                      onChange={handleAffiliations}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="What is your affiliation type?"
                      placeholder=""
                      aria-describedby="basic-addon3"
                    >
                      <option value="select">Select</option>
                      <option value="">Member</option>
                      <option value="associate">Associate</option>
                      <option value="fellow">Fellow</option>
                      <option value="honour">Honour</option>
                      <option value="emeritus">Emeritus</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label class="font-weight-bold">Other?</Form.Label>
                  <FormControl
                    id="personAffiliationOthers1"
                    name="personAffiliationOthers1"
                    type=""
                    value={affiliations["personAffiliationOthers1"]}
                    onChange={handleAffiliations}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please enter the type of affiliation that you could not find in the list."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={12}>
                  <Form.Label>Country</Form.Label>

                  <CountrySelect
                    id="personAffiliationCountry"
                    name="personAffiliationCountry"
                    className="country"
                    value={affiliations["personAffiliationCountry"]}
                    onChange={handleAffiliations}
                    noMatchesText
                    data-toggle="tooltip"
                    data-placement="top"
                    placeholder=""
                    aria-describedby="basic-addon3"
                    title="In which country is the institution you are affiliated located?"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}> {save ? "Save" : "Close"} </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Affiliations;
