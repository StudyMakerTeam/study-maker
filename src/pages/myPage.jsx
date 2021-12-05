import React from 'react';
import MyInfo from "../components/my/myInfo";
import MyStudy from "../components/my/myStudy";
import styled from "styled-components";
import Card from "../components/my/Card";
import MyInfoCard from "../components/my/myInfoCard";

const MyPage = () => {
    return (
        <MyPageBlock>
            <MyInfoCard />
            <MyInfoCard />
        </MyPageBlock>
    );
};

export default MyPage;

const MyPageBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  height: 30em;
`;
