import axios from 'axios';
import React from 'react';

function TestMocking() {
  const userData = {
    img: 'dd',
    name: '무fasdfasefas5kg',
    price: 120000,
    salePrice: 52000,
    isSale: true,
    chip: 'best',
  };
  const handleClick = async () => {
    fetch(`/getfruits?page=1`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => console.log(res));
    // const data = await axios.post(url, JSON.stringify(userData));
  };

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
    </div>
  );
}

export default TestMocking;
