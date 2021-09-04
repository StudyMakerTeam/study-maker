import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdPerson } from "react-icons/md";
import ProfileDropDown from "./profileDropDown";

const Header = () => {
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
            <li>
              <ProfileBlock className="profile">
                <MdPerson />
              </ProfileBlock>
              <ProfileDropDown className="profile-drop_down" />
            </li>
          </ul>
        </nav>
      </header>
    </HeaderBlock>
  );
};


export default Header;

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
    color: #767676;
    cursor: pointer;
  }

  .navListItem:link,
  .navListItem:visited {
    color: #767676;
  }

  .navListItem:hover,
  .navListItem:active {
    color: #3c91e6;
  }

  .profile:hover .profile-drop_down {
    display: block;
  }
`;

const ProfileBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
`;
