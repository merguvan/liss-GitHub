import React from "react";
import { useParams } from "react-router-dom";
import PersonalInfoPage from "../components/personal/PersonalInfoPage";
import IndividualMainPage from "../../individual/pages/IndividualMainPage";
import WorkExperienceInfo from "../../individual/components/workexperience/WorkExperienceInfo";
import AcademicInfo from "../../individual/components/academic/AcademicInfoPage";
import EducationInfo from "../../individual/components/education/EducationInfo";
import AffiliationsInfo from "../../individual/components/affiliations/AffiliationsInfo";
import AchievementsInfo from "../../individual/components/achievements/AchievementsInfo";
import CertificationsInfo from "../../individual/components/certifications/CertificationsInfo";
import CapacityInfo from "../../individual/components/capacity/CapacityInfo";
import ReferencesInfo from "../../individual/components/references/ReferencesInfo";
import RemarksInfo from "../../individual/components/remarks/RemarksInfo";
import ProjectsInfo from "../../individual/components/projects/ProjectsInfo";
const InstitutionalRouter = () => {
  const { section } = useParams();
  switch (section) {
    case "personalInfo":
      return <PersonalInfoPage />;
      break;

    case "workexperience":
      return <WorkExperienceInfo />;
      break;
    case "education":
      return <EducationInfo />;
      break;

    case "affiliations":
      return <AffiliationsInfo />;
      break;
    case "achievements":
      return <AchievementsInfo />;
      break;
    case "certifications":
      return <CertificationsInfo />;
      break;
    case "capacity":
      return <CapacityInfo />;
      break;
    case "remarks":
      return <RemarksInfo />;
      break;
    case "projects":
      return <ProjectsInfo />;
      break;
    default:
      return <IndividualMainPage />;
      break;
  }
};

export default InstitutionalRouter;
