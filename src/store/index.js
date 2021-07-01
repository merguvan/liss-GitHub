import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
