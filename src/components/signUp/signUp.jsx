import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./signUp.module.css";

const SignUp = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    nickname: "",
    mobile: "",
  });

  const { email, username, nickname, mobile } = inputs;

  const isEmail = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  const setInputsFunc = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;

    if (name === "email") {
      setInputsFunc(name, value);
      setEmailError(!isEmail(value));
    } else if (name === "mobile") {
      if (regex.test(value)) {
        setInputsFunc(name, value);
      }
    } else {
      setInputsFunc(name, value);
    }
  };

  useEffect(() => {
    if (mobile.length === 10) {
      setInputs({
        ...inputs,
        mobile: mobile.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
      });
    }
    if (mobile.length === 13) {
      setInputs({
        ...inputs,
        mobile: mobile
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [mobile]);

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

  const domain =
    "http://ec2-13-124-13-158.ap-northeast-2.compute.amazonaws.com:8080/api/auth";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${domain}/sign-up`, {
        email: email,
        password: password,
        nickname: nickname,
        username: username, // 서버에 username으로 설정되어 있는지 확인 필요
      });
      console.log(response);
      history.push("/");
    } catch (e) {
      setError(e);
    }
  };

  if (error) {
    alert("에러가 발생했습니다");
    history.push("/signup");
  }

  const onDoubleCheck = async (e) => {
    e.preventDefault();
    const { value } = e.target;
    let inAlert = "";
    if (value === email) {
      inAlert = "이메일";
    } else {
      inAlert = "닉네임";
    }
    const signUpData = {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`${domain}/check-nickname`, signUpData)
      .then(console.log(value))
      .then(console.log(signUpData))
      .then((response) => {
        console.log(response);
        if (response.body === false) {
          alert(`사용 가능한 ${inAlert}입니다.`);
        } else if (response.body === true) {
          alert(`이미 사용중인 ${inAlert}입니다.`);
        } else {
          alert("에러가 발생했습니다.");
        }
      });
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>회원가입</h2>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <div>
            <label htmlFor="user-email">이메일</label>
            <div>
              <input
                className={styles.inputSmall}
                placeholder="이메일 주소"
                name="email"
                value={email}
                required
                onChange={onChange}
              />
              <button
                className={styles.doubleCheck}
                onClick={onDoubleCheck}
                value={email}
              >
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
            <label htmlFor="user-mobile">휴대전화</label>
            <input
              className={styles.input}
              placeholder="전화번호 입력('-' 제외)"
              name="mobile"
              value={mobile}
              required
              onChange={onChange}
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div>
            <label htmlFor="user-name">이름</label>
            <input
              className={styles.input}
              placeholder="이름(본명)"
              name="username"
              value={username}
              required
              onChange={onChange}
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <div>
              <input
                className={styles.inputSmall}
                placeholder="닉네임(별명)"
                name="nickname"
                value={nickname}
                required
                onChange={onChange}
              />
              <button
                className={styles.doubleCheck}
                onClick={onDoubleCheck}
                value={nickname}
              >
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
