import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import AcademicProjects from "./academicProjects";
import AcademicWork from "./AcademicWorkDetails";

export default function AcademicInfo() {
  const { id } = useParams();

  switch (+id) {
    case 1:
      return <AcademicWork />;
    case 2:
      return <AcademicProjects />;

    default:
      <Redirect to="/" />;
  }
}
