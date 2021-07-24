import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import PersonInfo from "./personalInfo";
import AddressInfo from "./AddressInfo";

export default function PersonalInfo(props) {
  const { id } = useParams();

  switch (+id) {
    case 1:
      return <PersonInfo />;
    case 2:
      return <AddressInfo />;

    default:
      <Redirect to="/" />;
  }
}
