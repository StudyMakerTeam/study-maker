import React, { useCallback, useState } from "react";
import styles from "./findInfo.module.css";

const FindEmail = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("입력하신 전화번호로 이메일을 발송했습니다.");
    window.location.href = "/signin";
  };

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onChangePhone = useCallback((e) => {
    setPhone(e.target.value);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>이메일 찾기</h3>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <p>
            가입 시 입력하신 <span className={styles.accent}>이름</span>과{" "}
            <span className={styles.accent}>전화번호</span>를 입력해 주세요.
          </p>
          <div>
            <div>
              <input
                className={styles.input}
                placeholder="이름(본명)"
                value={name}
                required
                onChange={onChangeName}
              />
            </div>
            <div>
              <input
                className={styles.input}
                placeholder="전화번호('-' 제외)"
                value={phone}
                required
                onChange={onChangePhone}
              />
            </div>
          </div>
          <div id={styles.buttons}>
            <button htmltype="submt" onSubmit={onSubmit}>
              이메일 주소 찾기
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FindEmail;
