// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers.js';
import { brandhandlers } from '@/mocks/brand-handlers.js';
import { producthandlers } from '@/mocks/coupon-product-handlers.js';
import { popularhandlers } from '@/mocks/popular-handlers.js';
import { faqhandlers } from '@/mocks/faq-handlers.js';
import { noticehandlers } from '@/mocks/notice-handlers.js';

// 배열의 요청 핸들러 함수들을 전개연산자로 전달하여 실행
export const worker = setupWorker(
  ...handlers, // ex
  ...brandhandlers,
  ...producthandlers,
  ...popularhandlers,
  ...faqhandlers,
  ...noticehandlers
);
// 양진서brandhandlers, faqhandlers ,noticehandlers
//  brand,faq,notice페이지 핸들러
