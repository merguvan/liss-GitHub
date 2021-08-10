import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import MainPage from "./individual/pages/MainPage";
import PersonalInfoPage from "./individual/components/personal/PersonalInfoPage";
import AcademicInfo from "./individual/components/academic/AcademicInfoPage";
import WorkExperienceInfo from "./individual/components/workexperience/WorkExperienceInfo";
import EducationInfo from "./individual/components/education/EducationInfo";
import AffiliationsInfo from "./individual/components/affiliations/AffiliationsInfo";
import AchievementsInfo from "./individual/components/achievements/AchievementsInfo";
import CertificationsInfo from "./individual/components/certifications/CertificationsInfo";
import CapacityInfo from "./individual/components/capacity/CapacityInfo";
import ReferencesInfo from "./individual/components/references/ReferencesInfo";
import RemarksInfo from "./individual/components/remarks/RemarksInfo";
import ProjectsInfo from "./individual/components/projects/ProjectsInfo";
import LoginPage from "./individual/pages/Login/LoginPage";
import Header from "./individual/components/Header/Header";
import { useSelector } from "react-redux";
import GdprConsent from "./individual/pages/GdprConsent";
import Profile from "./individual/pages/Profile";
import InstitutionInfo from "./institutional/components/information/InstitutionInfo";
import InstitutionAddress from "./institutional/components/address/InstitutionAddress";
import ContactAddress from "./institutional/components/contactAddress/ContactAddress";
import MediaInfo from "./institutional/components/mediaInfo/MediaInfo";
import ContactPerson from "./institutional/components/contactPerson/contactPerson";
import ContactPhone from "./institutional/components/contactPhone/contactPhone";
import ContactMail from "./institutional/components/contactMail/contactMail";

function App(props) {
  const userInfo = useSelector((state) => state.userLogin?.userLogin);

  if (true) {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login_register" exact component={LoginPage} />
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
          <Route path="/gdpr-consent" component={GdprConsent} />
          <Route path="/profile" component={Profile} />
          <Route path="/institutioninfo/:id" component={InstitutionInfo} />
          <Route
            path="/institutionaddress/:id"
            component={InstitutionAddress}
          />
          <Route path="/contactaddress/:id" component={ContactAddress} />
          <Route path="/mediainfo/:id" component={MediaInfo} />
          <Route path="/contactperson/:id" component={ContactPerson} />
          <Route path="/contactphone/:id" component={ContactPhone} />
          <Route path="/contactmail/:id" component={ContactMail} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Header />
        <Route path="/gdpr-consent" exact component={GdprConsent} />
        <Switch>
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
