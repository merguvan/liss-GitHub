import React, { useState } from "react";
import {

  Form,
  Col,
  Container,
  Button,
  Row,
  Modal,
} from "react-bootstrap";
import { connect } from "react-redux";
import Countries from "./Countries";
import { titles, marialStatus } from "./data";
import { addPersonalInfo } from "../../../actions/personalInfoActions";
import { Link,  useHistory} from "react-router-dom";

function PersonalInfo(props) {
  
    const history=useHistory()
  const { addPersonalInfo} = props;
 
  const [countriesOptionsOn, setCountriesOptionsOn] = useState(false);
  const [citiesOptionsOn, setCitiesOptionsOn] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(props.personInformation||{});
  
  const handdleOptionsOn = (e) => {
    if (e.target.name === "personCountryOB") {
    
      setCountriesOptionsOn(true);
    } else if (e.target.name === "personCityOB") {
      setCitiesOptionsOn(true);
    } else {
      setCitiesOptionsOn(false);
      setCountriesOptionsOn(false);
    }
  };
  const handleClick = () => {
    
    addPersonalInfo(personalInfo);
  };
  const handlePersonalInfo = (e) => {
    // console.log(personalInfo)
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  
    
  };
// console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => history.push('/')}>
        <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
          <h2>Personal Information</h2>
          <p className='modal-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, unde.
          </p>
        </Modal.Title>
      </Modal.Header>

      <Container onClick={handdleOptionsOn} className="container">
        <Form>
          <Form.Row>
          <Col xs={12} md={6} lg={6}>
              <Form.Group>
                
                  <Form.Label
             
                > Title</Form.Label>
              
                <Form.Control
                  onChange={handlePersonalInfo}
                  name="personTitle"
                  value={personalInfo["personTitle"]}
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
                <Form.Label> First Name</Form.Label>
                <Form.Control onChange={handlePersonalInfo}
                value={personalInfo["personName"]}
                name="personName" />
              </Form.Group>
            </Col>
            ​
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label>Middle Name </Form.Label>
                <Form.Control onChange={handlePersonalInfo} 
                value={personalInfo["personMiddle"]}
                name="personMiddle" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label>Surname </Form.Label>
                <Form.Control onChange={handlePersonalInfo} 
                value={personalInfo["personSurname"]}
                name="personSurname" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label>User Name </Form.Label>
                <Form.Control onChange={handlePersonalInfo} 
                  value={personalInfo["personUserName"]}
                name="personUserName" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label>Display Name </Form.Label>
                <Form.Control onChange={handlePersonalInfo} 
                  value={personalInfo["personDisplayName"]}
                name="personDisplayName" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label>Gender </Form.Label>
                <Form.Control 
                as='select'
                onChange={handlePersonalInfo} 
                  value={personalInfo["personGender"]}
                name="personGender">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Prefer Not To Say</option>

                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label> Martial Status</Form.Label>
                <Form.Control
                  onChange={handlePersonalInfo}
                  value={personalInfo["personMaritalStatus"]}
                  name="personMaritalStatus"
                  as="select"
                >
                  {marialStatus.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form.Group>
                <Form.Label>Date Of Birth </Form.Label>
                <Form.Control
                  onChange={handlePersonalInfo}
                  name="personDOB"
                  value={personalInfo["personDOB"]}
                  type="date"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={12} lg={8}>
              <Countries
                handlePersonalInfo={handlePersonalInfo}
                citiesOptionsOn={citiesOptionsOn}
                countriesOptionsOn={countriesOptionsOn}
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
    
              />
            </Col>
          </Form.Row>
        </Form>
      </Container>
      <Modal.Footer>
        <Row className="button-container">
          <Link to='/' >
          <Button>Back</Button>
          </Link>

       
      <Link to='/personalInfo/2' >
      <Button
      type='submit' 
         onClick={handleClick}
         > Save & Next </Button>
      </Link>
         
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = (state) => {

    return{
      personInformation:state.personalInfoReducer.personalInformation.personalDetailInformation
    }
};
const mapDispatchToProps = { addPersonalInfo };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
