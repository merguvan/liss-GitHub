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
  const history=useHistory()
    
 
  const [countriesOptionsOn, setCountriesOptionsOn] = useState(false);
  const [citiesOptionsOn, setCitiesOptionsOn] = useState(false);
  const [addressInfo, setAddressInfo] = useState(props.personAddressInfo||{});
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
    props.addAddressInfo(addressInfo)
   
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
<Modal.Header closeButton onClick={() => history.push('/')}>
        <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
          <h2>Address Information</h2>
          <p className='modal-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, unde.
          </p>
        </Modal.Title>
      </Modal.Header>


      <Container onClick={handdleOptionsOn} className="container">
        <Card.Body>
          <Form>
            <Form.Row>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    name="personStreet1"
                    value={addressInfo["personStreet1"]}
                    onChange={handlePersonAddressInfo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    name="personStreet2"
                    value={addressInfo["personStreet2"]}
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
              <Col xs={6} md={4} lg={4}>
        <Form.Group>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
          name='postalCode'
          value={addressInfo['postalCode']}
          onChange={handlePersonAddressInfo}
          />
        </Form.Group>
      </Col>
      <Col xs={6} md={4} lg={4}>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
          name='personPhoneNumber'
          value={addressInfo['personPhoneNumber']}
          onChange={handlePersonAddressInfo}
          />
        </Form.Group>
      </Col>
      <Col xs={6} md={4} lg={4}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
          name='personEmail'
          value={addressInfo['personEmail']}
          onChange={handlePersonAddressInfo}
          />
        </Form.Group>
      </Col>
      <Col xs={12} md={4} lg={4}>
        <Form.Group>
          <Form.Label>Photo</Form.Label>
          <Form.Control
          type='file'
          name='personPhoto'
         files={addressInfo['personPhoto']}
          onChange={(e)=>{
             
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.files[0] });

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
          <Link to='/personalInfo/1' >
          <Button>Back</Button>
          </Link>

         <Link to='/'>
         <Button onClick={handleClick}> Save & Next </Button>
         </Link>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = (state) => {
   
  return{
    personAddressInfo:state.personalInfoReducer.personalInformation.addressInformation
  }
};
const mapDispatchToProps =(dispatch)=> {
 return{
  addAddressInfo:(data)=>dispatch({type:'ADD_ADDRESS_INFO',payload:data})
 }
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonAddressInfo);