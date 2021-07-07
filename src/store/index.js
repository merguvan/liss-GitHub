import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
