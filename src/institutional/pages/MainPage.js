import React from "react";
import { Link } from "react-router-dom";
import ContactSummary from "../components/contact/PersonalInfoSummary";
import InstitutionSummary from "../components/institution/PersonalInfoSummary";
import RemarksSummary from "../components/remarks/RemarksSummary";
export default function MainPage() {
  return (
    <div className="mainPage">
      <InstitutionSummary />
      <ContactSummary />
      <RemarksSummary />
      <Link to="/login_register">
        <button type="button">Login</button>
      </Link>
    </div>
  );
}
