import React from 'react';
import styled from "styled-components";
import {HiChevronRight} from 'react-icons/hi';
import Card from "./Card";
import {IoPersonCircle} from "react-icons/io5";

const MyInfoCard = () => {
    return (
        <Card>
            <MyInfoCardBlock>
                <PersonBlock>
                    <IoPersonCircle />
                </PersonBlock>
                <h3>김이름</h3>
            </MyInfoCardBlock>
        </Card>
    );
};

const MyInfoCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PersonBlock = styled.div`
  color: rgba(0, 0, 0, 15%);
  font-size: 4em;
`;

export default MyInfoCard;
