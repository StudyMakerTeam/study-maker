import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNumInput = styled.input`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font: inherit;
  padding: 0.5em;
`;

const NumInput = (props) => {
  const [input, setInput] = useState(0);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
    props.onChange(input);
  };

  return (
    <StyledNumInput
      type="number"
      min="1"
      onChange={onChange}
      placeholder={props.text}
    />
  );
};

export default NumInput;
