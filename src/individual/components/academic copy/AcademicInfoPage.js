import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import AcademicWork from "./index";

export default function AcademicInfo(props) {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(true);

  switch (+id) {
    case 1:
      return <AcademicWork show={modalShow} setModalShow={setModalShow} />;

    default:
      <Redirect to="/" />;
  }
}
