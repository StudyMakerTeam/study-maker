import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li className={styles.nav}>
          <a href="#" className={styles.navText}>
            이용약관
          </a>
        </li>
        <li className={styles.nav}>
          <a href="#" className={styles.navText}>
            개인정보처리방침
          </a>
        </li>
        <li className={styles.nav}>
          <a href="#" className={styles.navText}>
            커뮤니티이용규칙
          </a>
        </li>
        <li className={styles.nav}>
          <a href="#" className={styles.navText}>
            문의하기
          </a>
        </li>
        <li className={styles.nav}>
          <a href="#" className={styles.navText}>
            공지사항
          </a>
        </li>
        <li className={styles.nav}>
          <a href="#" className={styles.navText}>
            ©스터디메이커
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
