import styled from '@emotion/styled';

//todo: 리팩토링 과정을 통해서 style로 컴포넌트 옮기기
const ProductCardContainer = styled.div`
  background-color: red;
  width: 240px;
  height: 334px;
  display: flex;
  flex-direction: column;
  & img {
    width: 100%;
  }
`;
const ProductCardDescription = styled.div`
  & h3 {
    font-size: 14px;
  }
`;

function ProductCard({ id, img, isSale, name, price, salePrice, chip }) {
  const discountPercentage = (100 - (salePrice / price) * 100).toFixed(0);

  return (
    <ProductCardContainer>
      <div>
        {/* 이후에 absolute로 sale, best,md badge를 추가하기 위해서 div로 감쌌음*/}
        <img src={img} alt="" />
      </div>
      <ProductCardDescription>
        <h3>{name}</h3>
        <div>
          {/* discount and sale price */}
          <span>{discountPercentage}%</span>
          <span>{salePrice}</span>
        </div>
        <div>
          {/* price and delivery fee */}
          <span>{price}</span>
          <span>무료배송</span>
        </div>
      </ProductCardDescription>
    </ProductCardContainer>
  );
}

export default ProductCard;
