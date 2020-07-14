import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialStage = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(
  rootReducer,
  initialStage,
  enhancer
);

export default store;
