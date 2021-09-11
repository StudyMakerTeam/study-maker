import React, { useState } from 'react';
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

const DateInput = (props) => {
  const [date, setDate] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setDate({
      [name]: value,
    });
    props.onChange(date);
  };

  return (
    <StyledDateInput
      name={props.name}
      type="date"
      data-placeholder={props.text}
      required
      aria-required="true"
      onChange={onChange}
    />
  );
};

export default DateInput;
