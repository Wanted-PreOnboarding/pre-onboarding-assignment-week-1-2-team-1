import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import ProductCard from '../../components/ProductCard';

//todo: refacotring을 할 때, style 폴더로 옮겨야 함.
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Introduction = styled.div`
  width: 100%;
  height: 313px;
  background-color: #eef8ec;
`;
const ProductCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    margin-right: 10px;
    margin-bottom: 28px;
  }
`;

function List() {
  const [productItems, setproductItems] = useState([]);

  useEffect(() => {
    const fetchProducItems = async () => {
      const { data } = await axios.get(`getfruits?page=1`);
      const { returnPageData } = data;
      setproductItems(returnPageData);
    };

    fetchProducItems();
  }, []);

  return (
    <ListContainer>
      <Introduction>
        <p>
          친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어 가장
          알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.
        </p>
      </Introduction>
      <div>
        <ul>
          {
            //메뉴 나열
          }
        </ul>
        <ProductCardContainer>
          {productItems.map(({ id, img, isSale, name, price, salePrice }) => (
            <ProductCard
              key={id}
              id={id}
              img={img}
              isSale={isSale}
              name={name}
              price={price}
              salePrice={salePrice}
            />
          ))}
        </ProductCardContainer>
      </div>
    </ListContainer>
  );
}

export default List;
