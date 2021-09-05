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
import { userRegistrationDetailsReducer } from "./userRegistrationReducer";
import { getScrollPositionReducer } from "./getScrollPositionReducer";
import {attachmentReducer} from "./attachmentReducer"

const number = { namer: 1 };
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
  attachmentReducer,
  userLogin: userLoginDetailsReducer,
  userRegistration: userRegistrationDetailsReducer,
  scrollPosition: getScrollPositionReducer,
  number,
});

export default reducer;
