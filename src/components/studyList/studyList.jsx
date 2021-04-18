import React from "react";
import StudyCard from "../studyCard/studyCard";
import styles from "./studyList.module.css";

const StudyCardList = () => {
  return (
    <div className={styles.studyCards}>
      <StudyCard />
      <StudyCard />
      <StudyCard />
      <StudyCard />
    </div>
  );
};

export default StudyCardList;
