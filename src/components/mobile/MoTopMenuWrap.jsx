import LoginPop from '@/components/LoginPop';
import { useState } from 'react';
import { Link } from 'react-router';

export default function MoTopMenuWrap({ isScrolled }) {
  const [show, setShow] = useState(false);

  function handleLoginPop(e) {
    e.preventDefault;
    setShow(true);
  }

  return (
    <div className="hidden max-sm:block w-full">
      <div className="flex justify-between items-center h-[55px]">
        <div className="">
          <Link
            className="flex items-center"
            onClick={(e) => handleLoginPop(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <g id="ic_eatzmile_w" transform="translate(-49 -211.988)">
                <rect
                  id="사각형_5794"
                  data-name="사각형 5794"
                  width="22"
                  height="22"
                  transform="translate(49 211.988)"
                  fill="none"
                />
                <path
                  id="빼기_27"
                  data-name="빼기 27"
                  d="M20323.193,14358.989h-6.389a4.01,4.01,0,0,1-3.459-1.994l-3.184-5.5a4.007,4.007,0,0,1,0-4.01l3.184-5.5a4.009,4.009,0,0,1,3.459-2h6.389a4.026,4.026,0,0,1,3.465,2l3.184,5.5a4.026,4.026,0,0,1,0,4.01l-3.184,5.5A4.024,4.024,0,0,1,20323.193,14358.989Zm-.861-10.245v3.552a2.366,2.366,0,0,0,.051.551.462.462,0,0,0,.152.214.909.909,0,0,0,.275.123,1.838,1.838,0,0,0,.5.056,1.608,1.608,0,0,0,.51-.066c.275-.081.408-.361.408-.857v-5.883a3.3,3.3,0,0,0-.016-.372.837.837,0,0,0-.1-.286c-.1-.189-.377-.285-.832-.285s-.74.1-.857.285c-.465.583-1.35,1.73-2.428,3.148l-2.43-3.158-.066-.066a.661.661,0,0,0-.275-.143,1.542,1.542,0,0,0-.494-.066c-.449,0-.732.093-.838.275a.8.8,0,0,0-.1.28,3.118,3.118,0,0,0-.016.367v5.884a3.387,3.387,0,0,0,.016.382.761.761,0,0,0,.1.275c.107.19.383.286.816.286s.725-.1.832-.284a.774.774,0,0,0,.1-.271,3.147,3.147,0,0,0,.016-.368v-3.571c.035.041.268.354.689.929.371.513.678.924.842,1.128l.086.117a.93.93,0,0,0,.287.214.838.838,0,0,0,.438.112.888.888,0,0,0,.449-.122.994.994,0,0,0,.26-.188c.061-.074.125-.155.2-.25.09-.114.3-.4.652-.9s.607-.828.779-1.039Z"
                  transform="translate(-20260 -14126.5)"
                  fill={isScrolled === 'up' ? '#00A5B9' : '#fff'}
                />
              </g>
            </svg>
            <h3
              className={`ml-[6px] text-[15px] font-bold ${
                isScrolled === 'up' ? 'text-black' : 'text-white'
              }`}
            >
              EATZ마일
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
            >
              <g transform="translate(-54 -4.001)">
                <rect
                  width="10"
                  height="10"
                  transform="translate(54 4.001)"
                  fill={isScrolled === 'up' ? '#000' : '#fff'}
                  opacity="0"
                />
                <path
                  d="M10232.7-747.317l4,4-4,4"
                  transform="translate(-10174.203 752.317)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="1"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="flex gap-x-[25px]">
          <button type="button" className="" onClick={(e) => handleLoginPop(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="ic_nv_alarm_H24_w" transform="translate(-338 -58)">
                <rect
                  id="사각형_4295"
                  data-name="사각형 4295"
                  width="24"
                  height="24"
                  transform="translate(338 58)"
                  fill="none"
                />
                <g
                  id="사각형_4294"
                  data-name="사각형 4294"
                  transform="translate(341 61)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="2"
                >
                  <path
                    d="M9,0H9a9,9,0,0,1,9,9v9a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V9A9,9,0,0,1,9,0Z"
                    stroke="none"
                  />
                  <path
                    d="M9,1H9a8,8,0,0,1,8,8v8a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V9A8,8,0,0,1,9,1Z"
                    fill="none"
                  />
                </g>
                <line
                  id="선_1"
                  data-name="선 1"
                  x2="20"
                  transform="translate(340 78)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="2"
                />
                <path
                  id="패스_14340"
                  data-name="패스 14340"
                  d="M6,4.5a3,3,0,1,1-6,0"
                  transform="translate(347 73.5)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="2"
                />
                <line
                  id="선_3"
                  data-name="선 3"
                  y1="3"
                  transform="translate(350 59)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
          <button type="button" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="ic_nv_coupon_H24_w" transform="translate(-338 -58)">
                <rect
                  id="사각형_4295"
                  data-name="사각형 4295"
                  width="24"
                  height="24"
                  transform="translate(338 58)"
                  fill="none"
                  opacity="0.5"
                />
                <g
                  id="빼기_57"
                  data-name="빼기 57"
                  transform="translate(-20135 -14299)"
                  fill="none"
                >
                  <path
                    d="M20495,14380h-20a2,2,0,0,1-2-2v-6a2,2,0,1,0,0-4v-6a2,2,0,0,1,2-2h20a2,2,0,0,1,2,2v6a2,2,0,1,0,0,4v6A2,2,0,0,1,20495,14380Z"
                    stroke="none"
                  />
                  <path
                    d="M 20494.998046875 14378 L 20494.998046875 14378 C 20494.998046875 14377.9990234375 20495 14377.9990234375 20495 14377.9990234375 C 20495 14377.9990234375 20495 14377.9990234375 20495 14377.9990234375 L 20495 14373.4638671875 C 20493.8046875 14372.7705078125 20492.998046875 14371.4775390625 20492.998046875 14369.9990234375 C 20492.998046875 14368.521484375 20493.8046875 14367.2275390625 20495 14366.53515625 L 20495.001953125 14362.001953125 C 20495 14362.0009765625 20494.998046875 14361.998046875 20494.998046875 14361.998046875 L 20475.00390625 14361.9970703125 C 20475.001953125 14361.998046875 20475 14361.9990234375 20475 14361.9990234375 C 20475 14361.9990234375 20475 14361.9990234375 20475 14361.9990234375 L 20475 14366.5341796875 C 20476.1953125 14367.2275390625 20477.001953125 14368.5205078125 20477.001953125 14369.9990234375 C 20477.001953125 14371.4765625 20476.1953125 14372.7705078125 20475 14373.462890625 L 20474.998046875 14377.99609375 C 20475 14377.9970703125 20475.001953125 14378 20475.001953125 14378 L 20494.998046875 14378 M 20494.998046875 14380 L 20475.001953125 14380 C 20473.8984375 14380 20473 14379.1025390625 20473 14377.9990234375 L 20473 14372 C 20474.10546875 14371.9990234375 20475.001953125 14371.1015625 20475.001953125 14369.9990234375 C 20475.001953125 14368.8955078125 20474.103515625 14367.998046875 20473 14367.998046875 L 20473 14361.9990234375 C 20473 14360.8955078125 20473.8984375 14359.998046875 20475.001953125 14359.998046875 L 20494.998046875 14359.998046875 C 20496.1015625 14359.998046875 20497 14360.8955078125 20497 14361.9990234375 L 20497 14367.998046875 C 20495.89453125 14367.9990234375 20494.998046875 14368.896484375 20494.998046875 14369.9990234375 C 20494.998046875 14371.1025390625 20495.896484375 14372 20497 14372 L 20497 14377.9990234375 C 20497 14379.1025390625 20496.1015625 14380 20494.998046875 14380 Z"
                    stroke="none"
                    fill={isScrolled === 'up' ? '#000' : '#fff'}
                  />
                </g>
                <rect
                  id="사각형_5875"
                  data-name="사각형 5875"
                  width="2"
                  height="4"
                  transform="translate(346 62)"
                  fill={isScrolled === 'up' ? '#000' : '#fff'}
                />
                <rect
                  id="사각형_5876"
                  data-name="사각형 5876"
                  width="2"
                  height="4"
                  transform="translate(346 69)"
                  fill={isScrolled === 'up' ? '#000' : '#fff'}
                />
                <rect
                  id="사각형_5877"
                  data-name="사각형 5877"
                  width="2"
                  height="4"
                  transform="translate(346 76)"
                  fill={isScrolled === 'up' ? '#000' : '#fff'}
                />
              </g>
            </svg>
          </button>
          <button type="button" className="" onClick={(e) => handleLoginPop(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="ic_nv_cart_H24_w" transform="translate(-337 -57)">
                <rect
                  id="사각형_4295"
                  data-name="사각형 4295"
                  width="24"
                  height="24"
                  transform="translate(337 57)"
                  fill="none"
                />
                <g
                  id="사각형_4294"
                  data-name="사각형 4294"
                  transform="translate(339 63)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="2"
                >
                  <path
                    d="M0,0H20a0,0,0,0,1,0,0V12a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V0A0,0,0,0,1,0,0Z"
                    stroke="none"
                  />
                  <path
                    d="M1,1H19a0,0,0,0,1,0,0V12a5,5,0,0,1-5,5H6a5,5,0,0,1-5-5V1A0,0,0,0,1,1,1Z"
                    fill="none"
                  />
                </g>
                <path
                  id="패스_14336"
                  data-name="패스 14336"
                  d="M8,14.5V8.565A4.033,4.033,0,0,0,4,4.5,4.033,4.033,0,0,0,0,8.565V14.5"
                  transform="translate(345 54.5)"
                  fill="none"
                  stroke={isScrolled === 'up' ? '#000' : '#fff'}
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
          {show ? <LoginPop show={show} setShow={setShow} /> : null}
        </div>
      </div>
    </div>
  );
}
