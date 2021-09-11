import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  padding: 0.9em;
  resize: none;
`;

const DetailInput = (props) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
    props.onChange(input);
  };

  return (
    <StyledInput
      required
      name={props.name}
      onChange={onChange}
      placeholder={props.text}
    ></StyledInput>
  );
};

export default DetailInput;
