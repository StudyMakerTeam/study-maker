import React, { useEffect, useReducer, useState } from "react";
import styles from "./signIn.module.css";
import { Link, useHistory } from "react-router-dom";
import Modal from "../modal/modal.jsx";
import FindEmail from "../signIn/findEmail";
import FindPassword from "./findPassword";
import axios from "axios";

// signIn api 통신 부분(useReducer 활용)
const signInInitialState = {
  loading: null,
  error: null,
};

function signInReducer(state = signInInitialState, action) {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

const SignIn = () => {
  // modal 부분(이메일, 비밀번호 찾기 팝업)
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  //

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(signInReducer, signInInitialState);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/sign-in", {
        email: email,
        password: password,
      });
      dispatch({ type: "SUCCESS", data: response.data });
      history.push("/");
    } catch (e) {
      dispatch({ type: "FAILURE", error: e });
    }
  };

  if (state.error) {
    alert("에러가 발생했습니다");
    history.push("/signin");
  }
  //

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const openEmailModal = () => {
    setEmailModalOpen(true);
  };
  const closeEmailModal = () => {
    setEmailModalOpen(false);
  };

  const openPasswordModal = () => {
    setPasswordModalOpen(true);
  };
  const closePasswordModal = () => {
    setPasswordModalOpen(false);
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
              <div className={styles.noError}>no error</div>
            </div>
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
              name="user-password"
              onChange={onChangePassword}
            />
            <div className={styles.noError}>no error</div>
          </div>
          <div id={styles.buttons}>
            <button
              id={styles.signInButton}
              htmltype="submt"
              onSubmit={onSubmit}
            >
              로그인
            </button>
          </div>
        </form>
        <div className={styles.findInfoMenu}>
          <button className={styles.findInfo} onClick={openEmailModal}>
            이메일 찾기&nbsp;&nbsp;|&nbsp;&nbsp;
          </button>
          <button className={styles.findInfo} onClick={openPasswordModal}>
            비밀번호 찾기
          </button>
        </div>
        <Modal open={emailModalOpen} close={closeEmailModal}>
          <FindEmail />
        </Modal>
        <Modal open={passwordModalOpen} close={closePasswordModal}>
          <FindPassword />
        </Modal>
        <div className={styles.signUpQuest}>
          스터디메이커가 처음이신가요?{" "}
          <Link to="/signup">
            <span className={styles.signUp}>회원가입</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
