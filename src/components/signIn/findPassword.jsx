import React, { useCallback, useState } from "react";
import styles from "./findInfo.module.css";

const FindPassword = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("입력하신 전화번호로 임시 비밀번호를 발송했습니다.");
    window.location.href = "/signin";
  };

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePhone = useCallback((e) => {
    setPhone(e.target.value);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>임시 비밀번호 발급</h3>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <p>
            가입 시 입력하신 <span className={styles.accent}>이메일</span>과{" "}
            <span className={styles.accent}>전화번호</span>를 입력해 주세요.
          </p>
          <div>
            <div>
              <input
                className={styles.input}
                placeholder="이메일 주소"
                value={email}
                required
                onChange={onChangeEmail}
              />
            </div>
            <div>
              <input
                className={styles.input}
                placeholder="전화번호('-' 제외)"
                type="tel"
                value={phone}
                required
                onChange={onChangePhone}
              />
            </div>
          </div>
          <div id={styles.buttons}>
            <button htmltype="submt" onSubmit={onSubmit}>
              임시 비밀번호 발급
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FindPassword;
