import React from 'react';
import styled from 'styled-components';
import MakeStudy from '../components/makeStudy/makeStudy';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const StyledContainer = styled.div`
  margin: 100px auto;
  width: 60%;

  & h2 {
    margin-bottom: 30px;
    font-size: 1.8rem;
  }
`;

const MakeStudyPage = (props) => {
  return (
    <>
      <Header />
      <StyledContainer>
        <h2>스터디 만들기</h2>
        <MakeStudy />
      </StyledContainer>
      <Footer />
    </>
  );
};

export default MakeStudyPage;
