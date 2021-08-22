import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  padding: 0.5em 3.5em 0.5em 1em;
`;

const FullInput = ({ text }) => {
  return <StyledInput placeholder={text}></StyledInput>;
};

export default FullInput;
