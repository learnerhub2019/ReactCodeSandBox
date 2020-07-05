import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialStage = {};
const middlewre = [thunk];

const store = createStore(
  rootReducer,
  initialStage,
  applyMiddleware(...middlewre)
);

export default store;
