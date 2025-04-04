import { http, HttpResponse } from 'msw';
//msw 더미데이터를 people로받음
import people from './dummy.json';

// post요청으로 데이터 추가시 db AUTO_INCREMENT 구현위해 현재배열중 최대값 찾기
let maxId = Math.max(...people.map((item) => item.id));
// console.log(maxId, '최대값');

export const handlers = [
  http.get('/people', async () => {
    await sleep(200); //지연시간주기 -실제서버처럼

    return HttpResponse.json(people);
  }),

  http.get('/people/:id', async ({ params }) => {
    await sleep(200);
    const { id } = params;

    return HttpResponse.json(
      people.filter((person) => person.id === parseInt(id))
    );
  }),

  http.post('/people', async ({ request }) => {
    await sleep(200);

    //요청객체중 요청body로 넘어온 내용을 js 객체로 반환
    const item = await request.json();
    maxId++;
    people.push({ ...item, id: maxId });

    return HttpResponse.json(people);
  }),

  //delete
  http.delete('/people/:id', ({ params }) => {
    const { id } = params;
    const parsedId = parseInt(id);

    const index = people.findIndex((person) => person.id === parsedId);

    if (index !== -1) {
      people.splice(index, 1);
    }

    return HttpResponse.json(people);
  }),

  // put
  http.put('/people/:id', async ({ params, request }) => {
    const { id } = params;
    const parsedId = parseInt(id);
    const item = await request.json();
    const index = people.findIndex((person) => person.id === parsedId);

    if (index !== -1) {
      // people.splice(index, 1, item);
      people[index] = item;
    }

    return HttpResponse.json(people);
  }),

  // patch
  http.patch('/people/:id', async ({ params, request }) => {
    const { id } = params;
    const parsedId = parseInt(id);
    const item = await request.json();
    const index = people.findIndex((person) => person.id === parsedId);

    if (index !== -1) {
      // people.splice(index, 1, item);
      people[index].lang = item.lang;
    }

    return HttpResponse.json(people);
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
