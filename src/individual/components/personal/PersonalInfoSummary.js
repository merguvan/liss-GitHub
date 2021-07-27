import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
function PersonalInfoSummary({ personalInfo, addressInfo }) {
  return (
    <>
      <Summary title="Personal Info deneme">
        <p>erdal dincer</p>
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
