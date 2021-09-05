import React from "react";
import { Link } from "react-router-dom";
import AcademicSummary from "../components/academic/AcademicSummary";
import PersonalInfoSummary from "../components/personal/PersonalInfoSummary";
import WorkExperienceSummary from "../components/workexperience/WorkExperienceSummary";
import EducationSummary from "../components/education/EducationSummary";
import AffiliationsSummary from "../components/affiliations/AffiliationsSummary";
import AchievementsSummary from "../components/achievements/AchievementsSummary";
import CertificationsSummary from "../components/certifications/CertificationsSummary";
import CapacitySummary from "../components/capacity/CapacitySummary";
import ReferencesSummary from "../components/references/ReferencesSummary";
import RemarksSummary from "../components/remarks/RemarksSummary";
import ProjectsSummary from "../components/projects/ProjectsSummary";
// import InstSummary from "../../institutional/components/instSummary/instSummary";


export default function MainPage() {
  return (
    <div className="mainPage">
      <PersonalInfoSummary />
      <WorkExperienceSummary />
      <EducationSummary />
      <AffiliationsSummary />
      <AchievementsSummary />
      <CertificationsSummary />
      <AcademicSummary />
      <ProjectsSummary />
      <CapacitySummary />
      <ReferencesSummary />
      <RemarksSummary />
      {/* <InstSummary/> */}
      <Link to="/login_register">
        <button type="button">Login</button>
      </Link>
    </div>
  );

}

