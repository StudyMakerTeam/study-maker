import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.module.css";
import { Main, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default App;
