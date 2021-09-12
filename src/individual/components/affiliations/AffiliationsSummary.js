import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Affiliations.css";

const affiliations = [
  {
    personAffiliatedInstitution: "Harvard University",
    personAffiliationFrom: "2000-01-01",
    personAffiliationTo: "2010-01-01",
    personAffiliationType: "Full",
    personAffiliationCountry: "United States of America",
  },
  {
    personAffiliatedInstitution: "Oxford University",
    personAffiliationFrom: "2010-01-02",
    personAffiliationTo: "2020-01-01",
    personAffiliationType: "Associate",
    personAffiliationCountry: "United Kingdom",
  },
];

function Affiliations(props) {
  return (
    <Summary headerTitle="Affiliations" url="/individual/affiliations">
      {affiliations.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>
                    {i.personAffiliatedInstitution +
                      ", " +
                      i.personAffiliationCountry}
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
                  <em>
                    {i.personAffiliationType}: {i.personAffiliationFrom} -{" "}
                    {i.personAffiliationTo}
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
export default connect(mapStateToProps, mapDispatchToProps)(Affiliations);
