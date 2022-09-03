import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';

function List() {
  const [productItems, setproductItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`getfruits?page=1`);
      const { returnPageData } = data;
      setproductItems(returnPageData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {
          //프루티 브랜드 소개 들어갈 것
        }
      </div>
      <main>
        <ul>
          {
            //메뉴 나열
          }
        </ul>
        <div>
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
        </div>
      </main>
    </div>
  );
}

export default List;
