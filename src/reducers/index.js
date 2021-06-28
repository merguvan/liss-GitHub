import { combineReducers } from 'redux'
import {personalInfoReducer} from '../reducers/personalInfoReducer'
import {academicWorksDetailsReducer} from './academicWorkDetailsReducer'
import {workExperienceReducer} from './workExperience'
const reducer=combineReducers ({
    personalInfoReducer,
    academicWorksDetailsReducer,
    workExperienceReducer
})
export default reducer