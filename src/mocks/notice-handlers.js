//양진서-brnad페이지 핸들러

import { http, HttpResponse } from 'msw';
import notice from './notice.json';

export const noticehandlers = [
  // notice get
  http.get('/notice', async () => {
    await sleep(200);
    return HttpResponse.json(notice);
  }),
];
// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
