import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./References.css";

const references = [
  {
    referenceId: "1",
    personRefereeName: "Isaac Newton",
    personTitle: "Sir",
    personRefereeInstitution: "University of Amsterdam",
    personRefereePosition: "Prof.",
    personRefereeDate: "20-02-2020",
    personRefereeEmail: "isaac@gmail.com",
    personRefereePhoneNumber: "(012)34567890",
  },
  {
    referenceId: "2",
    personRefereeName: "Albert Einstein",
    personTitle: "Mr.",
    personRefereeInstitution: "Goethe University",
    personRefereePosition: "Prof.",
    personRefereeDate: "20-02-2020",
    personRefereeEmail: "albert@gmail.com",
    personRefereePhoneNumber: "(098)76543210",
  },
  {
    referenceId: "3",
    personRefereeName: "Stephen Hawking",
    personTitle: "Mr.",
    personRefereeInstitution: "Harvard University",
    personRefereePosition: "Prof.Dr.",
    personRefereeDate: "20-02-2020",
    personRefereeEmail: "stephen@gmail.com",
    personRefereePhoneNumber: "(024)68135790",
  },
];
function References(props) {
  return (
    <Summary headerTitle="References" url="/references/1">
      {references.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>Reference {i.referenceId}</p>
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
                  <em>
                    {i.personRefereePosition} {i.personRefereeName},{" "}
                    {i.personRefereeInstitution}
                  </em>
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
export default connect(mapStateToProps, mapDispatchToProps)(References);
