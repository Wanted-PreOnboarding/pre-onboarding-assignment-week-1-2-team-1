import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { ReactComponent as ArrowLeft } from '../../assets/svg/icon-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/icon-arrow-right.svg';

import usePageList from '../../hooks/usePageList';

function Pagination() {
  const { pageList, curPage } = usePageList();

  return (
    <Container>
      <LinkLeftWrapper curPage={curPage} pageList={pageList}>
        <Link to={`/admin?page=${+curPage - 1}`}>
          <ArrowLeft />
        </Link>
      </LinkLeftWrapper>
      {pageList.map(page => (
        <NavLink to={`/admin?page=${page}`} key={page}>
          {page}
        </NavLink>
      ))}
      <LinkRightWrapper curPage={curPage} pageList={pageList}>
        <Link to={`/admin?page=${+curPage + 1}`}>
          <ArrowRight />
        </Link>
      </LinkRightWrapper>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px 0 45px 0;

  & a {
    text-decoration: none;
    margin: 0.5rem 1rem;
    border: none;
    text-decoration: none;
    background: none;

    .selected {
      color: blue;
      background-color: black;
    }
  }
`;

const LinkLeftWrapper = styled.div`
  & a {
    pointer-events: ${props => (props.curPage <= 1 ? 'none' : '')};
  }
`;

const LinkRightWrapper = styled.div`
  & a {
    pointer-events: ${props => (props.curPage >= props.pageList.length ? 'none' : '')};
  }
`;
