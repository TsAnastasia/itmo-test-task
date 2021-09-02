import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isAuth = true;

  return (
    <Switch>
      <Route>
        {() => (isAuth ? <Component {...props} /> : <Redirect to="/" />)}
      </Route>
    </Switch>
  );
};

export default ProtectedRoute;
