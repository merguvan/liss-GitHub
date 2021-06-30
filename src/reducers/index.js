import { combineReducers } from 'redux'
import {personalInfoReducer} from './personalInfoReducer'
import {academicWorksDetailsReducer} from './academicWorkDetailsReducer'
import {workExperienceReducer} from './workExperience'
import {referenceReducer} from './referenceReducer'

const reducer=combineReducers ({
    personalInfoReducer,
    academicWorksDetailsReducer,
    workExperienceReducer,
    referenceReducer
})
export default reducer