import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Chip from '../Chip';
import priceSetting from '../../utils/priceSetting';
import { Roboto, Color } from '../../styles/common';

import { FaShareAlt } from 'react-icons/fa';
import styled from '@emotion/styled';

function DetailInfo({ fruit, id }) {
  const [volume, setVolume] = useState(1);

  const navigate = useNavigate();

  const onBuyProduct = () => {
    navigate(`/fruit/${id}/payment`, {
      state: { fruit, volume },
    });
  };

  const onMinusVolume = () => {
    if (volume > 1) {
      setVolume(volume - 1);
    }
  };

  return (
    <InfoComponents>
      <div>
        <img src={fruit.img} width="610px" alt="과일 사진" />
      </div>
      <BuyComponents>
        <ChipContainer>
          {fruit.chip.map(chip => (
            <Chip chip={chip} />
          ))}
        </ChipContainer>
        <ProductTitle>
          <div>{fruit.name}</div>
          <FaShareAlt color={Color.GR400} size="30px" />
        </ProductTitle>
        <ProductPrice>
          <span>{Math.round(((fruit.price - fruit.salePrice) / fruit.price) * 100)}% </span>
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
          <ProductVolume>
            <button onClick={onMinusVolume}>-</button>
            <div>{volume}</div>
            <button onClick={() => setVolume(prev => prev + 1)}>+</button>
          </ProductVolume>
        </ProductOption>
        <TotalPrice>
          <span>총 상품금액:</span>
          <span>{priceSetting(volume * fruit.salePrice)}원</span>
        </TotalPrice>
        {fruit.saleFlag === 0 ? (
          <BuyButton onClick={onBuyProduct}>구매하기</BuyButton>
        ) : fruit.saleFlag === 1 ? (
          <NoneButton disabled>이 상품은 현재 판매기간이 아닙니다.</NoneButton>
        ) : (
          <SoldOutButton disabled>품절된 상품입니다.</SoldOutButton>
        )}
      </BuyComponents>
    </InfoComponents>
  );
}

export default DetailInfo;

const InfoComponents = styled.div`
  display: flex;
`;

const BuyComponents = styled.div`
  margin-left: 21px;
`;

const ChipContainer = styled.div`
  display: flex;
`;

const ProductTitle = styled.div`
  display: flex;

  div {
    width: 530px;
    height: 50px;
    margin-right: 26px;
    ${Roboto(2, 600, '#000')};
    overflow: auto;
  }

  div:last-child {
    width: 28px;
    height: 31px;
    background-color: blue;
    margin: auto;
  }
`;

const ProductPrice = styled.div`
  span {
    ${Roboto(2.9, 600, Color.GR300)}
    line-height: 34.82px;
  }

  span:last-child {
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

  span {
    display: inline-block;
    width: 71.71px;
    height: 28px;
    ${Roboto(1.4, 600, 'dark')}
    line-height: 24.41px;
    margin-right: 9.11px;
  }

  span:nth-child(2) {
    ${Roboto(1.4, 600, Color.GY200)}
    line-height: 24.41px;
  }
`;

const ProductVolume = styled.div`
  display: flex;
  width: 71.18px;
  height: 29px;

  button {
    background-color: transparent;
    border: 1px solid ${Color.GY200};
    ${Roboto(1.2, 600, Color.GY200)}
    line-height: 5px;
  }
  div {
    width: 100%;
    text-align: center;
    border-top: 1px solid ${Color.GY200};
    border-bottom: 1px solid ${Color.GY200};
    ${Roboto(1.4, 600, 'dark')}
    line-height: 29px;
  }
`;

const TotalPrice = styled.div`
  height: 39px;
  text-align: right;

  span {
    ${Roboto(1.4, 600, 'dark')}
    line-height: 16.41px;
    margin-right: 9.11px;
  }

  span:nth-child(2) {
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

const SoldOutButton = styled(BuyButton)`
  background-color: ${Color.GY200};
  &:hover {
    background-color: ${Color.GY200};
    cursor: default;
  }
`;

const NoneButton = styled(BuyButton)`
  background-color: ${Color.GY100};
  color: black;
  &:hover {
    background-color: ${Color.GY100};
    cursor: default;
  }
`;
