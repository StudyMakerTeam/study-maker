import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 id={styles.logo}>스터디메이커</h2>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>스터디 목록</li>
          <li className={styles.navListItem}>스터디 만들기</li>
          <li className={styles.navListItem}>로그인</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
