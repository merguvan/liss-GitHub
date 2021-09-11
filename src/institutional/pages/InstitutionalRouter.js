import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/contact/AddressInfo/index";
import Institution from "../components/institution/AddressInfo/index";
const InstitutionalRouter = (props) => {
  console.log(props.match.params.section);
  const { section } = useParams();
  console.log(section);
  switch (section) {
    case "contact":
      return <ContactForm />;
    case "address":
      return <Institution />;
    default:
      break;
  }
};

export default InstitutionalRouter;
