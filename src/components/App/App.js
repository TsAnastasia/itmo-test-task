import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import AppPage from "../AppPage/AppPage";

const App = () => {
  const isAuth = true;

  return (
    <div className="app">
      <header className="app__header"></header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="*">
          {isAuth ? <AppPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <footer className="app__footer"></footer>
    </div>
  );
};

export default App;
