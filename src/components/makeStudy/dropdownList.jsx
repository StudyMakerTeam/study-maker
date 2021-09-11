import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
`;

const DropDownList = (props) => {
  const [choice, setChoice] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setChoice({
      [name]: value,
    });
    props.onChange(choice);
  };

  return (
    <>
      <StyledSelect required name={props.name} onChange={onChange}>
        <option value={props.optionName}>{props.optionName}</option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default DropDownList;
