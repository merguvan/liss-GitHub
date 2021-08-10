import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Summary.css";

// const sample_person = {
//   Personal_Info: {
//     personTitle: "Dr. ",
//     personName: "Araz ",
//     personSurname: "Bey ",
//     personEmail: "amazing@ideas.com",
//     personDOB: "21/09/1285 ",
//     personCityOB: "Paris ",
//     personCountryOB: "France ",
//     personGender: "Male ",
//     personMaritalStatus: "Married ",
//     personHomeAddress: "St. Louis II 75, 7887SC ",
//     personPhoneNumber: "037847740 ",
//     personNationality: "American ",
//     personEuWorkPermit: true,
//     medicalDeclarationUpload: true,
//   },
//   Project: {
//     project_1: {
//       projectName: "Preventing 'Global Warming' by Blocking the Sun",
//       projectGrantedBy: "Ecuador",
//       projectSth: "HERD-7893277-2-2019-EC-EPPKAS2-SP",
//       projectDate: "1958-1959",
//     },
//     project_2: {
//       projectName:
//         "Helping the World Economy to Grow by Finding Pirate Treasures",
//       projectGrantedBy: "Caribbean",
//       projectSth: "FOOL-7893277-WW2-2-2019-EC-EPPKAS2-SP",
//       projectDate: "1888-1890",
//     },
//   },
// };

function Summary(props) {
  return (
    <Card className="person-summary">
      <Card.Header>
        <h5 className="person-summary-header">
          {props.headerTitle}
          <span>
            <Link to={props.url}>
              <AiOutlinePlus />
            </Link>
          </span>
        </h5>
      </Card.Header>
      <Card.Body className="person-summary-body">
        {/* <div className="person-summary-body-title">
          <div id="person-summary-body-title">
            {props.children[0]}
            <h6>
              Coment Out(
              {props?.SummaryInfo[2] +
                " " +
                props?.SummaryInfo[3] +
                " " +
                props?.SummaryInfo[4]})
            </h6>
          </div>
          <div className="person-summary-body-icon-container">
            <span>
              <Link to={props.url}>
                <FiEdit />
              </Link>
            </span>
            <span>
              <FiTrash />
            </span>
          </div>
        </div>
        <div className="person-summary-body-context-container">
          {props.children}
        </div> */}
        {props.children}
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(Summary);
