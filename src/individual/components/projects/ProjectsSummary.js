import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Projects.css";


function Projects(props) {
  return (
    <Summary headerTitle="Projects" url="/projects/1">
       <div className="projects_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>
                    Hpaskjdpıasjkd
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
                <p>asdasdqwd</p>
              </div>
              <div className="person-summary-body-context-container_level_3">
                <div>
                  {" "}
                  <p>asdasdsadasd</p>
                </div>
              </div>
            </div>
          </div>
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
