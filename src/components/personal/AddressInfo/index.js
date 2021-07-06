import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Modal,
} from "react-bootstrap";
import { connect } from "react-redux";
import Countries from "./Countries";

import { Link, useHistory } from "react-router-dom";

function PersonAddressInfo(props) {
  const history = useHistory();

  const [countriesOptionsOn, setCountriesOptionsOn] = useState(false);
  const [citiesOptionsOn, setCitiesOptionsOn] = useState(false);
  const [addressInfo, setAddressInfo] = useState(props.addressInfo || {});
  const handdleOptionsOn = (e) => {
    if (e.target.name === "personCountry") {
      setCountriesOptionsOn(true);
    } else if (e.target.name === "personCity") {
      setCitiesOptionsOn(true);
    } else {
      setCitiesOptionsOn(false);
      setCountriesOptionsOn(false);
    }
  };

  const handleClick = () => {
    props.addAddressInfo(addressInfo);
  };
  const handlePersonAddressInfo = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => history.push("/")}>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Personal Information</h2>
          <p className="modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            unde.
          </p>
        </Modal.Title>
      </Modal.Header>

      <Container onClick={handdleOptionsOn} className="container">
        <Card.Body>
          <Form>
            <Form.Row>
              <Col xs={12} md={12} lg={12}>
                <Form.Label>Address Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handlePersonAddressInfo}
                  value={addressInfo["personAddressType"]}
                  name="personAddressType"
                >
                  <option value="private">Private</option>
                  <option value="legal">Legal</option>
                  <option value="work">Work</option>
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Flat Number</Form.Label>
                  <Form.Control
                    name="personFlatNo"
                    value={addressInfo["personFlatNo"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Building Number</Form.Label>
                  <Form.Control
                    name="personBuildingNo"
                    value={addressInfo["personBuildingNo"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    name="personDistrict"
                    value={addressInfo["personDistrict"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    name="postalCode"
                    value={addressInfo["postalCode"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <Form.Group>
                  <Form.Label>Address Line </Form.Label>
                  <Form.Control
                    name="personStreet"
                    value={addressInfo["personStreet"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={12} lg={12}>
                <Countries
                  addressInfo={addressInfo}
                  setAddressInfo={setAddressInfo}
                  citiesOptionsOn={citiesOptionsOn}
                  countriesOptionsOn={countriesOptionsOn}
                />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>State </Form.Label>
                  <Form.Control
                    name="personState"
                    value={addressInfo["personState"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>Phone Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handlePersonAddressInfo}
                  value={addressInfo["personPhoneType"]}
                  name="personPhoneType"
                >
                  <option value="mobile">Mobile</option>
                  <option value="landline">Landline</option>
                  <option value="work">Work</option>
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Country Code</Form.Label>
                  <Form.Control
                    name="personPhoneCountryCode"
                    value={addressInfo["personPhoneCountryCode"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="personPhoneNumber"
                    value={addressInfo["personPhoneNumber"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>Email Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handlePersonAddressInfo}
                  value={addressInfo["personEmailType"]}
                  name="personEmailType"
                >
                  <option value="person">Person</option>
                  <option value="work">Work</option>
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="personEmail"
                    value={addressInfo["personEmail"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="personPhoto"
                    files={addressInfo["personPhoto"]}
                    onChange={(e) => {
                      setAddressInfo({
                        ...addressInfo,
                        [e.target.name]: e.target.files[0],
                      });
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>Platform</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handlePersonAddressInfo}
                  value={addressInfo["personEmailType"]}
                  name="personEmailType"
                >
                  <option value="website">Website</option>
                  <option value="linkedin">Linkedin</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>User Name </Form.Label>
                  <Form.Control
                    onChange={handlePersonAddressInfo}
                    value={addressInfo["personPlatformUserName"]}
                    name="personPlatformUserName"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>CV Upload</Form.Label>
                  <Form.Control
                    type="file"
                    name="personCvDoc"
                    files={addressInfo["personCvDoc"]}
                    onChange={(e) => {
                      setAddressInfo({
                        ...addressInfo,
                        [e.target.name]: e.target.files[0],
                      });
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Citizenship</Form.Label>
                  <Form.Control
                    name="personCitizenship"
                    value={addressInfo["personCitizenship"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Work Permit</Form.Label>
                  <Form.Control
                    name="personWorkPermit"
                    value={addressInfo["personWorkPermit"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                From{" "}
                <Form.Control
                  type="date"
                  name="personAvailableFrom"
                  onChange={handlePersonAddressInfo}
                  value={addressInfo["personAvailableFrom"]}
                />
              </Col>
              <Col xs={12} md={6} lg={6}>
                To
                <Form.Control
                  name="personAvailableTo"
                  onChange={handlePersonAddressInfo}
                  value={addressInfo["personAvailableTo"]}
                  type="date"
                />
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>DBS Upload</Form.Label>
                  <Form.Control
                    type="file"
                    name="personDbsDoc"
                    files={addressInfo["personDbsDoc"]}
                    onChange={(e) => {
                      setAddressInfo({
                        ...addressInfo,
                        [e.target.name]: e.target.files[0],
                      });
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Medical Declaration</Form.Label>
                  <Form.Control
                    type="file"
                    name="personMedicalDoc"
                    files={addressInfo["personMedicalDoc"]}
                    onChange={(e) => {
                      setAddressInfo({
                        ...addressInfo,
                        [e.target.name]: e.target.files[0],
                      });
                    }}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Container>
      <Modal.Footer>
        <Row className="button-container">
          <Link to="/personalInfo/1">
            <Button>Back</Button>
          </Link>

          <Link to="/">
            <Button onClick={handleClick}> Save & Next </Button>
          </Link>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = (state) => {
  return {
    addressInfo: state.personalInfoReducer.addressInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addAddressInfo: (data) =>
      dispatch({ type: "ADD_ADDRESS_INFO", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonAddressInfo);
