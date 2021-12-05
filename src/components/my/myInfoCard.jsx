import React from 'react';
import styled from "styled-components";
import {HiChevronRight} from 'react-icons/hi';
import Card from "./Card";
import {IoPersonCircle} from "react-icons/io5";

const MyInfoCard = ({name}) => {
    return (
        <Card name={name}>
            <MyInfoCardBlock>
                <PersonBlock>
                    <IoPersonCircle />
                </PersonBlock>
                <h4>김이름</h4>
                <span>example@example.com</span>
                <span className="info-card-bottom">내 정보 수정하기</span>
            </MyInfoCardBlock>
        </Card>
    );
};

const MyInfoCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h4 {
    
  }
  
  span {
    color: #7e7e7e;
    font-size: 0.8em;
  }
  
  .info-card-bottom {
    margin: 4em 0 0 20em;
  }
`;
const PersonBlock = styled.div`
  color: rgba(0, 0, 0, 15%);
  font-size: 4em;
  line-height: 1em;
`;

export default MyInfoCard;
