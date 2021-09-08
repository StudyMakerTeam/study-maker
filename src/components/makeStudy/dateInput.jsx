import React from 'react';
import styled from 'styled-components';

const StyledDateInput = styled.input`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  padding: 0.45em;
  /* 
  &::before {
    content: attr(data-placeholder);
    width: 100%;
  }
  &:focus::before,
  &:valid::before {
    display: none;
  } */
`;

const DateInput = ({ text }) => {
  return (
    <StyledDateInput
      type="date"
      data-placeholder={text}
      required
      aria-required="true"
    />
  );
};

export default DateInput;
