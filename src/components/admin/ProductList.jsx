import styled from '@emotion/styled';

import ProductItem from './ProductItem';

function ProductList({
  isReveal,
  productList,
  setIsVisible,
  getItems,
  putItems,
  showHandler,
  show,
}) {
  return (
    <Container>
      <ul>
        {productList &&
          productList.map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              chip={product.chip}
              isSale={product.isSale}
              shippingFlag={product.shippingFlag}
              saleFlag={product.saleFlag}
              isReveal={isReveal}
              fetchList={getItems}
              putList={putItems}
              changeIsReveal={setIsVisible}
              showHandler={showHandler}
              show={show}
            />
          ))}
        {!productList && <p>상품이 존재하지 않습니다.</p>}
      </ul>
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  width: 1240px;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
