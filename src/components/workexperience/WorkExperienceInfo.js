import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import WorkExperience from "./index";

export default function BackgroundInfo(props) {
  const { id } = useParams(); //props.match.params
  const [modalShow, setModalShow] = useState(true);

  switch (+id) {
    case 1:
      return <WorkExperience show={modalShow} setModalShow={setModalShow} />;

    default:
      <Redirect to="/" />;
  }
}
