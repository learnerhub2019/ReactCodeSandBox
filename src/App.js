import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.scss";
// import HeaderComponent from "./components/common/header.component";
// import HomePageComponent from "./components/home/homePage.component";

import Routes from "./routes/";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
