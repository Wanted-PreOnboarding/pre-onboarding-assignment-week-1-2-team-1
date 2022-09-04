import React from 'react';

import styled from '@emotion/styled';

import { Color, Roboto } from '../../styles/common';

function Button({ width, height, onClick, children }) {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: none;
  text-decoration: none;
  background: ${Color.GR300};
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${Roboto(2, 600, 'white')};

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: ${Color.GR400};
    border-color: ${Color.GR400};
  }
`;
