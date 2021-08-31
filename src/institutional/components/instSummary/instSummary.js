import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import data from "../../../individual/components/personal/personaldata.json";



function InstSummary({ personalInfo, addressInfo }) {
  const { Personal_Info } = data;
  return (
    <>
      <Summary value="100" headerTitle="Personal Info" url="/personalInfo/1">
        <h6 className="person-summary-body-context-container_level_1">
          {Personal_Info.personTitle +
            " " +
            Personal_Info.personName +
            " " +
            Personal_Info.personSurname}

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
        </h6>
        <div className="person-summary-body-context-container_level_2">
          <div>
           
            <p>
              {Personal_Info.personAddress[0].personAddressType} Adress:{" "}
              {[
                Personal_Info.personAddress[0].personFlatNo,
                Personal_Info.personAddress[0].personBuildingNo,
                Personal_Info.personAddress[0].personStreet,
                Personal_Info.personAddress[0].personDistrict,
                Personal_Info.personAddress[0].postalCode,
                Personal_Info.personAddress[0].personCity,
                Personal_Info.personAddress[0].personState,
                Personal_Info.personAddress[0].personCountry,
              ]
                .filter((i) => i !== "")
                .join(", ")}
              {Personal_Info.personAddress.length > 1 ? ", ..." : ""}
            </p>
            <p>
              {Object.values(Personal_Info.personEmail).length > 0 &&
                (Object.values(Personal_Info.personEmail).length > 1
                  ? Personal_Info.personEmail[0].personEmailType +
                    " email: " +
                    Object.values(Personal_Info.personEmail)[0].email +
                    ", ..."
                  : Personal_Info.personEmail[0].personEmailType +
                    " email: " +
                    Object.values(Personal_Info.personEmail)[0].email)}
            </p>
            <p>
              {Personal_Info.personCitizenship.length > 0 && (
                <>
                  Citizen of {Personal_Info.personCitizenship.join(", ")}
                  <br />
                </>
              )}
            </p>
            <p>
              {Personal_Info.personWorkPermit.length > 0 && (
                <>
                  Can officially work in{" "}
                  {Personal_Info.personWorkPermit.join(", ")}
                  <br />
                </>
              )}
            </p>
            <p>
              {Personal_Info.personMedicalDoc && (
                <>
                  {"Uploaded Medical Declaration"}
                  <br />
                </>
              )}
            </p>
            <p>{Personal_Info.personDbsDoc && "Uploaded DBS"}</p>
          </div>
        </div>
      </Summary>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    personalInfo: state.personalInfoReducer.personalInfo,

    addressInfo: state.personalInfoReducer.addressInfo,
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstSummary);
