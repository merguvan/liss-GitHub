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
      }} >Achievement Details</Modal.Header>
      
      <Modal.Body className="show-grid">
        <Container>
        <Form.Group>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Granted by</Form.Label>
               
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
                <Form.Label>Achievement</Form.Label>
               
                  <FormControl
                     name='personInstitutionName'
                     onChange={handleWorkExperience}
                  id="basic-url" aria-describedby="basic-addon3" />
            
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={6} md={4}>
						
                Date <Form.Control type="date" name='personEduFrom'
                onChange={handleWorkExperience}
                value={workExperience['personEduFrom']}
                />
              </Col>
              
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={12} md={8}>
                <Form.Label>Country</Form.Label>
               
                  <FormControl
                     name='personInstitutionName'
                     onChange={handleWorkExperience}
                  id="basic-url" aria-describedby="basic-addon3" />
            
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