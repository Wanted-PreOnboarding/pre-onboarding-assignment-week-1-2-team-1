import styled from '@emotion/styled';

//todo: 리팩토링 과정을 통해서 style로 컴포넌트 옮기기
const ProductCardContainer = styled.div`
  width: 240px;
  height: 334px;
  display: flex;
  flex-direction: column;
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
  & > h3 {
    font-size: 14px;
    margin: 0;
    margin-top: 12px;
    height: 32px;
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

function ProductCard({ id, img, isSale, name, price, salePrice, chip }) {
  const discountPercentage = (100 - (salePrice / price) * 100).toFixed(0);

  return (
    <ProductCardContainer>
      <div>
        {/* todo: 이후에 absolute로 sale, best,md badge를 추가하기 위해서 div로 감쌌음 */}
        <img src={img} alt={name} />
      </div>
      <ProductCardDescription>
        <h3>{name}</h3>
        <div>
          <div>
            <DiscountPercentageSpan>{discountPercentage}%</DiscountPercentageSpan>
            <SalePriceSpan>{salePrice}</SalePriceSpan>
          </div>
          <PriceAndDelivery>
            <span>{price}</span>
            <span>무료배송</span>
          </PriceAndDelivery>
        </div>
      </ProductCardDescription>
    </ProductCardContainer>
  );
}

export default ProductCard;
