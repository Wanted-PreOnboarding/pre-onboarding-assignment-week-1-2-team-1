import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { Color, Roboto } from '../styles/common';
function Header() {
  return (
    <HeaderComponent>
      <img src={`${process.env.PUBLIC_URL}/imgs/프룻로고.jpg`} alt="메인로고" />
      <nav>
        <Link to="/fruits">상품리스트</Link>
        <Link to="/admin?page=1">관리자 페이지</Link>
      </nav>
    </HeaderComponent>
  );
}

export default Header;

const HeaderComponent = styled.header`
  height: 81px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 22px;
  border-bottom: ${Color.GR300};
  box-shadow: 0px 2px 2px rgba(74, 149, 54, 0.1);
  z-index: 1;

  & nav {
    display: flex;
    align-items: center;
  }

  & img {
    height: 50px;
  }

  & a {
    text-decoration: none;
    ${Roboto(1.6, 500, '#000')};

    &:last-child {
      margin-left: 34px;
    }
  }
`;
