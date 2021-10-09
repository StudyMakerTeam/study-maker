import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  display: inline-flex !important;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 1.2rem 1.5rem;
  height: 2.25rem;
  font-size: 1rem;
  background: #3c91e6;
  &:hover {
    background: #339af0;
  }
`;

const SubmitBtn = (props) => {
  return <StyledBtn>완료</StyledBtn>;
};

export default SubmitBtn;
