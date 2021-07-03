import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(reducer, applyMiddleware(thunk,promise, logger));
export default store;
