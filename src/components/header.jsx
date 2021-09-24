import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdPerson } from "react-icons/md";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <HeaderBlock>
      <header className="header">
        <Link to="/">
          <h2 id="logo">스터디메이커</h2>
        </Link>
        <nav className="nav">
          <ul className="navList">
            <li className="navListItem">스터디 목록</li>
            <li className="navListItem">스터디 만들기</li>
            <li className="navListItemProfile">
              <ProfileBlock className="profileImg">
                <MdPerson />
              </ProfileBlock>
              {isLoggedIn ? (
                <ul className="profile-drop_down-list">
                  <li className="profile-drop_down">
                    <Link to="/signIn">로그인</Link>
                  </li>
                  <li className="profile-drop_down">
                    <Link to="/signUp">회원가입</Link>
                  </li>
                </ul>
              ) : (
                <ul className="profile-drop_down-list">
                  <li className="profile-drop_down">
                    <Link to="/me">마이페이지</Link>
                  </li>
                  <li className="profile-drop_down">
                    <Link to="/editPassword">비밀번호 변경</Link>
                  </li>
                  <li className="profile-drop_down">
                    <Link to="/deleteAccount">탈퇴하기</Link>
                  </li>
                  <li className="profile-drop_down">
                    <Link to="/signOut">로그아웃</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    background: #fff;
    box-shadow: 0 2px 5px 0 #dbdbdb;
  }

  #logo {
    color: #3c91e6;
    font-size: 18px;
    cursor: pointer;
  }

  .nav {
    width: 250px;
    height: 100%;
  }

  .navList {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .navListItem {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: #4f4f4f;
    cursor: pointer;
  }

  .navListItem:link,
  .navListItem:visited {
    color: #767676;
  }

  .navListItem:hover,
  .profileImg:hover,
  .navListItem:active {
    color: #3c91e6;
  }

  .profile-drop_down-list {
    display: none;
  }
  .navListItemProfile:hover .profile-drop_down-list {
    display: block;
  }
  .profile-drop_down-list {
    min-width: 80px;
    z-index: 1;
    box-sizing: border-box;
    top: 50px;
    right: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #dee2e6;
    position: absolute;
    background-color: white;
  }
  .profile-drop_down a {
    color: #767676;
  }

  .profile-drop_down a:hover {
    color: #3c91e6;
  }
`;

const ProfileBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4f4f4f;
  cursor: pointer;
`;

export default Header;
