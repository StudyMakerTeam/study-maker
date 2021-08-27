import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdPerson } from "react-icons/md";

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
          <li>
            <ProfileBlock>
              <MdPerson />
            </ProfileBlock>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const ProfileBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
`;
