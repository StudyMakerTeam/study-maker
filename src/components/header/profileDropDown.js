import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileDropDown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ProfileDropDownBlock>
      { isLoggedIn ?
        <ul className="profile-drop_down-list">
          <li className="profile-drop_down"><Link to="/signIn">로그인</Link></li>
          <li className="profile-drop_down"><Link to="/signUp">회원가입</Link></li>
        </ul>
        :
        <ul className="profile-drop_down-list">
          <li className="profile-drop_down"><Link to="/me">마이페이지</Link></li>
          <li className="profile-drop_down"><Link to="/editPassword">비밀번호 변경</Link></li>
          <li className="profile-drop_down"><Link to="/deleteAccount">탈퇴하기</Link></li>
          <li className="profile-drop_down"><Link to="/signOut">로그아웃</Link></li>
        </ul>
      }
    </ProfileDropDownBlock>
  );
};

const ProfileDropDownBlock = styled.div`
  float: right;
  display: none;
  position: absolute;
  min-width: 158px;
  z-index: 1;

  .profile-drop_down-list {
    box-sizing: border-box;
    top: 73px;
    right: 150px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #dee2e6;
    /* box-shadow: 0 -3px 20px rgba(0, 0, 0, 0.1); */
    position: absolute;
    background-color: white;
  }

  /* .profile_box::after { */
    /* bottom: 100%; 말풍선꼭지위치 위아래 */
    /* left: 10%; 말풍선위치 좌우 */
    /* border: 1px solid #dee2e6; */
    /* content: ""; */
    /* height: 0; */
    /* width: 0; */
    /* position: absolute; */
    /* pointer-events: none; */
    /* border-color: transparent transparent white transparent; 말풍선 꼭지방향 */
    /* border-width: 8px; 말풍선 꼭지 사이즈 */
    /* margin-left: 10px; 말풍선 상세위치 조정 */
  /* } */
  

  .sign_out {
    cursor: pointer;
  }

`;


export default ProfileDropDown;