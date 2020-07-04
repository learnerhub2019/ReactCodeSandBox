import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import HomePage from "../pages/home/HomePage";
import DashboardPage from "../pages/dashboard/Dashboard";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" exact component={DashboardPage} isPrivate />
    </Switch>
  );
}
