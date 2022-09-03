import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import ProductCard from '../../components/ProductCard';

//todo: refacotring을 할 때, style 폴더로 옮겨야 함.
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Introduction = styled.section`
  width: 100%;
  height: 313px;
  background-color: #eef8ec;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & img {
    width: 46px;
    height: 46px;
  }
  & h3 {
    color: #4a9536;
    font-size: 22px;
    font-weight: bold;
  }
  & p {
    text-align: center;
    line-height: 19px;
    display: flex;
    flex-direction: column;
  }
  & p span {
    margin-bottom: 10px;
  }
`;
const ChipMenu = styled.section`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ProductCardContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    margin-right: 10px;
    margin-bottom: 28px;
  }
`;
const Pagination = styled.div``;

function List() {
  const [productItems, setproductItems] = useState([]);
  const [pagination, setPagination] = useState(1);

  const chipsMenus = ['Sale', 'Best', 'MD', '전체'];

  useEffect(() => {
    const fetchProducItems = async () => {
      const { data } = await axios.get(`getfruits?page=${pagination}`);
      const { returnPageData } = data;
      setproductItems(returnPageData);
    };

    fetchProducItems();
  }, [pagination]);

  return (
    <ListContainer>
      <Introduction>
        <img src="/imgs/프룻파비콘.png" alt="프롯 로고" />
        <h3>프루떼 [수확배송]</h3>
        <p>
          <span>
            친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어
          </span>
          <span>가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.</span>
        </p>
      </Introduction>
      <ChipMenu>
        {chipsMenus.map((chipMenu, idx) => (
          <span key={idx}>{chipMenu}</span>
        ))}
      </ChipMenu>
      <ProductCardContainer>
        {productItems.map(({ id, img, isSale, name, price, salePrice, chip }) => (
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
      <Pagination></Pagination>
    </ListContainer>
  );
}

export default List;
