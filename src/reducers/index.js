import { combineReducers } from 'redux'
import {personalInfoReducer} from './personalInfoReducer'
import {academicWorksDetailsReducer} from './academicWorkDetailsReducer'
import {workExperienceReducer} from './workExperience'
import {referenceReducer} from './referenceReducer'
import {educationReducer} from './educationReducer'
import {capacityReducer} from './capacityReducer'
import { certificationsReducer } from './certificationsReducer'

const reducer=combineReducers ({
    personalInfoReducer,
    academicWorksDetailsReducer,
    workExperienceReducer,
    referenceReducer,
    educationReducer,
    capacityReducer,
    certificationsReducer

})
export default reducer