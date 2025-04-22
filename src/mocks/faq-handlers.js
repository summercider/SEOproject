//양진서-brnad페이지 핸들러

import { http, HttpResponse } from 'msw';
import voc from './faq.json';

export const faqhandlers = [
  // brand get
  http.get('/voc', async () => {
    await sleep(200);
    return HttpResponse.json(voc);
  }),
];
// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
