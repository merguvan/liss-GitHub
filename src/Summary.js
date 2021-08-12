import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getScrollPosition } from "./individual/actions/getScrollPosition";
import "./Summary.css";

function Summary(props) {
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    dispatch(
      getScrollPosition({ x: window.pageXOffset, y: window.pageYOffset })
    );
  };
  return (
    <Card className="person-summary">
      <Card.Header>
        <h5 className="person-summary-header">
          {props.headerTitle}
          <span>
            <Link to={props.url} onClick={handleEdit}>
              <AiOutlinePlus />
            </Link>
          </span>
        </h5>
        <progress value={props.value || 0} />
      </Card.Header>
      <Card.Body className="person-summary-body">
        {/* <div className="person-summary-body-title">
          <div id="person-summary-body-title">
            {props.children[0]}
            <h6>
              Coment Out(
              {props?.SummaryInfo[2] +
                " " +
                props?.SummaryInfo[3] +
                " " +
                props?.SummaryInfo[4]})
            </h6>
          </div>
          <div className="person-summary-body-icon-container">
            <span>
              <Link to={props.url}>
                <FiEdit />
              </Link>
            </span>
            <span>
              <FiTrash />
            </span>
          </div>
        </div>
        <div className="person-summary-body-context-container">
          {props.children}
        </div> */}
        {props.children}
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(Summary);
