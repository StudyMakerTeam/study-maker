import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./signUp.module.css";

const SignUp = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    username: "",
    nickname: "",
    mobile: "",
  });

  const { email, password, passwordCheck, username, nickname, mobile } = inputs;

  const isEmail = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;

    if (name === "email") {
      setEmailError(!isEmail(value));
    } else if (name === "mobile") {
      if (regex.test(value)) {
        setInputs({
          ...inputs,
          [name]: value,
        });
      }
    } else if (name === "password") {
      setPasswordLengthError(value.length < 8);
    } else if (name === "passwordCheck") {
      setPasswordError(value !== password);
    }
    if (name !== "mobile") {
      setInputs({
        ...inputs,
        [name]: value,
      });
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

  const domain =
    "http://ec2-13-124-13-158.ap-northeast-2.compute.amazonaws.com:8080/api/auth";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${domain}/sign-up`, {
        email: email,
        password: password,
        nickname: nickname,
        name: username, // ????????? username?????? ???????????? ????????? ?????? ??????
      });
      console.log(response);
      history.push("/");
    } catch (e) {
      setError(e);
    }
  };

  const onDoubleCheck = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    try {
      const response = await axios.post(`${domain}/check-${name}`, {
        [name]: value,
      });
      console.log(response);
      if(response.data === false) {
        alert(`?????? ????????? ${name}?????????.`);
      } else if(response.data === true) {
        alert(`?????? ???????????? ${name}?????????.`);
      }
    } catch (e) {
      setError(e);
    }
  };
    // TODO: response.body ?????? ?????? alert ?????? ?????????. -> axios????????? body??? ????????? data??? ????????? ???.

  if (error) {
    alert("????????? ??????????????????");
    history.push("/signup");
  }

    // fetch(`${domain}/check-nickname`, signUpData)
    //   .then(console.log(value))
    //   .then(console.log(signUpData))
    //   .then((response) => {
    //     console.log(response);
    //     if (response.body === false) {
    //       alert(`?????? ????????? ${inAlert}?????????.`);
    //     } else if (response.body === true) {
    //       alert(`?????? ???????????? ${inAlert}?????????.`);
    //     } else {
    //       alert("????????? ??????????????????.");
    //     }
    //   });

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>????????????</h2>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <div>
            <label htmlFor="email">?????????</label>
            <div>
              <input
                className={styles.inputSmall}
                placeholder="????????? ??????"
                name="email"
                value={email}
                required
                onChange={onChange}
              />
              <button
                className={styles.doubleCheck}
                onClick={onDoubleCheck}
                value={email}
                name="email"
              >
                ????????????
              </button>
              {emailError ? (
                <div className={styles.errorMessage}>
                  ???????????? ?????? ????????? ???????????????.
                </div>
              ) : (
                <div className={styles.noError}>no error</div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="password">????????????</label>
            <input
              className={styles.input}
              type="password"
              placeholder="????????????"
              name="password"
              value={password}
              required
              onChange={onChange}
            />
            {passwordLengthError ? (
              <div className={styles.errorMessage}>
                ??????????????? 8??? ??????????????? ?????????.
              </div>
            ) : (
              <div className={styles.noError}>no error</div>
            )}
          </div>
          <div>
            <label htmlFor="passwordCheck">???????????? ??????</label>
            <input
              className={styles.input}
              type="password"
              placeholder="???????????? ??????"
              name="passwordCheck"
              value={passwordCheck}
              required
              onChange={onChange}
            />
            {passwordError ? (
              <div className={styles.errorMessage}>
                ??????????????? ???????????? ????????????.
              </div>
            ) : (
              <div className={styles.noError}>no error</div>
            )}
          </div>
          <div>
            <label htmlFor="mobile">????????????</label>
            <input
              className={styles.input}
              placeholder="???????????? ??????('-' ??????)"
              name="mobile"
              value={mobile}
              required
              onChange={onChange}
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div>
            <label htmlFor="username">??????</label>
            <input
              className={styles.input}
              placeholder="??????(??????)"
              name="username"
              value={username}
              required
              onChange={onChange}
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div>
            <label htmlFor="nickname">?????????</label>
            <div>
              <input
                className={styles.inputSmall}
                placeholder="?????????(??????)"
                name="nickname"
                value={nickname}
                required
                onChange={onChange}
              />
              <button
                className={styles.doubleCheck}
                onClick={onDoubleCheck}
                value={nickname}
                name="nickname"
              >
                ????????????
              </button>
              <div className={styles.noError}>no error</div>
            </div>
          </div>
          <div id={styles.buttons}>
            <Link to="/">
              <button id={styles.backButton}>????????????</button>
            </Link>
            <button
              id={styles.signUpButton}
              htmltype="submit"
              onSubmit={onSubmit}
            >
              ????????????
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;
