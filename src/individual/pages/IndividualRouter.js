import React from "react";
import { useParams } from "react-router-dom";
import PersonalInfoPage from "../components/personal/PersonalInfoPage";
import IndividualMainPage from "../../individual/pages/IndividualMainPage";
import WorkExperienceInfo from "../../individual/components/workexperience/WorkExperienceInfo";
const InstitutionalRouter = () => {
  const { section } = useParams();
  switch (section) {
    case "personalInfo":
      return <PersonalInfoPage />;
      break;

    case "workexperience":
      return <WorkExperienceInfo />;
      break;

    default:
      return <IndividualMainPage />;
      break;
  }
};

export default InstitutionalRouter;
