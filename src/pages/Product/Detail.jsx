import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

import { Roboto, Color } from '../../styles/common';
import priceSetting from '../../utils/priceSetting';

import axios from 'axios';
import styled from '@emotion/styled';
import { FaShareAlt } from 'react-icons/fa';

function Detail() {
  const [fruit, setFruit] = useState(null);
  const [volume, setVolume] = useState(1);

  const navigate = useNavigate();

  const { id } = useParams();
  const getFruitDetail = async () => {
    axios.get('/fruit', { params: { id } }).then(res => setFruit(res.data.data));
  };

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
            <BuyButton onClick={onBuyProduct}>구매하기</BuyButton>
          </BuyComponents>
        </InfoComponents>
      )}
      <div>
        <ViewMenu>
          <ViewMenuButton href="#1">상품상세정보</ViewMenuButton>
          <ViewMenuButton href="#2">고객리뷰(0)</ViewMenuButton>
          <ViewMenuButton href="#3">Q&A(0)</ViewMenuButton>
        </ViewMenu>
        <DetailImg id="1" src="/imgs/제품상세정보.png" />
        <ReviewOrQna id="2">
          <div>고객리뷰(0)</div>
          <div>등록된 고객 리뷰가 없습니다.</div>
        </ReviewOrQna>
        <ReviewOrQna id="3">
          <div>Q&A(0)</div>
          <div>등록된 문의사항이 없습니다.</div>
        </ReviewOrQna>
      </div>
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

const ViewMenu = styled.div`
  display: flex;

  margin-top: 150px;
`;

const ViewMenuButton = styled.a`
  background-color: ${Color.GR100};
  width: 413.33px;
  height: 77px;
  text-align: center;
  border: 1px solid ${Color.GR200};
  ${Roboto(2, 600, 'dark')}
  line-height: 77px;

  &:hover {
    background-color: ${Color.GR200};
    cursor: pointer;
  }

  text-decoration: none;
  color: black;
`;

const DetailImg = styled.img`
  width: 850px;
  height: 1100px;
  margin: 384px 200px;
`;

const ReviewOrQna = styled.div`
  div:first-child {
    height: 37px;
    ${Roboto(1.8, 600, Color.GR400)}
    line-height: 21px;
    border-bottom: 1px solid ${Color.GY100};
  }

  div:last-child {
    height: 250px;
    text-align: center;
    ${Roboto(2.4, 600, Color.GY100)}
    line-height: 250px;
  }
`;
