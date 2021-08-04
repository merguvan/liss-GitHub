import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Education.css";

const education = [
  {
    personEduFrom:"11-11-2002",
    personEduTo:"22,12,2003",
    personEduInstitutionType1:"State",
    personEduInstitutionType2:"",
    personEduInstitutionOther:"",
    personEduInstitutionName:"University of South Wales",
    personEduInstitutionCity:"Cardiff",
    personEduInstitutionCountry:"England",
    personEduInstitutionWebsite:"www.swu.com",
    personEduInstitutionProgram:"MSc Renewable Energy and Sustainable Technology",
    personEduInstitutionDegree:"Doctoral",
    personEduInstitutionDegreeTitle:"Applicability of ISO 9001 in Higher Education",
    personEduDiploma:true,
    personAffiliatedInstitution:""
  },
  {
    personEduFrom:"19-04-1999",
    personEduTo:"20,02,2002",
    personEduInstitutionType1:"State",
    personEduInstitutionType2:"",
    personEduInstitutionOther:"",
    personEduInstitutionName:"University of Utrecht",
    personEduInstitutionCity:"Utrecht",
    personEduInstitutionCountry:"The Netherlands",
    personEduInstitutionWebsite:"www.uou.com",
    personEduInstitutionProgram:"Molecular and Biophysical Life Sciences",
    personEduInstitutionDegree:"Bachelor's",
    personEduInstitutionDegreeTitle:"BSc",
    personEduDiploma:true,
    personAffiliatedInstitution:""
    }
]
function Education(props) {
  return (
    <Summary headerTitle="Education" url="/education/1">
    {education.map((i) => {
      return (
        <div className="work_experience_block">
          <div className="person-summary-body-title"></div>
          <div className="person-summary-body-context-container">
            <h6 id="work_h6">
              <div className="person-summary-body-context-container_level_1">
                <p>
                  {i.personEduInstitutionName +
                    ", " +
                    i.personEduInstitutionCountry}
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
              <p>{i.personEduInstitutionDegree} Degree in {i.personEduInstitutionProgram}</p>
              {i.personEduInstitutionDegree !== "Bachelor's" ? 
              <em>"{i.personEduInstitutionDegreeTitle}"</em>
              : ""}
            </div>
            <div className="person-summary-body-context-container_level_3">
              <div>
                {" "}
                <p>{i.personEduFrom + " - " + i.personEduTo}</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Education);
