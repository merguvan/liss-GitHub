import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducers";

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
