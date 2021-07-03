import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import PersonalInfoPage from "./components/personal/PersonalInfoPage";
import AcademicInfo from "./components/academic/AcademicInfoPage";
import WorkExperienceInfo from "./components/workexperience/WorkExperienceInfo";
import EducationInfo from "./components/education/EducationInfo";
import AffiliationsInfo from "./components/affiliations/AffiliationsInfo";
import AchievementsInfo from "./components/achievements/AchievementsInfo";
import CertificationsInfo from "./components/certifications/CertificationsInfo";
import CapacityInfo from "./components/capacity/CapacityInfo";
import ReferencesInfo from "./components/references/ReferencesInfo";
import RemarksInfo from "./components/remarks/RemarksInfo";
import ProjectsInfo from "./components/projects/ProjectsInfo";
import LoginPage from "./pages/Login/LoginPage"

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/personalInfo/:id" component={PersonalInfoPage} />
        <Route path="/workexperience/:id" component={WorkExperienceInfo} />
        <Route path="/education/:id" component={EducationInfo} />
        <Route path="/affiliations/:id" component={AffiliationsInfo} />
        <Route path="/achievements/:id" component={AchievementsInfo} />
        <Route path="/certifications/:id" component={CertificationsInfo} />
        <Route path="/academicInfo/:id" component={AcademicInfo} />
        <Route path="/projects/:id" component={ProjectsInfo} />
        <Route path="/capacity/:id" component={CapacityInfo} />
        <Route path="/references/:id" component={ReferencesInfo} />
        <Route path="/remarks/:id" component={RemarksInfo} />
        <Route path="/login_register" component={LoginPage} />
      </Switch>
    </div>
  );
}
