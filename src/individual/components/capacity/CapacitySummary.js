import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Capacity.css";

const capacity = [
  {
    personCourseName: "Quality Management",
    personCourseLanguage: "English",
    personCourseLevel: "Bachelor's",
    personAvailableFrom: "2021-10-05",
    personAvailableTo: "2021-12-05",
  },
  {
    personCourseName: "Educational Technologies",
    personCourseLanguage: "English",
    personCourseLevel: "Doctoral",
    personAvailableFrom: "2021-05-08",
    personAvailableTo: "2021-08-31",
  },
];

const personTheses = [
  {
    personThesisLevel: "Doctoral",
    personSupervisedThesisLanguage: "English",
  },
  {
    personThesisLevel: "Master's",
    personSupervisedThesisLanguage: "Turkish",
  },
];

function Capacity(props) {
  return (
    <Summary
      headerTitle="Teaching / Thesis Supervision Possibilities"
      url="/individual/capacity"
    >
      {capacity.map((i, index) => {
        return (
          <div key={index} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              {index === 0 ? (
                <h6 id="work_h6">
                  <div className="person-summary-body-context-container_level_1">
                    <p>Courses that can be offered</p>
                  </div>
                </h6>
              ) : (
                <span></span>
              )}
              {index === 0 ? (
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
              ) : (
                ""
              )}

              {i.personCourseName !== "" ? (
                <div className="person-summary-body-context-container_level_2">
                  <p>
                    <em>
                      {i.personCourseName}
                      {i.personCourseLanguage !== ""
                        ? " in " + i.personCourseLanguage
                        : ""}
                      {i.personCourseLevel !== ""
                        ? ", " + i.personCourseLevel + " Level"
                        : ""}
                    </em>
                  </p>
                  {i.personAvailableFrom !== "" ? (
                    <p>
                      Avaliable to teach:{" "}
                      <em>
                        {i.personAvailableFrom} - {i.personAvailableTo}
                      </em>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        );
      })}
      <h6 id="work_h6">
        <div className="person-summary-body-context-container_level_1">
          <p>Supervision Possibilities</p>
        </div>
      </h6>
      <div className="person-summary-body-icon-container person-summary-body-context-container_level_2">
        <span>
          <Link to={"/"}>
            <FiEdit />
          </Link>
        </span>
        <span>
          <FiTrash />
        </span>
      </div>
      {personTheses.length > 0 ? (
        <div className="person-summary-body-context-container_level_2">
          <p>
            {personTheses.map((i, index) =>
              index > 0
                ? ", " + i.personThesisLevel + " Level"
                : i.personThesisLevel + " Level"
            )}
          </p>
        </div>
      ) : (
        ""
      )}
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Capacity);
