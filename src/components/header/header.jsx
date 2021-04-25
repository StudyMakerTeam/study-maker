import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h2 id={styles.logo}>스터디메이커</h2>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>스터디 목록</li>
          <li className={styles.navListItem}>스터디 만들기</li>
          <Link to="/signin">
            <li className={styles.navListItem}>로그인</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
