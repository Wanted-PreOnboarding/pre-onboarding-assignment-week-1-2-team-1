import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { Roboto, Color } from '../../styles/common';
import priceSetting from '../../utils/priceSetting';

import axios from 'axios';
import styled from '@emotion/styled';

function Detail() {
  const [fruit, setFruit] = React.useState(null);
  const { id } = useParams();
  const getFruitDetail = async () => {
    axios.get('/fruit', { params: { id } }).then(res => setFruit(res.data.data));
  };

  useEffect(() => {
    getFruitDetail();
  }, []);

  return (
    <Continer>
      {fruit && (
        <InfoComponents>
          <div>
            <img src={fruit.img} width="610px" alt="과일 사진" />
          </div>
          <BuyComponents>
            <Chip />
            <ProductTitle>
              <div>{fruit.name}</div>
              <div />
            </ProductTitle>
            <ProductPrice>
              <span>{Math.ceil(fruit.price - fruit.salePrice / fruit.price) / 1000}% </span>
              <span> {priceSetting(fruit.salePrice)}원</span>
            </ProductPrice>
            <DelPrice>{priceSetting(fruit.price)}원</DelPrice>
            <hr />
            <ProductDescription>설명이 아직 없습니다</ProductDescription>
            <hr />
            <ProductOption>
              <span>원산지</span>
              <span>Korea</span>
            </ProductOption>
            <ProductOption>
              <span>배송방법</span>
              <span>택배</span>
            </ProductOption>
            <ProductOption>
              <span>배송비</span>
              <span>무료</span>
            </ProductOption>
            <ProductOption>
              <span>수량</span>
              <ProductVolume />
            </ProductOption>
            <TotalPrice>
              <span>총 상품금액:</span>
              <span>58,000원</span>
            </TotalPrice>
            <BuyButton>구매하기</BuyButton>
          </BuyComponents>
        </InfoComponents>
      )}
    </Continer>
  );
}

export default Detail;

const Continer = styled.div`
  margin: 64px 100px 150px 100px;
`;

const InfoComponents = styled.div`
  display: flex;
`;

const BuyComponents = styled.div`
  margin-left: 21px;
`;

const Chip = styled.div`
  width: 120px;
  height: 18px;
  background-color: red;
`;

const ProductTitle = styled.div`
  display: flex;

  & div {
    width: 530px;
    height: 47px;
    margin-right: 26px;
    ${Roboto(2, 600, '#000')};
  }

  & div:last-child {
    width: 28px;
    height: 31px;
    background-color: blue;
    margin: auto;
  }
`;

const ProductPrice = styled.div`
  & span {
    ${Roboto(2.9, 600, Color.GR300)}
    line-height: 34.82px;
  }

  & span:last-child {
    ${Roboto(3.3, 600, Color.RD100)}
    line-height: 39.17px;
  }
`;

const DelPrice = styled.del`
  ${Roboto(1.5, 600, Color.GY200)}
  line-height: 17.58px;
`;

const ProductDescription = styled.div`
  width: 609px;
  height: 123px;
`;

const ProductOption = styled.div`
  width: 609px;
  height: 37px;
  border-bottom: 1px solid ${Color.GY200};
  margin-bottom: 8px;
  display: flex;

  & span {
    display: inline-block;
    width: 71.71px;
    height: 28px;
    ${Roboto(1.4, 600, 'dark')}
    line-height: 24.41px;
    margin-right: 9.11px;
  }

  & span:nth-child(2) {
    ${Roboto(1.4, 600, Color.GY200)}
    line-height: 24.41px;
  }
`;

const ProductVolume = styled.div`
  width: 71.18px;
  height: 29px;
  background-color: blue;
`;

const TotalPrice = styled.div`
  height: 39px;
  text-align: right;

  & span {
    ${Roboto(1.4, 600, 'dark')}
    line-height: 16.41px;
    margin-right: 9.11px;
  }

  & span:nth-child(2) {
    ${Roboto(3.343, 600, Color.GR300)}
    line-height: 39.17px;
  }
`;

const BuyButton = styled.button`
  width: 609px;
  height: 77px;
  margin-top: 19px;
  background-color: ${Color.GR300};
  ${Roboto(2.4, 600, 'white')}
  line-height: 28.13px;
  border: none;

  &:hover {
    background-color: ${Color.GR200};
    cursor: pointer;
  }
`;
