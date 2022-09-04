//주문번호와 주문일자를 반환합니다.
export const orderNum = () => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const now = new Date(Date.now() - offset).toISOString();

  const randomNum = Math.floor(Math.random() * 1000000);

  const year = now.slice(0, 4);
  const month = now.slice(5, 7);
  const date = now.slice(8, 10);
  const hour = now.slice(11, 13);
  const minute = now.slice(14, 16);

  const orderTime = `${year}.${month}.${date} ${hour}:${minute}`;
  const orderNumber = `${year}${month}${date}${randomNum}`;

  return { orderTime, orderNumber };
};
