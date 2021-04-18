import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>
        <a href="#" id={styles.logo}>
          스터디메이커
        </a>
      </h2>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a href="#" className={styles.navText}>
              스터디 목록
            </a>
          </li>
          <li className={styles.navListItem}>
            <a href="#" className={styles.navText}>
              스터디 만들기
            </a>
          </li>
          <li className={styles.navListItem}>
            <a href="#" className={styles.navText}>
              로그인
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
