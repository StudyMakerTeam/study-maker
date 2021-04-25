import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./signUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("회원가입이 완료되었습니다.");
    window.location.href = "/";
  };

  const onChangeEmail = useCallback((e) => {
    setEmailError(!isEmail(e.target.value));
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPasswordLengthError(e.target.value.length < 8);
    setPassword(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const isEmail = (email) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(email);
  };

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  };

  const [name, onChangeName] = useInput("");
  const [nickname, onChangeNickname] = useInput("");

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>회원가입</h2>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <div>
            <label htmlFor="user-email">이메일</label>
            <div>
              <input
                className={styles.input}
                placeholder="이메일 주소"
                name="user-email"
                value={email}
                required
                onChange={onChangeEmail}
              />
              <button className={styles.doubleCheck} type="submit">
                중복확인
              </button>
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
            <label htmlFor="user-password">비밀번호</label>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            />
            {passwordLengthError ? (
              <div className={styles.errorMessage}>
                비밀번호는 8자 이상이어야 합니다.
              </div>
            ) : (
              <div className={styles.noError}>no error</div>
            )}
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호 확인"
              name="user-password-check"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError ? (
              <div className={styles.errorMessage}>
                비밀번호가 일치하지 않습니다.
              </div>
            ) : (
              <div className={styles.noError}>no error</div>
            )}
          </div>
          <div>
            <label htmlFor="user-name">이름</label>
            <input
              className={styles.input}
              placeholder="이름(본명)"
              name="user-name"
              value={name}
              required
              onChange={onChangeName}
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <div>
              <input
                className={styles.input}
                placeholder="닉네임(별명)"
                name="user-nickname"
                value={nickname}
                required
                onChange={onChangeNickname}
              />
              <button className={styles.doubleCheck} type="submit">
                중복확인
              </button>
              <div className={styles.noError}>no error</div>
            </div>
          </div>
          <div id={styles.buttons}>
            <Link to="/">
              <button id={styles.backButton}>돌아가기</button>
            </Link>
            <button
              id={styles.signUpButton}
              htmltype="submt"
              onSubmit={onSubmit}
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;
