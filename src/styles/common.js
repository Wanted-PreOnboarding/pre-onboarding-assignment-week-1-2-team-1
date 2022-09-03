import { css } from '@emotion/react';
export const Color = {
  GR100: '#eef8ec',
  GR200: '#84be74',
  GR250: '#84be74',
  GR300: '#4a9536',
  GR400: '#206b0c',
  RD100: '#95366f', //할인가 색상
  PR: '#483695',
  GY100: '#e6e6e6',
  GY200: '#929892',
};

export const Roboto = (size, weight, color) => css`
  font-family: 'Roboto' !important;
  font-size: ${size * 0.625}rem !important;
  font-weight: ${weight};
  line-height: ${size * 1.5}rem;
  color: ${color};
`;
