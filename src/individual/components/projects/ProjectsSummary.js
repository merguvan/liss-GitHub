import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Projects.css";

const projects = [
  {
    personProjectRole: "Institutional Coordinator",
    personProjectName:
      "Raising Research Capacity of Georgian HEls through Developing R&O Units",
    personProjectGrantProvider: "EU Erasmus+ KA2",
    personProjectNumber: "HERD- 598207-EPP-1-2018-1-CE-EPPKA2-CBHE-SP",
    personProjectFrom: "2019-01-01",
    personProjectTo: "2021-01-01",
  },
  {
    personProjectRole: "Project Coordinator",
    personProjectName: "Developing Software for Project Management",
    personProjectGrantProvider: "Soft Innovas",
    personProjectNumber: "SI-2018-PR-001",
    personProjectFrom: "2018-01-01",
    personProjectTo: "2021-02-03",
  },
];
function Projects(props) {
  return (
    <Summary
      headerTitle="Projects"
      value={Number("10")}
      url="/individual/projects"
    >
      {projects.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>{i.personProjectRole}</p>
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
                <p>{i.personProjectName}</p>
                {i.personProjectGrantProvider !== "" ? (
                  <em>Granted by: {i.personProjectGrantProvider}</em>
                ) : (
                  <span></span>
                )}
                {i.personProjectNumber !== "" ? (
                  <em>
                    {i.personProjectGrantProvider !== "" ? (
                      <br></br>
                    ) : (
                      <span></span>
                    )}
                    Project Number: {i.personProjectNumber}
                  </em>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="person-summary-body-context-container_level_3">
                <div>
                  <p>
                    {i.personProjectFrom !== "" ? (
                      i.personProjectFrom
                    ) : (
                      <span></span>
                    )}
                    {i.personProjectTo !== "" ? (
                      " - " + i.personProjectTo
                    ) : (
                      <span></span>
                    )}
                  </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
