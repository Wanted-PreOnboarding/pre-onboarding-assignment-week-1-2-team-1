import styled from '@emotion/styled';

import ProductItem from './ProductItem';

import useProductList from '../../hooks/useProductList';

function ProductList({ isReveal }) {
  const { productList, setIsVisible } = useProductList();

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
              isSale={product.isSale}
              isVisible={product.isVisible}
              isReveal={isReveal}
              isAdmin={true}
              onClick={setIsVisible}
              chip={product.chip}
            />
          ))}
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
