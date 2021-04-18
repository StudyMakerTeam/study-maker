import React from "react";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/mainPreview/mainPreview";
import SignUp from "./components/signUp/signUp";

function App() {
  return (
    <>
      <Header />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
