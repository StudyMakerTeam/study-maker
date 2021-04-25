import React from "react";
import StudyCardOffline from "../studyCard/studyCardOffline";
import StudyCardOnline from "../studyCard/studyCardOnline";
import styles from "./mainPreview.module.css";

const MainPreview = () => {
  return (
    <>
      <div className={styles.mainImage}>
        <img
          className={styles.image}
          src="/images/mainImage.png"
          alt="메인 페이지"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            <h2>온라인</h2>
            <p className={styles.viewMore}>전체보기</p>
          </div>
          <div className={styles.studyCards}>
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
            <StudyCardOnline />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            <h2>오프라인</h2>
            <p className={styles.viewMore}>전체보기</p>
          </div>
          <div className={styles.studyCards}>
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
            <StudyCardOffline />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPreview;
