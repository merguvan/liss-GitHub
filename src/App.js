import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import liss from "./liss.png";
import { Nav, Navbar } from "react-bootstrap";

import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
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
import LoginPage from "./pages/Login/LoginPage";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
function App(props) {
  const userInfo = useSelector((state) => state.userLogin?.userLogin);

  if (true) {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login" exact component={LoginPage} />
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
          <Route path="/remarks/:id/" component={RemarksInfo} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
