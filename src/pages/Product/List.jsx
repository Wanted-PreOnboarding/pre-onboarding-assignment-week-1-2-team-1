import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function List() {
  const [productItems, setproductItems] = useState([]);

  console.log(productItems);
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
          {
            //상품 나열 -> ProducCard를 통해서
          }
        </div>
      </main>
    </div>
  );
}

export default List;
