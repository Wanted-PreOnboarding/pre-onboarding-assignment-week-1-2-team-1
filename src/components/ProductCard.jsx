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
  border: 1px solid black;

  & > h3 {
    font-size: 14px;
    margin: 0;
    margin-top: 12px;
  }
  & > div {
    margin-bottom: 5px;
  }
  .card-price-delivery {
    font-size: 10px;
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
          <div>
            {/* discount and sale price */}
            <span>{discountPercentage}%</span>
            <span>{salePrice}</span>
          </div>
          <div className="card-price-delivery">
            {/* price and delivery fee */}
            <span>{price}</span>
            <span>무료배송</span>
          </div>
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
