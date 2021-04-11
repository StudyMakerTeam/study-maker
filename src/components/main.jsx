import React from "react";
import Footer from "./footer";
import Header from "./header";
import StudyCardList from "./studyCardList";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="main-category">
          <div className="category-title">
            <h3>오프라인</h3>
            <p>
              <a href="">전체보기</a>
            </p>
          </div>
          <StudyCardList />
        </div>
        <div className="main-category">
          <div className="category-title">
            <h3>온라인</h3>
            <p>
              <a href="">전체보기</a>
            </p>
          </div>
          <StudyCardList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
