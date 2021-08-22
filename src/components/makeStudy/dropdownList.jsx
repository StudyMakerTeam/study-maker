import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    background-color: white;
    border: 1px solid #BDBDBD;
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

    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      radial-gradient(#ddd 70%, transparent 72%);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - .5em) .5em;
    background-size:
      5px 5px,
      5px 5px,
      1.5em 1.5em;
    background-repeat: no-repeat;
    }
`;

const DropDownList = ({ name, options }) => {
  return (
    <>
      <StyledSelect required>
        <option value={name}>{name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default DropDownList;
