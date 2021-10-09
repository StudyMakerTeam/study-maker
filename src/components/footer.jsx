import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBlock>
      <ul>
        <li className="navItem">이용약관</li>
        <li className="navItem">개인정보처리방침</li>
        <li className="navItem">커뮤니티이용규칙</li>
        <li className="navItem">문의하기</li>
        <li className="navItem">공지사항</li>
        <li className="navItem">©스터디메이커</li>
      </ul>
    </FooterBlock>
  );
};

const FooterBlock = styled.footer`
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 6rem;
  margin-top: 200px;

  .navItem {
    display: inline-block;
    padding: 0 5px;
    font-size: 0.8rem;
    color: #767676;
    cursor: pointer;
  }

  .navItem:link,
  .navItem:visited {
    color: #767676;
  }

  .navItem:hover,
  .navItem:active {
    color: #3c91e6;
  }
`;
export default Footer;
