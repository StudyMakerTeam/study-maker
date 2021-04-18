import React from "react";
import styles from "./studyCard.module.css";

const StudyCard = () => {
  return (
    <div className={styles.studyCard}>
      <div className={styles.detail}>
        <p className={styles.name}>스터디 이름</p>
        <p className={styles.summary}>스터디 한 줄 설명</p>
        <p className={styles.env}>지역 | 0/4</p>
      </div>
    </div>
  );
};

export default StudyCard;
