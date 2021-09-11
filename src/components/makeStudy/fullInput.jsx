import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  padding: 0.8em;
`;

const FullInput = (props) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
    props.onChange(input);
  };

  return (
    <StyledInput onChange={onChange} placeholder={props.text}></StyledInput>
  );
};

export default FullInput;
