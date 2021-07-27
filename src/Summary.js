import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit, FiTrash } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Summary.css";

const sample_person = {
  Personal_Info: {
  personTitle:"Dr. ",
  personName:"Araz ",
  personSurname:"Bey ",
  personEmail:"amazing@ideas.com",
  personDOB:"21/09/1285 ",
  personCityOB:"Paris ",
  personCountryOB:"France ",
  personGender:"Male ",
  personMaritalStatus:"Married ",
  personHomeAddress:"St. Louis II 75, 7887SC ",
  personPhoneNumber:"037847740 ",
  personNationality:"American ",
  personEuWorkPermit:true,
  medicalDeclarationUpload:true,
  },
  Project:{
    project_1:{
      projectName:"Preventing 'Global Warming' by Blocking the Sun",
      projectGrantedBy:"Ecuador",
      projectSth:"HERD-7893277-2-2019-EC-EPPKAS2-SP",
      projectDate:"1958-1959"
    },
    project_2:{
      projectName:"Helping the World Economy to Grow by Finding Pirate Treasures",
      projectGrantedBy:"Caribbean",
      projectSth:"FOOL-7893277-WW2-2-2019-EC-EPPKAS2-SP",
      projectDate:"1888-1890"
    }
  }
}

function Summary({ title, url, children }) {
  return (
    <Card className="person-summary">
      <Card.Header>
        <h5 className="person-summary-header">
          {title}
          <span>
            <Link to={url}>
              <AiOutlinePlus />
            </Link>
          </span>
        </h5>
      </Card.Header>
      <Card.Body className="person-summary-body">
        <div className="person-summary-body-title">
          <div id="person-summary-body-title">
            <h6>{sample_person.Personal_Info.personTitle} {sample_person.Personal_Info.personName} {sample_person.Personal_Info.personSurname}</h6>
          </div>
          <div className="person-summary-body-icon-container">
            <span>
              <FiEdit />
            </span>
            <span>
              <FiTrash />
            </span>
          </div>
        </div>
        <div className="person-summary-body-context-container">
          <em>
            {sample_person.Personal_Info.personGender}
            {sample_person.Personal_Info.personMaritalStatus},
            b.{sample_person.Personal_Info.personCityOB},s
            {sample_person.Personal_Info.personCountryOB},
            {sample_person.Personal_Info.personDOB}<br/>
            
            Home Adress: {sample_person.Personal_Info.person}<br/>
            Email: {sample_person.Personal_Info.personEmail}<br/>
            Citizen of {sample_person.Personal_Info.personCountryOB}<br/>
            {sample_person.Personal_Info.personEuWorkPermit&&("Can officially work in EU")}<br/>
            {sample_person.Personal_Info.medicalDeclarationUpload&&("Uploaded Medical Declaration and DBS")}<br/>

            </em>
        </div>
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(Summary);
