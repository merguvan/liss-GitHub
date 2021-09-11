import React from "react";
import { useParams } from "react-router-dom";
import PersonalInfoPage from "../components/personal/AddressInfo/index";
import IndividualMainPage from "../../individual/pages/IndividualMainPage";
import WorkExperienceInfo from "../../individual/components/workexperience/index";
import AcademicInfo from "../../individual/components/academic/index";
import EducationInfo from "../../individual/components/education/index";
import AffiliationsInfo from "../../individual/components/affiliations/index";
import AchievementsInfo from "../../individual/components/achievements/index";
import CertificationsInfo from "../../individual/components/certifications/index";
import CapacityInfo from "../../individual/components/capacity/index";
import ReferencesInfo from "../../individual/components/references/index";
import RemarksInfo from "../../individual/components/remarks/RemarksInfo";
import ProjectsInfo from "../../individual/components/projects/index";
import AttachmentsInfo from "../components/attachments/index";
const InstitutionalRouter = () => {
  const { section } = useParams();
  console.log(section);
  switch (section) {
    case "personalInfo":
      return (
        <>
          <PersonalInfoPage />
        </>
      );
      break;
    case "academicInfo":
      return <AcademicInfo />;
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
    case "references":
      return <ReferencesInfo />;
      break;
    case "attachments":
      return <AttachmentsInfo />;
      break;
    default:
      return <IndividualMainPage />;
      break;
  }
};

export default InstitutionalRouter;
