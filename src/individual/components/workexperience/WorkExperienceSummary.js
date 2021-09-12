import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./WorkExperience.css";

const we = {
  personWorkFrom: "22-12-1990",
  personWorkTo: "11-11-1991",
  personWorkOngoing: false,
  personInstitutionType1: "University",
  personInstitutionType2: "State",
  personInstitutionName:
    " BlaBla University BlaBla University BlaBla University",
  personInstitutionCity: "London",
  personInstitutionCountry: "England",
  personInstitutionWebsite: "www.blabla.com",
  personInstitutionPosition:
    " Professor Professor Professor Professor Professor Professor Professor Professor",
  personInstitutionDepartment: "Bla Bla Dep.",
  personInstitutionPositionType1: "Academic",
  personInstitutionPositionType2: "Top Management",
};
const we2 = {
  personWorkFrom: "22-12-1990",
  personWorkTo: "11-11-1991",
  personWorkOngoing: false,
  personInstitutionType1: "University",
  personInstitutionType2: "State",
  personInstitutionName: "London University",
  personInstitutionCity: "London",
  personInstitutionCountry: "England",
  personInstitutionWebsite: "www.blabla.com",
  personInstitutionPosition: "Lecturer",
  personInstitutionDepartment: "Bla Bla Dep.",
  personInstitutionPositionType1: "Academic",
  personInstitutionPositionType2: "Top Management",
};
const we3 = {
  personWorkFrom: "22-12-1990",
  personWorkTo: "11-11-1991",
  personWorkOngoing: false,
  personInstitutionType1: "University",
  personInstitutionType2: "State",
  personInstitutionName: "Manchester University",
  personInstitutionCity: "Manchester",
  personInstitutionCountry: "England",
  personInstitutionWebsite: "www.blabla.com",
  personInstitutionPosition: "Lecturer",
  personInstitutionDepartment: "Bla Bla Dep.",
  personInstitutionPositionType1: "Academic",
  personInstitutionPositionType2: "Top Management",
};
const myArray = [we, we2, we3];
function WorkExperience(props) {
  return (
    <Summary headerTitle="Work Experience" url="/individual/workexperience">
      {myArray.map((we, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>
                    {we.personInstitutionName +
                      ", " +
                      we.personInstitutionCountry}
                  </p>
                </div>
              </h6>
              <div className="person-summary-body-icon-container">
                <span>
                  <Link to={"/"}>
                    <FiEdit />
                  </Link>
                </span>
                <span>
                  <FiTrash />
                </span>
              </div>
              <div className="person-summary-body-context-container_level_2">
                <p>{we.personInstitutionPosition}</p>
              </div>
              <div className="person-summary-body-context-container_level_3">
                <div>
                  {" "}
                  <p>{we.personWorkFrom + " - " + we.personWorkTo}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
