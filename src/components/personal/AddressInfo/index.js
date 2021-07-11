import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  CloseButton,
  Container,
  Form,
  Row,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Countries from "./Countries";
import { addAddressInfo } from "../../../actions/addressInfo";
import { Link, useHistory } from "react-router-dom";

function PersonAddressInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addressInfo: storeAddressInfo } = useSelector(
    (state) => state.personalInfoReducer
  );

  const [save, setSave] = useState(false);
  const [show, setShow] = useState(true);
  const [countriesOptionsOn, setCountriesOptionsOn] = useState(false);
  const [citiesOptionsOn, setCitiesOptionsOn] = useState(false);
  const [addressInfo, setAddressInfo] = useState(storeAddressInfo || {});

  useEffect(() => {
    if (
      Object.values(storeAddressInfo).join("") !==
      Object.values(addressInfo).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeAddressInfo, addressInfo]);

  const handleOptionsOn = (e) => {
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
    dispatch(addAddressInfo(addressInfo));
  };
  const handlePersonAddressInfo = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Personal Information - 2</h2>
          <p className="modal-description">
            Please enter your personal information.
          </p>
        </Modal.Title>
        <CloseButton
          onClick={() => {
            setShow(!show);
            history.push("/");
          }}
        />
      </Modal.Header>

      <Container onClick={handleOptionsOn} className="container">
        <Form>
          <Form.Group>
            <br />
            <h6>Address Group</h6>
            <hr />
            <Form.Row>
              <Col xs={12} md={4} lg={4}>
                <Form.Label>Address Type</Form.Label>
                <Form.Control
                  id="personAddressType"
                  name="personAddressType"
                  as="select"
                  value={addressInfo["personAddressType"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="What kind of address this one is?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                >
                  <option value="select">Select</option>
                  <option value="private">Private</option>
                  <option value="legal">Legal</option>
                  <option value="work">Work</option>
                </Form.Control>
              </Col>

              <Col xs={12} md={4} lg={4}>
                <Form.Label>Flat Number</Form.Label>
                <Form.Control
                  id="personFlatNo"
                  name="personFlatNo"
                  type="text"
                  value={addressInfo["personFlatNo"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter your flat/apartment number here (if any)."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4} lg={4}>
                <Form.Label>Building Number</Form.Label>
                <Form.Control
                  id="personBuildingNo"
                  name="personBuildingNo"
                  type="text"
                  value={addressInfo["personBuildingNo"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter your building number."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={4} lg={4}>
                <Form.Label>District</Form.Label>
                <Form.Control
                  id="personDistrict"
                  name="personDistrict"
                  type="text"
                  value={addressInfo["personDistrict"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter the district here (if any)."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4} lg={4}>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={addressInfo["postalCode"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter the postal/zip code here (if any)."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={4} lg={4}>
                <Form.Label>Street Name</Form.Label>
                <Form.Control
                  id="personStreet"
                  name="personStreet"
                  type="text"
                  value={addressInfo["personStreet"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter the name of the street/avenue here."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={8} lg={8}>
                <Countries
                  id="personCountry"
                  name="personCountry"
                  type="text"
                  addressInfo={addressInfo}
                  setAddressInfo={setAddressInfo}
                  citiesOptionsOn={citiesOptionsOn}
                  countriesOptionsOn={countriesOptionsOn}
                  countryLabel="Country of residence"
                  cityLabel="City"
                  countryToolTip="Country of residence"
                  cityToolTip="City of residence"
                />
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    id="personState"
                    name="personState"
                    type="text"
                    value={addressInfo["personState"]}
                    onChange={handlePersonAddressInfo}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="State (if any)"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>
          <h6>Citizenship and Work-permit</h6>
          <hr />
          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>Citizenship</Form.Label>
                <Form.Control
                  id="personCitizenship"
                  name="personCitizenship"
                  type="text"
                  value={addressInfo["personCitizenship"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter your citizenship."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Label>Work-permit</Form.Label>
                <Form.Control
                  id="personWorkPermit"
                  name="personWorkPermit"
                  type="text"
                  value={addressInfo["personWorkPermit"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please enter the country you can work in."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={4} lg={4}>
                <Form.Label>Phone Type</Form.Label>
                <Form.Control
                  id="personPhoneType"
                  name="personPhoneType"
                  as="select"
                  value={addressInfo["personPhoneType"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please select your phone type."
                  placeholder=""
                  aria-describedby="basic-addon3"
                >
                  <option value="select">Select</option>
                  <option value="mobile">Mobile</option>
                  <option value="landline">Landline</option>
                  <option value="work">Work</option>
                </Form.Control>
              </Col>

              <Col xs={12} md={4} lg={4}>
                <Form.Group>
                  <Form.Label>Country Code</Form.Label>
                  <Form.Control
                    id="personPhoneCountryCode"
                    name="personPhoneCountryCode"
                    type="text"
                    value={addressInfo["personPhoneCountryCode"]}
                    onChange={handlePersonAddressInfo}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please enter the country code."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={4} lg={4}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    id="personPhoneNumber"
                    name="personPhoneNumber"
                    type="text"
                    value={addressInfo["personPhoneNumber"]}
                    onChange={handlePersonAddressInfo}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please enter your phone number."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>

          <br />
          <h6>Contact</h6>
          <hr />
          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>Email Type</Form.Label>
                <Form.Control
                  id="personEmailType"
                  name="personEmailType"
                  as="select"
                  value={addressInfo["personEmailType"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please select your email type."
                  placeholder=""
                  aria-describedby="basic-addon3"
                >
                  <option value="select">Select</option>
                  <option value="person">Person</option>
                  <option value="work">Work</option>
                </Form.Control>
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id="personEmail"
                  name="personEmail"
                  type="text"
                  value={addressInfo["personEmail"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please type your email."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>Social Media / Platforms</Form.Label>
                <Form.Control
                  id="personEmailType"
                  name="personEmailType"
                  as="select"
                  value={addressInfo["personEmailType"]}
                  onChange={handlePersonAddressInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please select the social media"
                  placeholder=""
                  aria-describedby="basic-addon3"
                >
                  <option value="select">Select</option>
                  <option value="website">Website</option>
                  <option value="linkedin">Linkedin</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                </Form.Control>
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>(User) Name</Form.Label>
                  <Form.Control
                    id="personPlatformUserName"
                    name="personPlatformUserName"
                    type="text"
                    value={addressInfo["personPlatformUserName"]}
                    onChange={handlePersonAddressInfo}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please enter your user name for the selected platform."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>

          <br />
          <h6>Attachments</h6>
          <hr />
          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>CV Upload</Form.Label>
                <Form.Control
                  id="personCvDoc"
                  name="personCvDoc"
                  type="file"
                  files={addressInfo["personCvDoc"]}
                  onChange={(e) => {
                    setAddressInfo({
                      ...addressInfo,
                      [e.target.name]: e.target.files[0],
                    });
                  }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please upload your CV in pdf format."
                />
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  id="personPhoto"
                  name="personPhoto"
                  type="file"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Your photo here."
                  files={addressInfo["personPhoto"]}
                  onChange={(e) => {
                    setAddressInfo({
                      ...addressInfo,
                      [e.target.name]: e.target.files[0],
                    });
                  }}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Label>DBS Upload</Form.Label>
                <Form.Control
                  id="personDbsDoc"
                  name="personDbsDoc"
                  type="file"
                  files={addressInfo["personDbsDoc"]}
                  onChange={(e) => {
                    setAddressInfo({
                      ...addressInfo,
                      [e.target.name]: e.target.files[0],
                    });
                  }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please upload your DBS (for UK) in pdf format."
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Col>

              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Medical Declaration</Form.Label>
                  <Form.Control
                    id="personMedicalDoc"
                    name="personMedicalDoc"
                    type="file"
                    files={addressInfo["personMedicalDoc"]}
                    onChange={(e) => {
                      setAddressInfo({
                        ...addressInfo,
                        [e.target.name]: e.target.files[0],
                      });
                    }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Please upload your medical declaration in pdf format."
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </Container>
      <Modal.Footer>
        <Row className="button-container">
          <Link to="/personalInfo/1">
            <Button>Back</Button>
          </Link>

          <Link to="/">
            <Button onClick={handleClick}> {save ? "save" : "close"} </Button>
          </Link>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export default PersonAddressInfo;
