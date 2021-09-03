import React from "react";
import { Switch, Route } from "react-router-dom";
import MarketPage from "../MarketPage/MarketPage";
import Navigation from "../Navigation/Navigation";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import UserPage from "../UserPage/UserPage";

const AppPage = () => {
  return (
    <main className="app-page">
      <Navigation />
      <Switch>
        <Route path="/market" component={MarketPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </main>
  );
};

export default AppPage;
