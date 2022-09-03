import React from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../styles/common';

function Footer() {
  return (
    <Container>
      <img src={`${process.env.PUBLIC_URL}/imgs/프룻파비콘.png`} alt="푸터로고" />

      <p>About Fruitte</p>
      <div className="content">
        <Explanation>
          <span>프루떼는</span>
          <ul>
            <li>(프루떼는 프로젝트프룻의 새 이름입니다)</li>
            <li>
              프루떼는 안전한 먹거리의 신념을 지키는 좋은 농장을 발굴하고 소개하는 팜큐레이터입니다.
            </li>
            <li>
              건강한 자연을 가까이에서 만날 수 있는 팜큐레이션 서비스를 통하여 농장을 알고 누리고
              맛보는 기쁨을 전합니다.
            </li>
            <li>
              프루떼를 경험하는 사람들의 일상에 풍요로움을 더하는 것이 우리가 지향하는 가치입니다.
            </li>
          </ul>
        </Explanation>
        <SideContainer>
          <InquireContiner>
            <span>문의 안내</span>
            <p className="description">
              카카오톡채널: 프루떼
              <br /> (주중 9시~18시 채팅 상담 가능)
            </p>
          </InquireContiner>
          <InquireContiner>
            <span>무통장 입금 계좌 안내</span>
            <p className="description">
              국민은행 527837-01-004676 <br />
              주식회사 로컬앤라이프
            </p>
          </InquireContiner>
        </SideContainer>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  position: relative;
  background-color: ${Color.GR100};
  padding: 25px 44px 17px 86px;

  & p {
    display: flex;
    align-items: center;
    ${Roboto(1.4, 600, Color.GR300)};
    margin: 0;
  }

  & img {
    position: absolute;
    top: 30px;
    left: 26px;
    width: 29px;
  }

  & .content {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
  }
`;

const Explanation = styled.div`
  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    & li {
      ${Roboto(1, 500, Color.GR250)};
      line-height: 12px;
    }
  }
  & span {
    ${Roboto(1.2, 600, Color.GR250)};
  }
`;

const InquireContiner = styled.div`
  margin-right: 37px;
  & span {
    ${Roboto(1, 600, Color.GR250)};
  }

  & .description {
    ${Roboto(1, 500, Color.GR250)};
    line-height: 12px;
  }
`;

const SideContainer = styled.div`
  display: flex;
`;
