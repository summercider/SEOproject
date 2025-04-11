import { http, HttpResponse } from 'msw';
import popular from './popular.json';

export const popularhandlers = [
  http.get('/popular', async () => {
    await sleep(200);
    return HttpResponse.json(popular);
  }),
  // http.get('/popular/:url', async ({ params }) => {
  //   await sleep(200);
  //   const { url } = params;

  //   const urlData = popular.filter((item) => item.url === url);
  //   return HttpResponse.json(urlData);
  // }),
];
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
