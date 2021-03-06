import React, { useState, useEffect } from "react";
import {
  Form,
  Col,
  Container,
  CloseButton,
  Button,
  Row,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Countries from "./Countries";
import { titles, maritalStatus } from "./data";
import { addPersonalInfo } from "../../../actions/personalInfoActions";
import { Link, useHistory } from "react-router-dom";

function PersonalInfo({ addressInfo, setAddressInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { personalInfo: storePersonalInfo } = useSelector(
  //   (state) => state.personalInfoReducer
  // );
  const [show, setShow] = useState(true);

  const [save, setSave] = useState(false);
  const [countriesOptionsOn, setCountriesOptionsOn] = useState(false);
  const [citiesOptionsOn, setCitiesOptionsOn] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(addressInfo);

  // useEffect(() => {
  //   if (
  //     Object.values(storePersonalInfo).join("") !==
  //     Object.values(personalInfo).join("")
  //   ) {
  //     setSave(true);
  //   } else {
  //     setSave(false);
  //   }
  // }, [storePersonalInfo, personalInfo]);

  const handleOptionsOn = (e) => {
    if (e.target.name === "personCountryOB") {
      setCountriesOptionsOn(true);
    } else if (e.target.name === "personCityOB") {
      setCitiesOptionsOn(true);
    } else {
      setCitiesOptionsOn(false);
      setCountriesOptionsOn(false);
    }
  };
  // const handleClick = () => {
  //   dispatch(addPersonalInfo(personalInfo));
  // };
  const handlePersonalInfo = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  return (
    <Container onClick={handleOptionsOn} className="container">
      <Form>
        <Form.Group>
          <Form.Row>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label data-testid="title" className="font-weight-bold">
                  {" "}
                  Title
                </Form.Label>
                <Form.Control
                  id="personTitle"
                  name="personTitle"
                  type="text"
                  value={personalInfo["personTitle"]}
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Please select your (academic) title"
                  as="select"
                >
                  {titles.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label
                  data-testid="firstName"
                  className="font-weight-bold"
                >
                  First Name
                </Form.Label>
                <Form.Control
                  id="personName"
                  name="personName"
                  type="text"
                  value={personalInfo["personName"]}
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="What is your first name?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Middle Name{" "}
                </Form.Label>
                <Form.Control
                  id="personMiddle"
                  name="personMiddle"
                  type="text"
                  value={personalInfo["personMiddle"]}
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Your middle name? (if any)"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Surname </Form.Label>
                <Form.Control
                  id="personSurname"
                  name="personSurname"
                  type="text"
                  value={personalInfo["personSurname"]}
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Your surname?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col xs={12} md={6} lg={6}>
              <Form.Label className="font-weight-bold">User Name </Form.Label>
              <Form.Control
                id="personUserName"
                name="personUserName"
                type="text"
                value={personalInfo["personUserName"]}
                onChange={handlePersonalInfo}
                data-toggle="tooltip"
                data-placement="top"
                title="The username you'd like to use for this system"
                placeholder=""
                aria-describedby="basic-addon3"
              />
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Form.Label className="font-weight-bold">
                Display Name{" "}
              </Form.Label>
              <Form.Control
                id="personDisplayName"
                name="personDisplayName"
                type="text"
                value={personalInfo["personDisplayName"]}
                onChange={handlePersonalInfo}
                data-toggle="tooltip"
                data-placement="top"
                title="How would you like to be called?"
                placeholder=""
                aria-describedby="basic-addon3"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Gender</Form.Label>
                <Form.Control
                  id="personGender"
                  name="personGender"
                  value={personalInfo["personGender"]}
                  as="select"
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="What is your gender?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                >
                  <option value="select">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Prefer Not To Say</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Martial Status
                </Form.Label>
                <Form.Control
                  id="personMaritalStatus"
                  name="personMaritalStatus"
                  value={personalInfo["personMaritalStatus"]}
                  as="select"
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="What is your marital status?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                >
                  {maritalStatus.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col xs={12} md={4} lg={4}>
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Date of Birth{" "}
                </Form.Label>
                <Form.Control
                  id="personDOB"
                  name="personDOB"
                  type="date"
                  value={personalInfo["personDOB"]}
                  onChange={handlePersonalInfo}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="What is your date of birth?"
                  placeholder=""
                  aria-describedby="basic-addon3"
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={8} lg={8}>
              <Countries
                handlePersonalInfo={handlePersonalInfo}
                citiesOptionsOn={citiesOptionsOn}
                countriesOptionsOn={countriesOptionsOn}
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}
                countryLabel="Country of Birth"
                cityLabel="City of Birth"
                countryToolTip="Your country of birth"
                cityToolTip="Your city of birth"
              />
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default PersonalInfo;
