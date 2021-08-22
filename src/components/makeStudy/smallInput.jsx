import React from 'react';
import styled from 'styled-components';

const StyledSmallInput = styled.input`
  width: 6rem;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font: inherit;
  padding: 0.5em;
`;

const SmallInput = ({ text }) => {
  return <StyledSmallInput type="number" placeholder={text} />;
};

export default SmallInput;
