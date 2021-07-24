import { ADD_PROJECTS_DETAILS } from "../actionTypes";

const initialState = {
  projects: {},
};

export function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECTS_DETAILS:
      return {
        ...state,
        projects: { ...state.projects, ...action.payload },
      };

    default:
      return state;
  }
}
