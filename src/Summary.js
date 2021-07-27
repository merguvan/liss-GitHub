import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit, FiTrash } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Summary.css";
function Summary({ title, url, children }) {
  return (
    <Card className="person-summary">
      <Card.Header>
        <h5 className="person-summary-header">
          {title}
          <span>
            <Link to={url}>
              <AiOutlinePlus />
            </Link>
          </span>
        </h5>
      </Card.Header>
      <Card.Body className="person-summary-body">
        <div className="person-summary-body-title">
          <div>
            <h6>title Name Surname</h6>
          </div>
          <div className="person-summary-body-icon-container">
            <span>
              <FiEdit />
            </span>
            <span>
              <FiTrash />
            </span>
          </div>
        </div>
        <div className="person-summary-body-context-container">{children}</div>
      </Card.Body>
    </Card>
  );
}
const mapStateToProps = (state) => {
  return {
    personalInfo: state.personalInfoReducer.personalInfo,

    addressInfo: state.personalInfoReducer.addressInfo,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);
