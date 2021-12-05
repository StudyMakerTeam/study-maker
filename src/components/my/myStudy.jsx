import React from 'react';
import Card from "./Card";
import styled from "styled-components";
import {CustomButton} from "../CustomButton";

const MyStudy = ({name}) => {
    return (
        <Card name={name}>
            <MyInfoCardBlock>
                <CustomButton color={"primary"} fullWidth={true} variant="outlined" size="medium">
                    프론트엔드 스터디
                </CustomButton>
                <CustomButton color={"primary"} fullWidth={true} variant="outlined" size="medium">
                    알고리즘 스터디
                </CustomButton>
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

export default MyStudy;
