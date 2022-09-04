import React from 'react';
import { Color, Roboto } from '../../styles/common';
import styled from '@emotion/styled';

const OrderInput = ({ name, setValue, placeHolder, isWidthPercent, value, disabled }) => {
  const InputContianer = styled.div`
    box-sizing: border-box;
    max-width: ${isWidthPercent ? '100%' : '231px'};

    & label {
      display: block;
      ${Roboto(1.6, 600, '#000')};
    }
    & input {
      width: 100%;
      border: 1px solid ${Color.GY200};
      padding: 7px 8px;

      &::placeholder {
        ${Roboto(1.4, 600, Color.GY200)};
      }
    }
  `;

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <InputContianer>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder={placeHolder}
        id={name}
        value={value}
        disabled={disabled}
      />
    </InputContianer>
  );
};

export default React.memo(OrderInput);
