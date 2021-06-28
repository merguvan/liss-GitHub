import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from 'react-icons/md';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
 function Summary({personalInfo,addressInfo}) {

  console.log()
  return (
    <Card className='person-summary'>
      <Card.Header>
        <h5>Personal Information <span>
          <Link to='/personalInfo/1'>
          <MdEdit/>
          </Link>
           </span> </h5>
    
      </Card.Header>
      <Collapse
      in={[...Object.keys(personalInfo),...Object.keys(addressInfo)].some(element=>element.length>0)}
      
      >
      <div className="person-summary-container">
        <div className='person-image-container' >
          <img src={addressInfo.personPhto} alt="" className="person-image" />
        </div>
        <div className="person-name-container">
          
          <p> <span>{personalInfo.personTitle}</span>{personalInfo.personName+' '+personalInfo.personSurname}</p>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="person-location-container">
          <p>{addressInfo.personCountry}</p>
          <p>Open to Work</p>
        </div>
        <div className="person-contact-container">
          <span>Phone:</span>
          <p>{addressInfo.personPhoneNumber}</p>
          <span>email:</span>
          <p>{addressInfo.personEmail}</p>
        </div>
      </div>
      </Collapse>
    </Card>
  );
}
const mapStateToProps=(state)=>{
  return{
    personalInfo:state.personalInfoReducer.personalInformation.personalDetailInformation,
    
    addressInfo:state.personalInfoReducer.personalInformation.addressInformation
  }
}
const mapDispatchToProps={

}
export default connect(mapStateToProps,mapDispatchToProps)(Summary)
