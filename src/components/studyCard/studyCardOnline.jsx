import React from "react";
import styles from "./studyCard.module.css";

const StudyCardOnline = (props) => {
  //const { name, type, summary, startDay, current, max } = props;
  return (
    <div className={styles.studyCard}>
      <div className={styles.detail}>
        <div>
          <p className={styles.name}>영어회화 스터디</p>
          <p className={styles.online}>온라인</p>
        </div>
        <p className={styles.summary}>프리토킹 수준까지</p>
        <div>
          <p className={styles.env}>3&nbsp;/&nbsp;10</p>
          <p className={styles.startDay}>첫 스터디&nbsp;&nbsp;05/12</p>
        </div>
      </div>
    </div>
  );
};

export default StudyCardOnline;
