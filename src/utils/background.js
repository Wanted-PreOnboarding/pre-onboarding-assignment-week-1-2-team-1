import { Color } from '../styles/common';

const matchedChipColor = {
  BEST: `${Color.PR}`,
  SALE: `${Color.RD100}`,
  MD: `${Color.GR300}`,
};

function getChipBackground(chipName) {
  return matchedChipColor[chipName];
}

export default getChipBackground;
