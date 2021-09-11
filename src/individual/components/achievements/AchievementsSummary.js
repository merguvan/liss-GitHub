import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Summary from "../../../Summary";
import { FiEdit, FiTrash } from "react-icons/fi";
// import "./Achievements.css";

const achievements = [
  {
    personAchievementGrantedBy: "BP",
    personAchievementCountry: "England",
    personAchievementName: "Fellowship",
    personAchievementDate: "20-09-2006",
  },
  {
    personAchievementGrantedBy: "Booking.com",
    personAchievementCountry: "The Netherlands",
    personAchievementName: "Partnership",
    personAchievementDate: "20-09-2007",
  },
];

function Achievements(props) {
  window.scrollTo(0, 1960);
  return (
    <Summary headerTitle="Achievements" url="/individual/achievements">
      {achievements.map((i, idx) => {
        return (
          <div key={idx} className="work_experience_block">
            <div className="person-summary-body-title"></div>
            <div className="person-summary-body-context-container">
              <h6 id="work_h6">
                <div className="person-summary-body-context-container_level_1">
                  <p>{i.personAchievementName}</p>
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
                  <em>
                    Granted by {i.personAchievementGrantedBy} on{" "}
                    {i.personAchievementDate} in {i.personAchievementCountry}
                  </em>
                </p>
              </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
