import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import data from "./personaldata.json"


function PersonalInfoSummary({ personalInfo, addressInfo }) {
  const {Personal_Info}=data; 
  return (
    <>
      <Summary headerTitle="Personal Info deneme" url="/personalInfo/1">
        <h6>
          <em className="person-summary-body-context-container_level_1">
            {Personal_Info.personTitle +
              " " +
              Personal_Info.personName +
              " " +
              Personal_Info.personSurname}
          </em>
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
          <em>
            {Personal_Info.personGender}
            {`, ${Personal_Info.personMaritalStatus}`}
            {`, ${Personal_Info.personCityOB}`}
            {`, ${Personal_Info.personCountryOB}`}
            {`, ${Personal_Info.personDOB}`}
            <br />
            {Personal_Info.personAddressType} Adress:{" "}
            {[
              Personal_Info.personFlatNo,
              Personal_Info.personBuildingNo,
              Personal_Info.personStreet,
              Personal_Info.personDistrict,
              Personal_Info.postalCode,
              Personal_Info.personCity,
              Personal_Info.personState,
              Personal_Info.personCountry,
            ]
              .filter((el) => el !== "")
              .join(", ")}
            <br />
            {Object.values(Personal_Info.personEmail).length >
              0 &&
              "Email: " +
                (Object.values(Personal_Info.personEmail).length >
                1
                  ? Object.values(Personal_Info.personEmail)[0] +
                    ", ..."
                  : Object.values(Personal_Info.personEmail)[0])}
            <br />
            {Personal_Info.personNationality !== "" ? (
              <>
                Citizen of {Personal_Info.personNationality}
                <br />
              </>
            ) : (
              ""
            )}
            {Personal_Info.personWorkPermit !== "" ? (
              <>
                Can officially work in{" "}
                {Personal_Info.personWorkPermit}
                <br />
              </>
            ) : (
              ""
            )}
            {Personal_Info.medicalDeclarationUpload &&
              "Uploaded Medical Declaration and DBS"}
            <br />
          </em>
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
)(PersonalInfoSummary);
