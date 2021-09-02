import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import MarketPage from "../MarketPage/MarketPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <div className="app">
      <header className="app__header"></header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <ProtectedRoute path="/market" component={MarketPage} />
      </Switch>
      <footer className="app__footer"></footer>
    </div>
  );
};

export default App;
