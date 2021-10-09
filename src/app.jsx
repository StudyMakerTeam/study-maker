import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Main, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
