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
      }} >Projects</Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control size="lg" type="text" placeholder="" />
            <Form.Label>Number</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Label>Grant Provider</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Acronym</Form.Label>
              <Form.Control placeholder="" />
            </Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
            <Col>
              <Form.Label>Total Amount</Form.Label>
              <Form.Control placeholder="" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control placeholder="" />
            </Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
            <Col>
              <Form.Label>Amount You Were Involed</Form.Label>
              <Form.Control placeholder="" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>From </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group></Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>To</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group></Form.Group>
            </Col>
          </Form.Row>

          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Form>
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