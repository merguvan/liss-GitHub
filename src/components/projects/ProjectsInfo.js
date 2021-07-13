import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Projects from "./index";

export default function ProjectsInfo(props) {
  const { id } = useParams(); //props.match.params

  switch (+id) {
    case 1:
      return <Projects />;

    default:
      <Redirect to="/" />;
  }
}
