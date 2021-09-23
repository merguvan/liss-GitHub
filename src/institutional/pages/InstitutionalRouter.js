import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/contact/AddressInfo/index";
import Institution from "../components/institution/AddressInfo/index";
import Remarks from "../components/remarks/index";

const InstitutionalRouter = (props) => {
  const { section } = useParams();

  switch (section) {
    case "contact":
      return <ContactForm />;
    case "address":
      return <Institution />;
    case "remarks":
      return <Remarks />;
    default:
      break;
  }
};

export default InstitutionalRouter;
