import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./References.css";

const references = [
  {
    personAttachmentType: "CV",
    personAttachmentDescription: "CV 2020",
  },
  {
    personAttachmentType: "Photo",
    personAttachmentDescription: "Photo of me 2020",
  },
  {
    personAttachmentType: "Diploma",
    personAttachmentDescription: "University Diploma",
  },
  {
    personAttachmentType: "Medical Declaration",
    personAttachmentDescription: "This one cost me a lot",
  },
];
function Attachments(props) {
  return (
    <Summary headerTitle="Attachments" url="/individual/attachments">
      {references.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>{i.personAttachmentType}</p>
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
                <p>
                  <em>{i.personAttachmentDescription}</em>
                </p>
              </div>
            </div>{" "}
            <hr />
          </div>
        );
      })}
    </Summary>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Attachments);
