import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Certifications from "./index";

export default function CertificationsInfo(props) {
  const { id } = useParams(); //props.match.params
  const [modalShow, setModalShow] = useState(true);

  switch (+id) {
    case 1:
      return <Certifications show={modalShow} setModalShow={setModalShow} />;

    default:
      <Redirect to="/" />;
  }
}
