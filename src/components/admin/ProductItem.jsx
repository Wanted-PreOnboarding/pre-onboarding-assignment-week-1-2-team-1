import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as Check } from '../../assets/svg/icon-check.svg';
import { ReactComponent as TrashCan } from '../../assets/svg/icon-trashcan.svg';
import { ReactComponent as XMark } from '../../assets/svg/icon-x.svg';

import { Color, Roboto } from '../../styles/common';
import getChipBackground from '../../utils/background';
import priceSetting from '../../utils/priceSetting';
import useProductItem from '../../hooks/useProductItem';

function ProductItem({
  id,
  img,
  name,
  price,
  salePrice,
  isSale,
  isVisible,
  isReveal,
  onClick,
  isAdmin,
}) {
  const { deleteProduct } = useProductItem();
  const chip = ['BEST', 'SALE', 'MD'];
  // const isEditMode = true;

  const changeHandler = () => {
    onClick(id, isReveal);
  };

  const removeHandler = () => {
    deleteProduct(id);
  };

  return (
    <li>
      <Container>
        <ImageContainer isReveal={isReveal} onClick={changeHandler}>
          {isReveal && (
            <RevealBox isVisible={isVisible}>
              {isVisible && <Check />}
              {!isVisible && <XMark />}
            </RevealBox>
          )}
          <Image src={img} alt={name} />
        </ImageContainer>
        <SideContainer>
          <TitleGroup>
            <ChipGroup>
              {chip.map(chipName => {
                return (
                  <Chip bgColor={getChipBackground(chipName)}>
                    <span>{chipName}</span>
                  </Chip>
                );
              })}
            </ChipGroup>
            <p>{name}</p>
            <span>수량{289}개</span>
          </TitleGroup>
          <PriceGroup>{priceSetting(+price)}원</PriceGroup>
          <SalePriceGroup>
            <span>30%</span> <span>{priceSetting(+salePrice)}원</span>
          </SalePriceGroup>
          <DeleveryGroup>무료배송</DeleveryGroup>
          {isAdmin && <TrashCan onClick={removeHandler} />}
        </SideContainer>
      </Container>
    </li>
  );
}

export default ProductItem;

const Container = styled.div`
  display: flex;
  background-color: #fafafa;
  margin-top: 15px;
`;

const RevealBox = styled.div`
  background-color: ${props => (props.isVisible ? Color.GR400 : Color.RD100)};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  cursor: ${props => (props.isReveal ? 'pointer' : 'cursor')};
`;

const Image = styled.img`
  height: 180px;
  width: 180px;
  object-fit: cover;
`;

const ChipGroup = styled.div`
  display: flex;
`;

const Chip = styled.div`
  width: 40px;
  height: 18px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    ${Roboto(1.2, 600, 'white')};
  }
`;

const SideContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  background-color: white;
`;

const TitleGroup = styled.div`
  width: 580px;

  & p {
    margin: 0;
    ${Roboto(1.8, 600, '#333')};
  }
`;

const PriceGroup = styled.p`
  text-decoration: line-through;

  ${Roboto(1.2, 600, Color.GY200)};
`;

const SalePriceGroup = styled.div`
  & span {
    ${Roboto(1.5, 600, Color.RD100)};
  }

  & span:first-of-type {
    ${Roboto(1.2, 600, Color.GR400)};
  }
`;

const DeleveryGroup = styled.p`
  ${Roboto(1.2, 600, Color.GY200)};
`;
