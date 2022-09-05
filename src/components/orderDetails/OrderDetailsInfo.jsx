import React from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../../styles/common';
import priceSetting from '../../utils/priceSetting';
import { hasShppingPrice } from '../../utils/hasShippingPrice';

const OrderInfo = ({ fruit, volume }) => {
  const hasSippingPrice = hasShppingPrice(fruit);

  return (
    <OrderInfoContainer>
      <ul>
        <li>상품이미지</li>
        <li>상품정보</li>
        <li>수량</li>
        <li>주문금액</li>
        <li>주문상태</li>
      </ul>
      <Section>
        <MyOrderHistoryContainer>
          <img src={fruit.img} alt="내가 구입할 상품" />
          <ProductName className="product-name">
            <h1>{fruit.name}</h1>
            <Flex>
              <Chip>필수 선택</Chip> <span>유자청 480g(960g)/2개</span>
            </Flex>
            <Amount className="media-volume">수량: {volume}개</Amount>
            <Price className="media-price">
              <h1>{priceSetting(fruit.salePrice * volume + hasSippingPrice)}원</h1>
            </Price>
          </ProductName>
          <Amount className="volume" align="center">
            {volume}개
          </Amount>
          <Price className="price" style={{ textAlign: 'center' }}>
            <h1>{priceSetting(fruit.salePrice * volume + hasSippingPrice)}원</h1>
          </Price>
          <OrderStatus>
            <span>상품 준비중</span>
            <button>배송조회</button>
          </OrderStatus>
          <DivForEmptySpace />
        </MyOrderHistoryContainer>
        <BottomBtn>
          <button>배송조회</button>
        </BottomBtn>
      </Section>
    </OrderInfoContainer>
  );
};

export default React.memo(OrderInfo);

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomBtn = styled.div`
  display: none;

  & button {
    ${Roboto(2, 600, '#000')};
    width: 90%;
    display: block;
    margin: 0 auto 40px;
    padding: 0 40px;
    background-color: #fff;
    border: 1.5px solid ${Color.GR300};
  }

  @media (max-width: 1240px) {
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
`;

const OrderInfoContainer = styled.div`
  margin-bottom: 10px;

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
        flex: 2.4;
      }
      &:nth-of-type(3) {
        flex: 1.3;
        padding-right: 2.5%;
      }
      &:last-child {
        flex: 1.2;
      }
    }

    @media (max-width: 1240px) {
      width: 100%;
      margin: auto;
      & li {
        &:nth-of-type(2) {
          flex: 1.5;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: none;
        }
      }
      & .shipping {
        display: none;
      }
    }
  }
`;

const ProductName = styled.div`
  width: 400px;
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
    line-height: 12px;
  }
`;

const Amount = styled.div`
  width: 180px;
  ${Roboto(1.6, 400, '#000')};
  text-align: ${props => props.align === 'center' && 'center'};
`;

const OrderStatus = styled.div`
  ${Roboto(1.5, 600, '#000')};
  width: 130px;
  text-align: center;

  & button {
    ${Roboto(1, 600, '#000')};
    display: block;
    margin: 0 auto;
    background-color: #fff;
    border: 1.5px solid ${Color.GR300};
  }

  @media (max-width: 1240px) {
    & button {
      display: none;
    }
  }
`;

const MyOrderHistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  & img {
    width: 180px;
    height: 180px;
  }

  & .media-volume {
    display: none;
  }

  & .media-price {
    display: none;
  }

  @media (max-width: 1240px) {
    width: 100%;
    padding: 40px;
    margin: auto;

    & .volume {
      display: none;
    }

    & .price {
      display: none;
    }

    & .media-volume {
      display: block;
    }

    & .media-price {
      display: block;
    }
  }
`;

const Chip = styled.div`
  background-color: ${Color.GR400};
  height: 18px;
  padding: 3px 2px;
  ${Roboto(1, 600, '#fff')};
  color: #fff !important;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 5px;
`;

const Price = styled.div`
  width: 200px;
  & h1 {
    ${Roboto(2.8, 600, Color.RD100)};
    line-height: 33px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const DivForEmptySpace = styled.div``;
