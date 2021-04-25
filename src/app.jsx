import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./app.module.css";
import { Main, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
