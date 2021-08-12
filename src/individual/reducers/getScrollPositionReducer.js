export function getScrollPositionReducer(state = {}, action) {
  console.log(action);
  if (action.type === "GET_SCROLL_POSITION") {
    return {
      ...state,
      position: action.payload,
    };
  }
  return {};
}
