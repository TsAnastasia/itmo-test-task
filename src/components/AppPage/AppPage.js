import React from "react";
import { Switch, Route } from "react-router-dom";
import "./AppPage.css";
import MarketPage from "../MarketPage/MarketPage";
import Navigation from "../Navigation/Navigation";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import UserPage from "../UserPage/UserPage";

const AppPage = () => {
  return (
    <div className="app-page">
      <header className="app-page__header"></header>
      <Navigation />
      <Switch>
        <Route path="/market" component={MarketPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
      <footer className="app-page__footer"></footer>
    </div>
  );
};

export default AppPage;
