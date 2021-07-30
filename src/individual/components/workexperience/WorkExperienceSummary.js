import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "/Users/hilalnur/Desktop/LISS/liss/liss-GitHub/src/Summary.css"

const we = {
  personWorkFrom:"22-12-1990",
  personWorkTo:"11-11-1991",
  personWorkOngoing:false,
  personInstitutionType1:"University",
  personInstitutionType2:"State",
  personInstitutionName:"BlaBla University",
  personInstitutionCity:"London",
  personInstitutionCountry:"England",
  personInstitutionWebsite:"www.blabla.com",
  personInstitutionPosition:"Professor",
  personInstitutionDepartment:"Bla Bla Dep.",
  personInstitutionPositionType1:"Academic",
  personInstitutionPositionType2:"Top Management"
}
const we2={
  personWorkFrom:"22-12-1990",
  personWorkTo:"11-11-1991",
  personWorkOngoing:false,
  personInstitutionType1:"University",
  personInstitutionType2:"State",
  personInstitutionName:"London University",
  personInstitutionCity:"London",
  personInstitutionCountry:"England",
  personInstitutionWebsite:"www.blabla.com",
  personInstitutionPosition:"Lecturer",
  personInstitutionDepartment:"Bla Bla Dep.",
  personInstitutionPositionType1:"Academic",
  personInstitutionPositionType2:"Top Management"
}
const myArray=[we, we2]
function WorkExperience(props) {
  return (
    <Summary headerTitle="Work Experience" url="/workexperience/1">
      {myArray.map((we)=>{return <div><div className="person-summary-body-title">
        </div>
        <div className="person-summary-body-context-container">
        <h6>
          <em>
            {we.personInstitutionName+", "+we.personInstitutionCountry}
          </em>
        </h6><div className="person-summary-body-icon-container">
            <span>
              <Link to={"/"}>
                <FiEdit />
              </Link>
            </span>
            <span>
              <FiTrash />
            </span>
          </div>
        <em>
          {we.personInstitutionPosition}
        </em>
        <div className="person-summary-body-context-container_level_2">
         <em> {we.personWorkFrom +" - "+ we.personWorkTo}</em>
         </div>
        </div></div>})}
       
      
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);