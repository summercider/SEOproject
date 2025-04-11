import { http, HttpResponse } from 'msw';
import product from './coupon-products.json';

export const producthandlers = [
  http.get('/product', async () => {
    await sleep(200);
    return HttpResponse.json(product);
  }),
];
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
