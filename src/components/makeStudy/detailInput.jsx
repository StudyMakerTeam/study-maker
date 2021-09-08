import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  padding: 0.5em 1em;
  resize: none;
`;

const DetailInput = ({ text }) => {
  return <StyledInput placeholder={text}></StyledInput>;
};

export default DetailInput;
