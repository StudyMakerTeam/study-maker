import React from "react";

const StudyCard = () => {
  return (
    <div className="studyCard">
      <img
        className="study-thumbnail"
        src="https://via.placeholder.com/200x120"
      ></img>
      <div className="study-detail">
        <p className="study-name">스터디 이름</p>
        <p className="study-summary">스터디 한 줄 설명</p>
        <p className="study-env">지역 | 0/4</p>
      </div>
    </div>
  );
};

export default StudyCard;
