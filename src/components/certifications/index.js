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
const Background = (props) => {
  const history=useHistory()
  
  
  const [workExperience, setWorkExperience] = useState({});

  const handleWorkExperience = (e) => {
 
    
    setWorkExperience({
       ...workExperience, 
       [e.target.name]: e.target.value
      
      });
  };

  const handleSubmit=()=>{
   

  }
  console.log(workExperience)
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
                onChange={handleWorkExperience}
                value={workExperience['personEduFrom']}
                />
              </Col>
              <Col xs={6} md={4}>
                To
                <Form.Control
                name='personEduTo'
                onChange={handleWorkExperience}
                value={workExperience['personEduTo']}
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
                onChange={handleWorkExperience}
                value={workExperience['personInstitutionType1']}
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
                     onChange={handleWorkExperience}
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
                  name='personInstitutionWebsite'
                  onChange={handleWorkExperience}
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
                    onChange={handleWorkExperience}
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
                onChange={handleWorkExperience}
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
        > {Object.keys(workExperience).length>0?'save':'close'}  </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps=(state)=>{
  console.log(state)
  return {
    workExperience:state.workExperienceReducer.workExperience
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Background);
