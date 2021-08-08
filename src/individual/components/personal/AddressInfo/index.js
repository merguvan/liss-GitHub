import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  CloseButton,
  Container,
  Form,
  Row,
  Modal,
  Alert,
  Accordion,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Countries from "./Countries";
import PersonalInfo from "../personalInfo/index";
import { addAddressInfo } from "../../../actions/addressInfo";
import { Link, useHistory } from "react-router-dom";

function PersonAddressInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addressInfo: storeAddressInfo } = useSelector(
    (state) => state.personalInfoReducer
  );
  const [context, setContext] = useState("");
  const [validation, setValidation] = useState(false);
  const [save, setSave] = useState(false);
  const [show, setShow] = useState(true);
  const [countriesOptionsOn, setCountriesOptionsOn] = useState(false);
  const [citiesOptionsOn, setCitiesOptionsOn] = useState(false);
  const [addressInfo, setAddressInfo] = useState({ ...storeAddressInfo } || {});
  const [workPermits, setWorkPermits] = useState(
    addressInfo?.personWorkPermit?.split(";").length || 1
  );
  const [workPermitsArray, setWorkPermitsArray] = useState(
    Array.from({ length: workPermits }, (_, i) => i + 1)
  );

  const [workPermitValue, setWorkPermitValue] = useState(
    (addressInfo?.personWorkPermit &&
      Object.fromEntries(
        addressInfo.personWorkPermit
          ?.split(";")
          ?.map((value, idx) => [`workPermit${idx + 1}`, value])
      )) ||
      {}
  );
  const [buttonDisabilty, setButtonDisablity] = useState(true);
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
  useEffect(() => {
    setWorkPermitsArray(Array.from({ length: workPermits }, (_, i) => i + 1));
  }, [workPermits]);
  useEffect(() => {
    checkButton();
  }, [workPermitsArray.length]);
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
    checkButton();
    if (e.target.name.startsWith("workPermit")) {
      setWorkPermitValue({
        ...workPermitValue,
        [e.target.name]: e.target.value,
      });

      setAddressInfo({
        ...addressInfo,
        personWorkPermit: Object.values(workPermitValue).join(";"),
      });
    } else {
      setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFileUpload = (e) => {
    const fileSize = e.target.files[0].size / 1024 > 500;

    if (fileSize) {
      setAddressInfo({
        ...addressInfo,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setValidation(true);
      setContext("Please, upload smaller file");
    }
  };
  const checkButton = () => {
    setButtonDisablity(
      [...document.querySelectorAll(".workPermit")].some(
        (el) => el?.value === ""
      ) ||
        document.querySelector(`#personWorkPermit${workPermitsArray.length}`)
          ?.value === ""
    );
  };
  const handleMinusClick = (event, el) => {
    setWorkPermitsArray(workPermitsArray.filter((minus) => minus !== el));
    setWorkPermits((prev) => prev - 1);
    const tempObject = { ...workPermitValue };
    delete tempObject[`workPermit${el}`];
    setWorkPermitValue(tempObject);
  };
  console.log(workPermitValue);
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
      {validation && <Alert variant="danger">{context}</Alert>}
      <Container onClick={handleOptionsOn} className="container">
        <Form>
          <Tabs
            defaultActiveKey="personalInfo"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="personalInfo" title="Personal">
              <PersonalInfo
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}
              />
            </Tab>

            <Tab eventKey="address" title="Address">
              <Form.Group>
                <br />
                <Form.Row>
                  <Col xs={12} md={4} lg={4}>
                    <Form.Label class="font-weight-bold">
                      Address Type
                    </Form.Label>
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
                    <Form.Label class="font-weight-bold">
                      Flat Number
                    </Form.Label>
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
                    <Form.Label class="font-weight-bold">
                      Building Number
                    </Form.Label>
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
                    <Form.Label class="font-weight-bold">District</Form.Label>
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
                    <Form.Label class="font-weight-bold">Zip Code</Form.Label>
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
                    <Form.Label class="font-weight-bold">
                      Street Name
                    </Form.Label>
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
                      <Form.Label class="font-weight-bold">State</Form.Label>
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
            </Tab>

            <Tab eventKey="citizenshipAndWorkPermit" title="Work Permit">
              <Form.Group>
                <Form.Row>
                  <Col xs={12} md={6} lg={6}>
                    <Form.Label class="font-weight-bold">
                      Citizenship
                    </Form.Label>
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
                    <Form.Label>
                      {"Work Permit"}
                      <Button
                        disabled={buttonDisabilty}
                        onClick={() => {
                          setWorkPermits((prev) => prev + 1);
                        }}
                      >
                        Plus
                      </Button>{" "}
                    </Form.Label>
                    {workPermitsArray.map((el, idx) => (
                      <>
                        <Form.Control
                          id={`personWorkPermit${el}`}
                          className="workPermit"
                          name={`workPermit${el}`}
                          type="text"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Please enter the country you can work in."
                          placeholder=""
                          aria-describedby="basic-addon3"
                          value={workPermitValue[`workPermit${el}`]}
                          onChange={handlePersonAddressInfo}
                        />
                        {el !== 1 && el === workPermitsArray.length && (
                          <Button
                            onClick={(event) => handleMinusClick(event, el)}
                          >
                            Minus
                          </Button>
                        )}
                      </>
                    ))}

                    {/* <Form.Label class="font-weight-bold">Work-permit</Form.Label>
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
                /> */}
                  </Col>
                </Form.Row>
              </Form.Group>
            </Tab>

            <Tab eventKey="phone" title="Phone">
              <Form.Group>
                <Form.Row>
                  <Col xs={12} md={4} lg={4}>
                    <Form.Label class="font-weight-bold">Phone Type</Form.Label>
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
                      <Form.Label class="font-weight-bold">
                        Country Code
                      </Form.Label>
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
                      <Form.Label class="font-weight-bold">
                        Phone Number
                      </Form.Label>
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
            </Tab>

            <Tab eventKey="email" title="Email">
              <Form.Group>
                <Form.Row>
                  <Col xs={12} md={6} lg={6}>
                    <Form.Label class="font-weight-bold">Email Type</Form.Label>
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
                    <Form.Label class="font-weight-bold">Email</Form.Label>
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
            </Tab>

            <Tab eventKey="socialMedia" title="Social Media">
              <Form.Group>
                <Form.Row>
                  <Col xs={12} md={6} lg={6}>
                    <Form.Label class="font-weight-bold">
                      Social Media / Platforms
                    </Form.Label>
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
                      <Form.Label class="font-weight-bold">
                        (User) Name
                      </Form.Label>
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
            </Tab>

            <Tab eventKey="attachments" title="Attachments">
              <Form.Group>
                <Form.Row>
                  <Col xs={12} md={6} lg={6}>
                    <Form.Label class="font-weight-bold">CV Upload</Form.Label>
                    <Form.Control
                      id="personCvDoc"
                      name="personCvDoc"
                      type="file"
                      files={addressInfo["personCvDoc"]}
                      onChange={handleFileUpload}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Please upload your CV in pdf format."
                    />
                  </Col>

                  <Col xs={12} md={6} lg={6}>
                    <Form.Label class="font-weight-bold">Photo</Form.Label>
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
                    <Form.Label class="font-weight-bold">DBS Upload</Form.Label>
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
                      <Form.Label class="font-weight-bold">
                        Medical Declaration
                      </Form.Label>
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
            </Tab>
          </Tabs>
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
