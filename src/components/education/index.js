import React, { useState } from "react";
import {
  Modal,
  Container,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";


import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/education";

const Background = (props) => {
  const history=useHistory()
  
  const {addEducation,educationInformation}=props
  
  const [education, setEducation] = useState(educationInformation||{});

  const handleEducation = (e) => {
 
    
    setEducation({
       ...education, 
       [e.target.name]: e.target.value
      
      });
  };

  const handleSubmit=()=>{
    console.log('handle Submit calisyr' ,education)
    addEducation(education)

  }
  console.log(education)
  return (
    <Modal 
    
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      
      <Modal.Header closeButton onClick={()=>{
          history.push('/')
      }} >Institution</Modal.Header>
      
      <Modal.Body className="show-grid">
        <Container>
          <Form.Group>
            <Row>
              <Col xs={6} md={4}>
						
                From <Form.Control type="date" name='personEduFrom'
                onChange={handleEducation}
                value={education['personEduFrom']}
                />
              </Col>
              <Col xs={6} md={4}>
                To
                <Form.Control
                name='personEduTo'
                onChange={handleEducation}
                value={education['personEduTo']}
                type="date" />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col xs={12} md={8}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select"
                name='personInstitutionType1'
                onChange={handleEducation}
                value={education['personInstitutionType1']}
                >
                  <option>School</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Name</Form.Label>
               
                  <FormControl
                     name='personInstitutionName'
                     value={education['personInstitutionName']}
                     onChange={handleEducation}
                  id="basic-url" aria-describedby="basic-addon3" />
            
              </Col>
            </Row>
          </Form.Group>
         
          <Form.Group>
            <Row>
              <Col xs={12} md={8}>
                <label htmlFor="basic-url">Website</label>
                <InputGroup className="mb-3">
                  <FormControl
                  value={education['personInstitutionWebsite']}
                  name='personInstitutionWebsite'
                  onChange={handleEducation}
                  id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={8}>
                <label htmlFor="basic-url">Position</label>
                <InputGroup className="mb-3">
                  <FormControl
                    name='personInstitutionPosition'
                    value={education['personInstitutionPosition']}
                    onChange={handleEducation}
                  id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Position type</Form.Label>
                <Form.Control
                name='personInstitutionPositionType1'
                onChange={handleEducation}
                as="select">
                  <option>Academic</option>
                  <option>Administrative</option>
                  <option>Teacher</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to='/' >
        <Button
        onClick={handleSubmit}
        > {Object.keys(education).length>0?'save':'close'}  </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps=({educationReducer})=>{
    
  return {
    educationInformation:educationReducer.education
  }
}

const mapDispatchToProps={
  addEducation
}
export default connect(mapStateToProps,mapDispatchToProps)(Background);