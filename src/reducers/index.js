import { combineReducers } from 'redux'
import {personalInfoReducer} from './personalInfoReducer'
import {academicWorksDetailsReducer} from './academicWorkDetailsReducer'
import {workExperienceReducer} from './workExperience'
import {referenceReducer} from './referenceReducer'
import {educationReducer} from './educationReducer'
const reducer=combineReducers ({
    personalInfoReducer,
    academicWorksDetailsReducer,
    workExperienceReducer,
    referenceReducer,
    educationReducer
})
export default reducer