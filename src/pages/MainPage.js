import React from "react";
import {Link} from "react-router-dom"
import AcademicWork from "../components/academic/AcademicWork";
import PersonalInfoSummary from "../components/personal/PersonalInfoSummary";
import WorkExperience from "../components/workexperience/WorkExperience";
import Education from "../components/education/Education";
import Affiliations from "../components/affiliations/Affiliations";
import Achievements from "../components/achievements/Achievements";
import Certifications from "../components/certifications/Certifications";
import Capacity from "../components/capacity/Capacity";
import References from "../components/references/References";
import Remarks from "../components/remarks/Remarks";
import Projects from "../components/projects/Projects";

export default function MainPage() {
  return (
    <div>
      <PersonalInfoSummary />
      <WorkExperience />
      <Education />
      <Affiliations />
      <Achievements />
      <Certifications />
      <AcademicWork />
      <Projects />
      <Capacity />
      <References />
      <Remarks />
      <Link to="/login_register"><button type="button" >Login</button></Link>
    </div>
  );
}
