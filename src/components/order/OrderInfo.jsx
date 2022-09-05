import React from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../../styles/common';
import priceSetting from '../../utils/priceSetting';

const OrderInfo = ({ info, volume }) => {
  const chipColor = chip => {
    if (chip === 'BEST') {
      return Color.PR;
    } else if (chip === 'MD') {
      return Color.GR300;
    } else if (chip === 'SALE') {
      return Color.RD100;
    }
  };

  const hasSippingPrice = (shippingFlag, price) => {
    if (shippingFlag === 0) {
      return '무료배송';
    } else if (shippingFlag === 1) {
      return '조건부 배송';
    } else {
      return `${priceSetting(Number(price))}원`;
    }
  };

  const getShipping = (shippingFlag, price) => {
    if (shippingFlag === 2) {
      return ` + ${priceSetting(Number(price))}원`;
    } else {
      return null;
    }
  };

  const totalPrice = () => {
    const fruitData = { ...info };
    if (fruitData.isSale && fruitData.shippingFlag === 2) {
      return priceSetting(fruitData.salePrice * volume + fruitData.shippingPrice);
    } else if (fruitData.isSale && fruitData.shippingFlag === 0) {
      return priceSetting(fruitData.salePrice * volume);
    } else if (!fruitData.isSale && fruitData.shippingFlag === 2) {
      return priceSetting(fruitData.price * volume + fruitData.shippingPrice);
    } else if (!fruitData.isSale && fruitData.shippingFlag === 0) {
      return priceSetting(fruitData.price * volume);
    }
  };

  const Chip = styled.div`
    background-color: ${props => chipColor(props.chipData)};
    height: 18px;
    padding: 3px 2px;
    ${Roboto(1, 600, '#fff')};
    color: #fff !important;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 5px;
  `;

  return (
    <OrderInfoContainer>
      <ul>
        <li>상품이미지</li>
        <li>상품정보</li>
        <li>배송비</li>
        <li>수량</li>
        <li>결제 예정 금액(상품금액 + 배송비)</li>
      </ul>
      <MyOrderHistoryContainer>
        <img src={info.img} alt="내가 구입할 상품" />
        <ProductName className="product-name">
          <h1>{info.name}</h1>
          <Flex>
            {info.chip.map(item => (
              <Chip chipData={item} key={item}>
                {item}
              </Chip>
            ))}
            <span>/{volume}개</span>
          </Flex>
        </ProductName>
        <span className="shipping">{hasSippingPrice(info.shippingFlag, info.shippingPrice)}</span>
        <span>{volume}개</span>
        <Price>
          <h1>{totalPrice()}원</h1>
          <span>
            {info.isSale
              ? priceSetting(info.salePrice * volume)
              : priceSetting(info.price * volume)}
            원{getShipping(info.shippingFlag, info.shippingPrice)}
          </span>
        </Price>
      </MyOrderHistoryContainer>
    </OrderInfoContainer>
  );
};

export default React.memo(OrderInfo);

const OrderInfoContainer = styled.div`
  margin-bottom: 57px;
  margin-top: 57px;

  @media (max-width: 765px) {
    width: 80%;
    & li {
      &:nth-of-type(2) {
        flex: 1.5;
      }
      &:nth-of-type(3) {
        display: none;
      }
    }
    & .shipping {
      display: none !important;
    }

    & img {
      width: 100px !important;
      height: 100px !important;
    }
  }

  & ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 26px 0 26px 53px;

    & li {
      display: inline;

      &:not(:first-of-type) {
        text-align: center;
      }

      ${Roboto(1.6, 600, Color.GR400)};
      line-height: 19px;
      flex: 1;
      &:nth-of-type(2) {
        flex: 2.9;
      }
      &:last-child {
        flex: 2;
      }
    }
  }
`;

const ProductName = styled.div`
  width: 425px;
  @media (max-width: 765px) {
    & h1 {
      ${Roboto(1.15, 600, '#000')};
    }
  }
  & h1 {
    ${Roboto(1.6, 600, '#000')};
    margin: 0;
  }

  & p {
    display: flex;
    align-items: center;
    margin: 0;
  }
  & span {
    ${Roboto(1, 600, Color.GY200)};
    font-size: 10px !important;
    line-height: 12px;
  }
`;

export const MyOrderHistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  @media (max-width: 1240px) {
    & .shipping {
      display: none;
    }
  }

  & img {
    width: 180px;
    height: 180px;
  }

  & span:not(:last-child) {
    display: block;
    width: 140px;
  }
  & .shipping {
    padding-left: 10px;
  }
`;

const Price = styled.div`
  width: 200px;

  @media (max-width: 765px) {
    & h1 {
      ${Roboto(2, 600, Color.RD100)};
    }
    & span {
      ${Roboto(1.15, 600, Color.GY200)};
      line-height: 13px;
    }
  }

  & h1 {
    ${Roboto(2.8, 600, Color.RD100)};
    line-height: 33px;
  }

  & span {
    ${Roboto(1.6, 600, Color.GY200)};
    line-height: 19px;
  }
`;

const Flex = styled.div`
  display: flex;
`;
