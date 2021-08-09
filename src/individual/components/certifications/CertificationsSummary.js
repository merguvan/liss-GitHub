import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Certifications.css";

const certifications = [
  {
    personCertificateFrom: "10-04-2012",
    personCertificateTo: "12-04-2012",
    personCertificateHours: "12",
    personCertificateDays: "2",
    personCertificateType: "Appreciation",
    personCertificateDoc: true,
    personCertificateGrade: "",
    personCertificateTopic: "Sustainable Energy in Outer Space",
    personCertificateNumber: "1000203920012",
    personCertificationInstitutionType1: "University",
    personCertificationInstitutionType2: "State",
    personCertificationInstitutionName: "Massachusetts Institute of Technology",
    personCertificationInstitutionCity: "Cambridge",
    personCertificationInstitutionCountry: "United States of America",
    personCertificationInstitutionWebsite: "www.mit.com",
  },
  {
    personCertificateFrom: "21-02-2013",
    personCertificateTo: "22-02-2013",
    personCertificateHours: "6",
    personCertificateDays: "1",
    personCertificateType: "Attendance",
    personCertificateDoc: true,
    personCertificateGrade: "",
    personCertificateTopic:
      "Social Distancing and it's Applicability out of Pandemic Times",
    personCertificateNumber: "1000203920013",
    personCertificationInstitutionType1: "University",
    personCertificationInstitutionType2: "State",
    personCertificationInstitutionName: "Cambridge University",
    personCertificationInstitutionCity: "Cambridge",
    personCertificationInstitutionCountry: "United States of America",
    personCertificationInstitutionWebsite: "www.cu.com",
  },
];

function Certifications(props) {
  return (
    <Summary headerTitle="Certifications" url="/certifications/1">
      {certifications.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>
                    {i.personCertificationInstitutionName +
                      ", " +
                      i.personCertificationInstitutionCity +
                      ", " +
                      i.personCertificationInstitutionCountry}
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
                    Certification of Achievements on <br /> "
                    {i.personCertificateTopic}"
                  </em>
                </p>
              </div>
              <div className="person-summary-body-context-container_level_3">
                <div>
                  {" "}
                  <p>
                    {i.personCertificateFrom + " - " + i.personCertificateTo}
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
export default connect(mapStateToProps, mapDispatchToProps)(Certifications);
