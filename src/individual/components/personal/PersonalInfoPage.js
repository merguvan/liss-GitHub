import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import PersonInfo from "./personalInfo";
import AddressInfo from "./AddressInfo/index";

export default function PersonalInfo(props) {
  const { id } = useParams();
  console.log(id)
  switch (+id) {
    case 1:
      return <AddressInfo />;


    default:
      <Redirect to="/" />;
  }
}
