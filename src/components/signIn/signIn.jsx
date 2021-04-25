import React, { useCallback, useState } from "react";
import styles from "./signIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      return setEmailError(true);
    }
    console.log(email, password);
  };

  const onChangeEmail = useCallback((e) => {
    setEmailError(!isEmail(e.target.value));
    setEmail(e.target.email);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>로그인</h2>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <div>
            <div>
              <input
                className={styles.input}
                placeholder="이메일 주소"
                name="user-email"
                required
                onChange={onChangeEmail}
              />
              {emailError ? (
                <div className={styles.errorMessage}>
                  올바르지 않은 이메일 형식입니다.
                </div>
              ) : (
                <div className={styles.noError}>no error</div>
              )}
            </div>
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
              name="user-password"
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div id={styles.buttons}>
            <button
              id={styles.signUpButton}
              htmltype="submt"
              onSubmit={onSubmit}
            >
              로그인
            </button>
          </div>
        </form>
        <div>이메일 찾기 | 비밀번호 찾기</div>
        <div>
          스터디메이커가 처음이신가요? <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
