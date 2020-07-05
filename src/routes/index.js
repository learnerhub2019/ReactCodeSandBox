import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

//Default pages
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/login";
//Private Pages
import DashboardPage from "../pages/dashboard/Dashboard";
// Function for outes
export default function Routes() {
  return (
    <Switch>
      {/* Default Routes */}
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      {/* Private Routes */}
      <Route path="/dashboard" exact component={DashboardPage} isPrivate />
    </Switch>
  );
}
