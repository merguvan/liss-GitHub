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

  switch (section) {
    case "personalInfo":
      return (
        <>
          <PersonalInfoPage />
        </>
      );

    case "academicInfo":
      return <AcademicInfo />;

    case "workexperience":
      return <WorkExperienceInfo />;

    case "education":
      return <EducationInfo />;

    case "affiliations":
      return <AffiliationsInfo />;

    case "achievements":
      return <AchievementsInfo />;

    case "certifications":
      return <CertificationsInfo />;

    case "capacity":
      return <CapacityInfo />;

    case "remarks":
      return <RemarksInfo />;

    case "projects":
      return <ProjectsInfo />;

    case "references":
      return <ReferencesInfo />;

    case "attachments":
      return <AttachmentsInfo />;

    default:
      return <IndividualMainPage />;
  }
};

export default InstitutionalRouter;
