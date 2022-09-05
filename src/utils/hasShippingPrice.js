export const hasShppingPrice = fruit => {
  const fruitData = { ...fruit };
  if (fruitData.shippingFlag === 2) {
    return fruitData.shippingPrice;
  } else {
    return 0;
  }
};
