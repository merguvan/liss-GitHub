import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./WorkExperience.css";
import Summary from "../../../Summary";
function WorkExperience(props) {
  return (
    <Summary headerTitle="Work Experience" url="/">
      <h6>Nigerian Tulip International Colleges, 2014-2020</h6>
      <div className="workexperience-summary-content-container">
        <span>Erdal Dincer</span>
        <h2>Haymana, Turkey</h2>
      </div>
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
