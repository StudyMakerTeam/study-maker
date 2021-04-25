import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainPreview from "../components/mainPreview/mainPreview";

const divStyle = {
  textAlign: "center",
};

const imgStyle = {
  width: "inherit",
  maxWidth: "67%",
  height: "auto",
};

const MainPage = () => {
  return (
    <>
      <Header />
      <div style={divStyle}>
        <img src="/images/mainImage.png" alt="메인 페이지" style={imgStyle} />
      </div>
      <MainPreview />
      <Footer />
    </>
  );
};

export default MainPage;
