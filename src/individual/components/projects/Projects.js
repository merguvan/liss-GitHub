import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "./../../../Summary";
function Projects(props) {
  return (
    <Summary title="Projects">
      <p>Murat Abi</p>
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
