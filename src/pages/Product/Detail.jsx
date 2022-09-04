import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import DetailInfo from '../../components/detail/DetailInfo';
import DetailMain from '../../components/detail/DetailMain';

import axios from 'axios';
import styled from '@emotion/styled';

function Detail() {
  const [fruit, setFruit] = useState(null);

  const { id } = useParams();
  const getFruitDetail = async () => {
    axios.get('/fruit', { params: { id } }).then(res => setFruit(res.data.data));
  };

  useEffect(() => {
    getFruitDetail();
  }, []);

  return (
    <Continer>
      {fruit && <DetailInfo fruit={fruit} id={id} />}
      <DetailMain />
    </Continer>
  );
}

export default Detail;

const Continer = styled.div`
  margin: 64px 100px 150px 100px;
  @media screen and (max-width: 1440px) {
    section {
      margin: auto;
    }
  }
`;
