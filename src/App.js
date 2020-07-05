import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles.scss";

import Routes from "./routes/";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}
