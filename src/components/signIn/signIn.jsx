import React, { useCallback, useState } from "react";
import styles from "./signIn.module.css";
import { Link } from "react-router-dom";
import Modal from "../modal/modal.jsx";
import FindEmail from "../signIn/findEmail";
import FindPassword from "./findPassword";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const onChangeEmail = useCallback((e) => {
    setEmailError(!isEmail(e.target.value));
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const isEmail = (email) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(email);
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
        <div>
          <button className={styles.findInfo} onClick={openEmailModal}>
            이메일 찾기
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
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
        <div>
          스터디메이커가 처음이신가요? <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
