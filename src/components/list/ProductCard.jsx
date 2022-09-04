import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Chip from './Chip';

//todo: 리팩토링 과정을 통해서 style로 컴포넌트 옮기기
const ProductCardContainer = styled.div`
  width: 240px;
  height: 334px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const NoSale = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  padding: 1rem;
  word-break: keep-all;
  text-align: center;
`;
const ImageWrapperLink = styled(Link)`
  position: relative;
  & > div {
    position: absolute;
    display: flex;
  }
  & img {
    width: 240px;
    height: 240px;
    object-fit: cover;
  }
`;
const ProductCardDescription = styled.div`
  height: 114px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }
  & > a > h3 {
    font-size: 14px;
    margin: 0;
    margin-top: 12px;
    height: 32px;

    color: #000000;
  }
  & > div {
    margin-bottom: 5px;
  }
`;

const DiscountPercentageSpan = styled.span`
  font-size: 16px;
  color: #206b0c;
  font-weight: bold;
`;
const SalePriceSpan = styled.span`
  font-size: 18px;
  color: #95366f;
  font-weight: bold;
`;
const PriceAndDelivery = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 10px;
    color: #929892;
  }
  & span:first-of-type {
    text-decoration: line-through;
  }
`;

function ProductCard({ productItem }) {
  const { id, img, chip, name, price, saleFlag, salePrice, shippingFlag, shippingPrice } =
    productItem;

  const discountPercentage = (100 - (salePrice / price) * 100).toFixed(0);
  const url = `/fruit/${id}`;

  //todo : chips 데이터 수정. sale은 chip으로 들어가서는 안될 것 같음. isSale과 겹치는 부분이 생긴다.
  return (
    <ProductCardContainer>
      {saleFlag > 0 && (
        <NoSale>{saleFlag === 1 ? '이 상품은 현재 판매기간이 아닙니다' : 'SOLD OUT'}</NoSale>
      )}
      <ImageWrapperLink to={url}>
        <div>{chip.length > 0 && chip.map((c, idx) => <Chip key={idx} chip={c} />)}</div>
        <img src={img} alt={name} />
      </ImageWrapperLink>
      <ProductCardDescription>
        <Link to={url}>
          <h3>{name}</h3>
        </Link>
        <div>
          <div>
            <DiscountPercentageSpan>{discountPercentage}%</DiscountPercentageSpan>
            <SalePriceSpan>{salePrice}</SalePriceSpan>
          </div>
          <PriceAndDelivery>
            <span>{price}</span>
            <span>{shippingFlag === 0 ? '무료배송' : `배송료 ${shippingPrice}`}</span>
          </PriceAndDelivery>
        </div>
      </ProductCardDescription>
    </ProductCardContainer>
  );
}

export default ProductCard;
