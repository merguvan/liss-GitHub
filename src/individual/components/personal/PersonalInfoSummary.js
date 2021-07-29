import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";

const sample_person = {
  Personal_Info: {
    personTitle: "Dr. ",
    personName: "Araz ",
    personSurname: "Bey ",
    personEmail: "amazing@ideas.com",
    personDOB: "21/09/1285 ",
    personCityOB: "Paris ",
    personCountryOB: "France ",
    personGender: "Male ",
    personMaritalStatus: "Married ",
    personHomeAddress: "St. Louis II 75, 7887SC ",
    personPhoneNumber: "037847740 ",
    personNationality: "American ",
    personEuWorkPermit: true,
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
          <em>
            {sample_person.Personal_Info.personTitle +
              " " +
              sample_person.Personal_Info.personName +
              ", " +
              "b." +
              " " +
              sample_person.Personal_Info.personSurname}
          </em>
        </h6>
        <em>
          {sample_person.Personal_Info.personGender}
          {sample_person.Personal_Info.personMaritalStatus}, b.
          {sample_person.Personal_Info.personCityOB},
          {sample_person.Personal_Info.personCountryOB},
          {sample_person.Personal_Info.personDOB}
          <br />
          Home Adress: {sample_person.Personal_Info.person}
          <br />
          Email: {sample_person.Personal_Info.personEmail}
          <br />
          Citizen of {sample_person.Personal_Info.personCountryOB}
          <br />
          {sample_person.Personal_Info.personEuWorkPermit &&
            "Can officially work in EU"}
          <br />
          {sample_person.Personal_Info.medicalDeclarationUpload &&
            "Uploaded Medical Declaration and DBS"}
          <br />
        </em>
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
