import React, { useCallback, useState } from "react";
import Footer from "./footer";
import Header from "./header";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      return setEmailError(true);
    }
    if (password.length < 8) {
      return setPasswordLengthError(true);
    }
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log(email, password, passwordCheck, name, nickname);
  };

  const onChangeEmail = useCallback((e) => {
    setEmailError(!isEmail(e.target.value));
    setEmail(e.target.email);
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
    return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
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
      <Header />
      <div className="signup-container">
        <h2>회원가입</h2>
        <form onSubmit={onSubmit} className="form" action="index.html">
          <div className="input-div">
            <label htmlFor="user-email">이메일</label>
            <div>
              <input
                className="input"
                placeholder="이메일 주소"
                name="user-email"
                value={email}
                required
                onChange={onChangeEmail}
              />
              <button className="double-check" type="submit">
                중복확인
              </button>
              {emailError ? (
                <div className="error-message">
                  올바르지 않은 이메일 형식입니다.
                </div>
              ) : (
                <div className="no-error">no error</div>
              )}
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="user-password">비밀번호</label>
            <input
              className="input"
              type="password"
              placeholder="비밀번호"
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            />
            {passwordLengthError ? (
              <div className="error-message">
                비밀번호는 8자 이상이어야 합니다.
              </div>
            ) : (
              <div className="no-error">no error</div>
            )}
          </div>
          <div className="input-div">
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <input
              className="input"
              type="password"
              placeholder="비밀번호 확인"
              name="user-password-check"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError ? (
              <div className="error-message">비밀번호가 일치하지 않습니다.</div>
            ) : (
              <div className="no-error">no error</div>
            )}
          </div>
          <div className="input-div">
            <label htmlFor="user-name">이름</label>
            <input
              className="input"
              placeholder="이름(본명)"
              name="user-name"
              value={name}
              required
              onChange={onChangeName}
            />
            <div className="no-error">no error</div>
          </div>
          <div className="input-div">
            <label htmlFor="user-nickname">닉네임</label>
            <div>
              <input
                className="input"
                placeholder="닉네임(별명)"
                name="user-nickname"
                value={nickname}
                required
                onChange={onChangeNickname}
              />
              <button className="double-check" type="submit">
                중복확인
              </button>
              <div className="no-error">no error</div>
            </div>
          </div>
          <div id="button-div">
            <button id="back-button">돌아가기</button>
            <button id="signup-button" htmltype="submt">
              가입하기
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};
export default SignUp;
