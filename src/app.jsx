import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.module.css";
import { Main, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
