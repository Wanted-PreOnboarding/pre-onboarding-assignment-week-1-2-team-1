import { Color } from '../styles/common';

const matchedChipColor = {
  BEST: `${Color.PR}`,
  SALE: `${Color.RD100}`,
  MD: `${Color.GR300}`,
};

const matchedReleaseColor = {
  0: `${Color.GR300}`,
  1: `${Color.RD100}`,
  2: `${Color.PR}`,
};

export function getChipBackground(chipName) {
  return matchedChipColor[chipName];
}

export function getReleaseBackground(relaseNumber) {
  return matchedReleaseColor[relaseNumber];
}
