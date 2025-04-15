//양진서-brnad페이지 핸들러

import { http, HttpResponse } from 'msw';
import brand from './brand.json';

export const brandhandlers = [
  // brand get
  http.get('/brand', async () => {
    await sleep(200);
    return HttpResponse.json(brand);
  }),

  // 프론트에서 지정한 url 파라메터와 다른 이름어이도 관계없음
  http.get('/brand/:brand/:id', async ({ params }) => {
    //:brand와 :id는 url 파라미터 : 프론트에서 brand/ria/1001 을 포함한 url을 던지면 params가만들어지고 할당되어짐 그 id를 밑에서 사용함
    await sleep(200);
    // url파라메터 구조분해
    const { id } = params;
    // 배열 데이터를 json으로 응답
    // console.log(id);
    // console.log(brand.filter((item) => item.id === parseInt(id)));

    return HttpResponse.json(
      // id 파라메터가 문자이므로 숫자로 변환후 배열요소중 id와 동일한 요소 찾기
      brand.filter((item) => item.id === parseInt(id))
    );
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
