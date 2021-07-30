import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
const br = <br/>
const ters = "\n"
const sample_person = {
  Personal_Info: {
    personTitle: "Dr.",
    personName: "Araz",
    personSurname: "Bey",
    personEmail: "amazing@ideas.com",
    personDOB: "21/09/1285",
    personCityOB: "Paris",
    personCountryOB: "France",
    personGender: "Male",
    personMaritalStatus: "Married",
    personAddressType: "Home",
    personFlatNo:"21",
    personBuildingNo:"1A",
    personStreet:"St. Louis",
    personDistrict:"",
    postalCode:"1002 PY",
    personCity:"Paris",
    personState:"",
    personCountry:"France",
    personPhoneNumber: "037847740",
    personNationality: "American",
    personWorkPermit: "EU",
    medicalDeclarationUpload: true,
  },
  Project: {
    project_1: {
      projectName: "Preventing 'Global Warming' by Blocking the Sun",
      projectGrantedBy: "Ecuador",
      projectSth: "HERD-7893277-2-2019-EC-EPPKAS2-SP",
      projectDate: "1958-1959",
    },
    project_2: {
      projectName:
        "Helping the World Economy to Grow by Finding Pirate Treasures",
      projectGrantedBy: "Caribbean",
      projectSth: "FOOL-7893277-WW2-2-2019-EC-EPPKAS2-SP",
      projectDate: "1888-1890",
    },
  },
};

function PersonalInfoSummary({ personalInfo, addressInfo }) {
  return (
    <>
      <Summary headerTitle="Personal Info deneme" url="/personalInfo/1">
        <h6>
          <em className="person-summary-body-context-container_level_1">
            {sample_person.Personal_Info.personTitle +
              " " +
              sample_person.Personal_Info.personName +
              " " +
              sample_person.Personal_Info.personSurname}
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
            {sample_person.Personal_Info.personGender}
            {`, ${sample_person.Personal_Info.personMaritalStatus}`}
            {`, ${sample_person.Personal_Info.personCityOB}`}
            {`, ${sample_person.Personal_Info.personCountryOB}`}
            {`, ${sample_person.Personal_Info.personDOB}`}
            <br />
            {sample_person.Personal_Info.personAddressType} Adress: {[sample_person.Personal_Info.personFlatNo, sample_person.Personal_Info.personBuildingNo,sample_person.Personal_Info.personStreet,sample_person.Personal_Info.personDistrict,sample_person.Personal_Info.postalCode,sample_person.Personal_Info.personCity,sample_person.Personal_Info.personState,sample_person.Personal_Info.personCountry].filter(el=>el!=="").join(", ")} 
            <br />
            Email: {sample_person.Personal_Info.personEmail}
            <br />
            Citizen of {sample_person.Personal_Info.personCountryOB}
            <br />
            {sample_person.Personal_Info.personWorkPermit!=="" && (
              `Can officially work in ${sample_person.Personal_Info.personWorkPermit}`)}
         
            {sample_person.Personal_Info.medicalDeclarationUpload &&
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
