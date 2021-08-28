import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Education from "./index";

export default function EducationInfo(props) {
  const { id } = useParams(); //props.match.params
  const [modalShow, setModalShow] = useState(true);

  switch (+id) {
    case 1:
      return <Education show={modalShow} setModalShow={setModalShow} />;

    default:
      <Redirect to="/" />;
  }
}
