import React from "react";

import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Education.css";
import { useSelector } from "react-redux";

function Education(props) {
  const { educationInfo } = useSelector(
    (state) => state.userLogin.userLogin.userData
  );

  return (
    <Summary headerTitle="Education" url="/education/1">
      {[educationInfo].map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>
                    {i?.personEduInstitutionName +
                      ", " +
                      i?.personEduInstitutionCountry}
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
                <p>
                  {i?.personEduInstitutionDegree} Degree in{" "}
                  {i?.personEduInstitutionProgram}
                </p>
                {i?.personEduInstitutionDegree !== "Bachelor's" ? (
                  <em>"{i?.personEduInstitutionDegreeTitle}"</em>
                ) : (
                  ""
                )}
              </div>
              <div className="person-summary-body-context-container_level_3">
                <div>
                  {" "}
                  <p>{i?.personEduFrom + " - " + i?.personEduTo}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Summary>
  );
}

export default Education;
