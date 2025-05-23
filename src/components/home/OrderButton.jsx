import word from '@/assets/images/icon/comm_ico_text_order.svg';
import OrderPop from '@/components/home/OrderPop';
import { useState } from 'react';

// gnb라인 상단 컬러버튼
export default function OrderButton() {
  const [show, setShow] = useState(false);

  function handleOrderBtn() {
    setShow(true);
  }

  return (
    <>
      <button
        className="flex border border-[#00A5B9] bg-[#00A5B9]
    rounded-[22px] px-[18px] h-[44px] items-center justify-center
    ml-[30px] text-white text-[14px] gap-x-[6px] 
    shadow-[0_5px_10px_rgba(0,165,185,0.3) -z-100]"
        onClick={handleOrderBtn}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 160 160"
          >
            <g
              id="No_image_Y_H160"
              data-name="No image_Y_H160"
              transform="translate(-593.53 -567.802)"
            >
              <path
                id="패스_15847"
                data-name="패스 15847"
                d="M805.889,698.593a101.116,101.116,0,0,1,1.633-19.663,73.227,73.227,0,0,0,.728-20.009c-4.1-40.422-40.4-70.083-80.657-65.922-40.13,4.147-69.672,40.51-65.569,80.705,4.126,40.429,40.654,70.659,80.624,66.724A71.085,71.085,0,0,0,777.989,726.7l.017,0a28.5,28.5,0,0,0,9.746,12.02c5.578,3.983,11.812,5.348,18.333,3.151,10.949-3.689,14.6-16.31,7.436-25.633-4.035-5.252-7.476-10.887-7.629-17.577Z"
                transform="translate(-65.775 -19.111)"
                fill="#fdcd00"
              />
              <g
                id="그룹_3872"
                data-name="그룹 3872"
                transform="translate(648.517 601.523)"
              >
                <ellipse
                  id="타원_740"
                  data-name="타원 740"
                  cx="11.173"
                  cy="24.299"
                  rx="11.173"
                  ry="24.299"
                  transform="translate(0 0)"
                  fill="#fff"
                />
                <ellipse
                  id="타원_741"
                  data-name="타원 741"
                  cx="11.173"
                  cy="24.299"
                  rx="11.173"
                  ry="24.299"
                  transform="translate(22.464 0)"
                  fill="#fff"
                />
                <path
                  id="패스_15132"
                  data-name="패스 15132"
                  d="M707.219,630.138c0,6.709-2.5,12.149-5.587,12.149s-5.585-5.44-5.585-12.149,2.5-12.15,5.585-12.15S707.219,623.427,707.219,630.138Z"
                  transform="translate(-696.046 -607.175)"
                  fill="#33b7c7"
                />
                <path
                  id="패스_15133"
                  data-name="패스 15133"
                  d="M721.9,630.138c0,6.709-2.5,12.149-5.587,12.149s-5.587-5.44-5.587-12.149,2.5-12.15,5.587-12.15S721.9,623.427,721.9,630.138Z"
                  transform="translate(-688.262 -607.175)"
                  fill="#33b7c7"
                />
              </g>
              <rect
                id="사각형_5805"
                data-name="사각형 5805"
                width="160"
                height="160"
                transform="translate(593.53 567.802)"
                fill="none"
              />
            </g>
          </svg>
        </span>
        <strong className="w-[47px] h-[15px]">
          <img src={word} alt="주문하기" />
        </strong>
      </button>

      {show ? <OrderPop show={show} setShow={setShow} /> : null}
    </>
  );
}
