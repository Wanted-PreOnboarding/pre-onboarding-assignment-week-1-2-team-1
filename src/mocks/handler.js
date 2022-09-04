import { fruits } from './db';
import { rest } from 'msw';

export const handlers = [
  //상품 조회
  rest.get('/getfruits', async (req, res, ctx) => {
    const perPage = 10;

    const page = req.url.searchParams.get('page');
    const chip = req.url.searchParams.get('chip');

    const fruitsCopy = fruits.slice(0);
    const filteredFruits = fruitsCopy.filter(fruit => {
      if (chip === 'ALL') return true;

      if (fruit.chip.includes(chip)) {
        return true;
      } else {
        return false;
      }
    });

    const result = [];

    for (let i = 0; i < filteredFruits.length; i += perPage) {
      result.push(filteredFruits.slice(i, i + perPage));
    }

    const returnPageData = result[Number(page) - 1];
    const meta = { pagination: Math.ceil(filteredFruits.length / perPage) };
    return res(
      ctx.status(200),
      ctx.json({
        meta,
        returnPageData,
      })
    );
  }),

  // 모든 상품 조회
  rest.get('/getallfruits', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        fruits,
      })
    );
  }),

  //상품 추가
  rest.post('/fruit', (req, res, ctx) => {
    const body = req.body;

    fruits.push({
      ...body,
      id: fruits.length - 1,
    });
    return res(ctx.status(201));
  }),

  //상품 수정
  rest.put('/fruit', (req, res, ctx) => {
    const body = req.body;
    const id = req.url.searchParams.get('id');
    fruits.splice(
      fruits.findIndex(item => item.id === Number(id)),
      1,
      body
    );
    return res(ctx.status(201));
  }),

  //상품 삭제
  rest.delete('/fruit', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    fruits.splice(
      fruits.findIndex(item => item.id === Number(id)),
      1
    );

    return res(ctx.status(200));
  }),

  //상품 상세 조회
  rest.get('/fruit', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    const data = fruits.find(item => item.id === Number(id));

    return res(
      ctx.status(200),
      ctx.json({
        data,
      })
    );
  }),
];
