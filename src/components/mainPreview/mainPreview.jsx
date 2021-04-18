import React from "react";
import StudyCardList from "../studyList/studyList";
import styles from "./mainPreview.module.css";

const MainPreview = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            <h3>오프라인</h3>
            <p className={styles.viewMore}>전체보기</p>
          </div>
          <StudyCardList />
        </div>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            <h3>온라인</h3>
            <p className={styles.viewMore}>전체보기</p>
          </div>
          <StudyCardList />
        </div>
      </div>
    </>
  );
};

export default MainPreview;
