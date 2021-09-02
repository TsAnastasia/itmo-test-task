import React from "react";
import { Switch, Route } from "react-router-dom";
import MarketPage from "../MarketPage/MarketPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import UserPage from "../UserPage/UserPage";

const AppPage = () => {
  return (
    <main className="app-page">
      <nav className="app-page__nav">
        <p>navigation</p>
      </nav>
      <Switch>
        <Route path="/market" component={MarketPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </main>
  );
};

export default AppPage;
