import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Academic.css";

const academic = [
  {
    personPublicationType: "Book Chapter",
    personPublicationAPA:
      "Educating for the Cooperative Society: The Role of Universities, Research, and the Academic Professions in Fostering Good Citizenship. In R. Gordon, D. Antony, & C. Stephen (Eds.), The Oxford Handbook of Higher Education Systems and University Management (pp. 374-385): Oxford University Press.",
  },
  {
    personPublicationType: "Journal Article",
    personPublicationAPA:
      "Salovey, P., & Mayer, J. D. (1990). Emotional intelligence. Imagination, cognition and personality, 9(3), 185-211.",
  },
];
function AcademicWork(props) {
  return (
    <Summary headerTitle="Academic" url="/individual/academicInfo">
      {academic.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>{i.personPublicationType}</p>
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
                  <em>{i.personPublicationAPA}</em>
                </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(AcademicWork);
