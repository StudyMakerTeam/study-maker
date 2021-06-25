import React, { useCallback, useState } from "react";
import styles from "./signIn.module.css";
import { Link } from "react-router-dom";
import Modal from "../modal/modal.jsx";
import FindEmail from "../signIn/findEmail";
import FindPassword from "./findPassword";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const signinInfo = {
      email: email,
      password: password,
    };
    const signin_info = {
      method: "POST",
      body: JSON.stringify(signinInfo),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("/api/sign-in", signin_info)
      .then(console.log(signinInfo))
      .then(console.log(signin_info))
      .then(function (response) {
        console.log(response);
      })
      .then(alert("로그인이 완료되었습니다."));
    // .then((window.location.href = "/"));
  };

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

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
