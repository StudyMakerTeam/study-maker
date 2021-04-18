import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li className={styles.navItem}>이용약관</li>
        <li className={styles.navItem}>개인정보처리방침</li>
        <li className={styles.navItem}>커뮤니티이용규칙</li>
        <li className={styles.navItem}>문의하기</li>
        <li className={styles.navItem}>공지사항</li>
        <li className={styles.navItem}>©스터디메이커</li>
      </ul>
    </footer>
  );
};

export default Footer;
