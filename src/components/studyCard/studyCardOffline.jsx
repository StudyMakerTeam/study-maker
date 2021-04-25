import React from "react";
import styles from "./studyCard.module.css";

const StudyCardOffline = (props) => {
  //const { name, type, summary, startDay, place, current, max } = props;
  return (
    <div className={styles.studyCard}>
      <div className={styles.detail}>
        <div>
          <p className={styles.name}>JavaScript 스터디</p>
          <p className={styles.offline}>오프라인</p>
        </div>
        <p className={styles.summary}>JavaScript 개념 정리</p>
        <div>
          <p className={styles.env}>
            서울&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;0&nbsp;/&nbsp;4
          </p>
          <p className={styles.startDay}>첫 스터디&nbsp;&nbsp;05/10</p>
        </div>
      </div>
    </div>
  );
};

export default StudyCardOffline;
