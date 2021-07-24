import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import AcademicWork from "./AcademicWorkDetails";

export default function AcademicInfo() {
  const { id } = useParams();

  switch (+id) {
    case 1:
      return <AcademicWork />;

    default:
      <Redirect to="/" />;
  }
}
