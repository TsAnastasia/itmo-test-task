import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "../MainPage/MainPage";
import AppPage from "../AppPage/AppPage";
import { recieveAuth } from "../../redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  React.useEffect(() => {
    dispatch(recieveAuth());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <header className="app__header"></header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="*">{isAuth ? <AppPage /> : <Redirect to="/" />}</Route>
      </Switch>
      <footer className="app__footer"></footer>
    </div>
  );
};

export default App;
