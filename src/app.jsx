import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./app.module.css";
import { Main, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route render={() => <div className="error">에러 페이지</div>} />
    </Router>
  );
}

export default App;
