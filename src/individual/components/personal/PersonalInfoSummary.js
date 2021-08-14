import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import data from "./personaldata.json";
import { useSelector } from "react-redux";

function PersonalInfoSummary(props) {
  const { addressInfo } = useSelector(
    (state) => state.userLogin.userLogin.userData
  );
  const personalFirstLine = [
    addressInfo.personGender,
    addressInfo.personMaritalStatus,
  ]
    .filter((i) => i !== "")
    .join(", ");
  const birthInfo = [
    addressInfo.personCityOB,
    addressInfo.personCountryOB,
    addressInfo.personDOB,
  ]
    .filter((i) => i !== "")
    .join(", ");
  console.log(birthInfo.length);
  return (
    <>
      <Summary value="100" headerTitle="Personal Info" url="/personalInfo/1">
        <h6 className="person-summary-body-context-container_level_1">
          {addressInfo.personTitle +
            " " +
            addressInfo.personName +
            " " +
            addressInfo.personSurname}

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
              {personalFirstLine?.length > 0 ? personalFirstLine : ""}
              {birthInfo?.length > 0
                ? (personalFirstLine !== "" ? ", " : " ") + "b. " + birthInfo
                : ""}
            </p>
            <p>
              {addressInfo.personAddressType} Adress:{" "}
              {[
                addressInfo.personFlatNo,
                addressInfo.personBuildingNo,
                addressInfo.personStreet,
                addressInfo.personDistrict,
                addressInfo.postalCode,
                addressInfo.personCity,
                addressInfo.personState,
                addressInfo.personCountry,
              ]
                .filter((i) => i !== "")
                .join(", ")}
              {addressInfo.personAddress?.length > 1 ? ", ..." : ""}
            </p>
            <p>
              {Object.values(addressInfo.personEmail).length > 0 &&
                (Object.values(addressInfo.personEmail).length > 1
                  ? addressInfo.personEmail[0].personEmailType +
                    " email: " +
                    Object.values(addressInfo.personEmail)[0].email +
                    ", ..."
                  : addressInfo.personEmail[0].personEmailType +
                    " email: " +
                    Object.values(addressInfo.personEmail)[0].email)}
            </p>
            <p>
              {addressInfo.personCitizenship?.length > 0 && (
                <>
                  Citizen of {addressInfo.personCitizenship?.join(", ")}
                  <br />
                </>
              )}
            </p>
            <p>
              {addressInfo.personWorkPermit?.length > 0 && (
                <>
                  Can officially work in{" "}
                  {addressInfo.personWorkPermit.join(", ")}
                  <br />
                </>
              )}
            </p>
            <p>
              {addressInfo.personMedicalDoc && (
                <>
                  {"Uploaded Medical Declaration"}
                  <br />
                </>
              )}
            </p>
            <p>{addressInfo.personDbsDoc && "Uploaded DBS"}</p>
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
)(PersonalInfoSummary);
