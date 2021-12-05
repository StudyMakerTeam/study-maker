import React from 'react';
import styled from "styled-components";
import {HiChevronRight} from 'react-icons/hi';
import {IoPersonCircle} from 'react-icons/io5';

const Card = ({ name, children }) => {
    return (
        <MyCardBlock>
            <div className="titleWrapper">
                <h4>{name}</h4>
                <RightArrowBlock>
                    <HiChevronRight />
                </RightArrowBlock>
            </div>
            {children}
        </MyCardBlock>
    );
};

const MyCardBlock = styled.div`
  box-sizing: border-box;
  width: 25em;
  height: 17em;
  margin-right: 5em;
  box-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 16%);
  border-radius: 0.2em;
  padding: 1.3em 1.8em;
  .titleWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    margin-bottom: 2em;
  }
`;

const RightArrowBlock = styled.div`
  padding: 0.2em 0 0 0.2em;
  color: #7E7E7E;
`;

export default Card;
