import { combineReducers } from "redux";

import { personalInfoReducer } from "./personalInfoReducer";
import { academicWorksDetailsReducer } from "./academicWorkDetailsReducer";
import { workExperienceReducer } from "./workExperience";
import { referenceReducer } from "./referenceReducer";
import { educationReducer } from "./educationReducer";
import { capacityReducer } from "./capacityReducer";
import { certificationsReducer } from "./certificationsReducer";
import { affiliationsReducer } from "./affiliationsReducer";
import { achievementsReducer } from "./achievementsReducer";
import { projectsReducer } from "./projectsReducer";
import { remarksReducer } from "./remarksReducer";
import { userLoginDetailsReducer } from "./userLoginDetailsReducer";
const reducer = combineReducers({
  personalInfoReducer,
  academicWorksDetailsReducer,
  workExperienceReducer,
  referenceReducer,
  educationReducer,
  capacityReducer,
  certificationsReducer,
  affiliationsReducer,
  achievementsReducer,
  projectsReducer,
  remarksReducer,
  userLogin: userLoginDetailsReducer,
});
export default reducer;
