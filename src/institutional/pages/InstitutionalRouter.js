import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import ContactForm from "../components/contact/AddressInfo/index";
const InstitutionalRouter = (props) => {
  console.log(props.match.params.section);
  const { section } = useParams();
  console.log(section);
  switch (section) {
    case "contact":
      return <ContactForm />;
    case "address":
      return (
        <>
          <h1>Address Form</h1>
        </>
      );
    default:
      break;
  }
};

export default InstitutionalRouter;
