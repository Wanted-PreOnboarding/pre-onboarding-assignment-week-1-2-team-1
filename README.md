# 🌳 프루떼-오늘도프룻해!

## 목차

- [1. 프로젝트 Config](#1-프로젝트-config)
  - 데모페이지
  - 코딩컨벤션
  - 프루떼 ui/ux 피그마
  - 팀원 소개
- [2. 설치, 환경설정, 실행방법](#2-설치-환경설정-실행방법)
  - 설치, 환경 설정
  - 실행
- [3. 구현된 기능 목록](#3-구현된-기능-목록)
  - 사용자 기능
  - 관리자 기능
- [4. 사용한 프레임워크및 라이브러리](#4-사용한-프레임워크및-라이브러리)
- [5. 폴더 구조](#5-폴더-구조)
  - 폴더 구조 설명
  - 폴더 구조 tree

## 1. 프로젝트 Config

- #### [데모페이지입니다!](https://wanted-pre-onboarding-fe-6-1-2-i6kdpthgh-preonboardfe1.vercel.app/)

- #### [저희팀 코딩 컨벤션 노션주소입니다!](https://instinctive-moustache-aba.notion.site/WPO-FE-6-1-Coding-Convention-6a0123a0196343ea88c8434a3c157812#d00f53fad5c545a4b1e2aba7f6c62f31)

- #### [프루떼 ui/ux 피그마 주소입니다!](https://www.figma.com/file/VubIREYwLrHzUUqH4kiggS/preOnBoarding-team1?node-id=0%3A1)

| 강민규     | 백승전        | 류웅선     | 윤여건    | 김정수   | 최홍규     |
| ---------- | ------------- | ---------- | --------- | -------- | ---------- |
| kagrin97   | BaikSeungJeon | unsnruu    | kunnyCode | sunpl13  | gomgun-lab |
| 상세페이지 |    상품등록      | 상품리스트 | 주문내역,피그마  | 상품주문 | 상품관리   |

## 2. 설치, 환경설정, 실행방법

- ### 설치, 환경 설정

  ```bash
  > git clone https://github.com/wanted-fe-6/wanted-pre-onboarding-fe-6-1-2.git

  > npm install
  ```

- ### 실행

  ```bash
  > npm run start // 프로젝트가 실행됩니다.
  ```

## 3. 구현된 기능 목록

- ### 사용자 기능

  ***

  - [x] 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)

  - [x] 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)
    - 상품 상세 페이지는 단순 퍼블리싱 영역이므로 제외
  - [x] 스토어 상품 주문(상품 선택, 수량, 배송주소, 연락처 등)
    - 결제 기능은 미포함
  - [x] 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)

- ### 관리자 기능

  ***

  - [x] 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)

  - [x] 스토어 상품목록 관리 페이지
    - 상품 삭제 기능
    - 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)

## 4. 사용한 프레임워크및 라이브러리

- ## axios

  - 호환성

    - 기존의 fetch의 경우 웹 브라우저가 구버전일경우 지원하지 않는 경우가 많습니다.
      axios의 경우 훨씬더 지원 범위가 넓기 때문에 사용합니다.

  - 가독성

    - fetch는 url을 입력할때, Param이나 Query부분을 문자열 형태로 길게 작성해야하는 반면, axios는 객체의 형태로 Param, Query를 설정할 수 있습니다.

  - 편의성

    - 보통 fetch를 이용하는 경우 데이터를 전달받을 때마다 JSON 형태로 변환해주는 작업이 필요합니다. 하지만 axios는 자동으로 JSON으로 변환해 주기 때문에 더 편하게 사용할 수 있습니다.

  - 보안
    - axios를 사용할 경우 Client Side에서 발생할 수 있는 XSRF 공격을 막아줍니다.

- ## msw

  - API서버를 제공되지 않아서 API를 흉내낼수 있는 msw(Mock Service Worker)를
    사용해서 db.js에서 데이터를 받고 handle.js에서 CRUD를 받는 형식으로 사용했습니다.

- ## @emotion

  - emotion은 keyframe을 제공합니다. 따라서 모바일 화면에 대응하기 용이할 것 같다는 이유로 선정하였습니다. 하지만 아직 적용을 아직 하지 못했습니다. 😥

## 5. 폴더 구조

- ### 폴더 구조 설명

  | 폴더           | 용도                                    |
  | -------------- | --------------------------------------- |
  | **assets/svg** | 필요한 리소스들을 모은 폴더             |
  | **components** | 각 페이지에서 각 섹션을 컴포넌트로 분리 |
  | **hooks**      | 재사용할수있는 api를 훅으로 만든 폴더   |
  | **mocks**      | api데이터와 api handler                 |
  | **pages**      | 각각 하나의 페이지를 이룬파일 폴더      |
  | **styles**     | 자주쓰이는 스타일과 글로벌 리셋파일     |
  | **utils**      | 재사용할수있는 모듈을 만든 폴더         |
<details>
<summary>🎄 폴더 tree 접기/펼치기</summary>
<pre>
├── App.js
├── assets
│   └── svg
│       ├── icon-arrow-left.svg
│       ├── icon-arrow-right.svg
│       ├── icon-check.svg
│       ├── icon-trashcan.svg
│       └── icon-x.svg
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── TestMocking.jsx
│   ├── admin
│   │   ├── Pagination.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   └── TopBar.jsx
│   ├── common
│   │   └── Button.jsx
│   ├── detail
│   │   ├── DetailInfo.jsx
│   │   └── DetailMain.jsx
│   ├── list
│   │   ├── Chip.jsx
│   │   └── ProductCard.jsx
│   ├── order
│   │   ├── OrderInfo.jsx
│   │   ├── OrderInput.jsx
│   │   └── PaymentSummary.jsx
│   └── orderDetails
│       ├── FinalPaymentSummary.jsx
│       └── OrderDetailsInfo.jsx
├── hooks
│   ├── usePageList.js
│   ├── useProductItem.js
│   └── useProductList.js
├── index.css
├── index.js
├── mocks
│   ├── browser.js
│   ├── db.js
│   └── handler.js
├── pages
│   ├── Admin
│   │   └── Admin.jsx
│   └── Product
│       ├── Detail.jsx
│       ├── List.jsx
│       ├── Order.jsx
│       └── OrderDetails.jsx
├── setupTests.js
├── styles
│   ├── common.js
│   └── reset.jsx
└── utils
    ├── OrderNums.js
    ├── background.js
    └── priceSetting.js
</pre>
</details>
