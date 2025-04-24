import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from '@/components/home/AddressSearch';

function ActiveBtn({ icon, txt, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border border-[#DDE0E3] rounded-[4px] w-1/2 h-[74px] flex flex-col gap-[7px] justify-center items-center text-[14px] ${
        isActive
          ? 'bg-[#00A5B9] text-white border-0'
          : 'bg-[transparent] text-black border border-[#DDE0E3]'
      }`}
    >
      <span>{icon}</span>
      <p>{txt}</p>
    </button>
  );
}

export default function OrderPop({ show, setShow }) {
  const popRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(0);
  const [activeBtn2, setActiveBtn2] = useState(0);
  const [isShowAddr, setIsShowAddr] = useState(false);

  function closeClick() {
    setShow(false);
  }

  function outsideClick(e) {
    if (!popRef.current.contains(e.target)) {
      setShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', outsideClick);

    return function cleanup() {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);

  function handleSettingAddress() {
    setIsShowAddr(true);
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-100
          ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible'}
        `}
    >
      <div
        ref={popRef}
        className={`w-[400px] bg-[#fff] rounded-[10px] pt-[20px] pb-[30px] px-[20px] z-101
          max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:transition-all
        ${show ? 'max-sm:translate-y-0' : 'max-sm:translate-y-[100%]'}  `}
      >
        <div className="relative mb-[20px]">
          <h2 className="text-[22px] text-gray-600">
            <p className="mb-[5px]">
              <strong className="font-bold text-[#00A5B9]">주문유형</strong>을
            </p>
            선택해 주세요!
          </h2>
          <button
            type="btn"
            onClick={closeClick}
            className="w-[44px] h-[44px] absolute -top-[10px] -right-[20px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="btn_닫기" transform="translate(-50 -748)">
                <rect
                  id="Rectangle_4524"
                  data-name="Rectangle 4524"
                  width="24"
                  height="24"
                  transform="translate(50 748)"
                  fill="none"
                />
                <line
                  id="Line_50"
                  data-name="Line 50"
                  x1="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
                <line
                  id="Line_51"
                  data-name="Line 51"
                  x2="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
              </g>
              <script xmlns="" />
            </svg>
          </button>
        </div>
        {/* 배달, 매장픽업 */}
        <div className="flex gap-[6px]">
          <ActiveBtn
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="ic_delivery_h24" transform="translate(-3.402 -3)">
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    transform="translate(3.402 3)"
                    fill="none"
                  />
                  <g id="ic_배달" transform="translate(8.548 4.925)">
                    <path
                      id="Path_14669"
                      data-name="Path 14669"
                      d="M6.239,8.62A6.217,6.217,0,0,0,.75,14.65V19.2a2.6,2.6,0,0,0,2.675,2.53H6.239"
                      transform="translate(-0.75 -4.074)"
                      fill="none"
                      stroke={activeBtn === 0 ? '#fff' : '#000'}
                    />
                    <path
                      id="Path_14670"
                      data-name="Path 14670"
                      d="M16.53,8.62a6.217,6.217,0,0,1,5.489,6.03V19.2a2.6,2.6,0,0,1-2.675,2.53H17.285"
                      transform="translate(-7.609 -4.074)"
                      fill="none"
                      stroke={activeBtn === 0 ? '#fff' : '#000'}
                    />
                    <path
                      id="Path_14671"
                      data-name="Path 14671"
                      d="M12.4,29.944v.477a2.136,2.136,0,0,1-2.061,2.2,2.133,2.133,0,0,1-2.056-2.2V26.593a2.133,2.133,0,0,1,2.056-2.2,2.136,2.136,0,0,1,2.061,2.2v3.35"
                      transform="translate(-2.898 -12.314)"
                      fill="none"
                      stroke={activeBtn === 0 ? '#fff' : '#000'}
                    />
                    <path
                      id="Path_14622"
                      data-name="Path 14622"
                      d="M9.914,3.293h2.417"
                      transform="translate(0.656 -0.331)"
                      fill="none"
                      stroke={activeBtn === 0 ? '#fff' : '#000'}
                    />
                    <path
                      id="Path_14668"
                      data-name="Path 14668"
                      d="M9.914,3.293h2.417"
                      transform="translate(-8.49 -0.331)"
                      fill="none"
                      stroke={activeBtn === 0 ? '#fff' : '#000'}
                    />
                    <path
                      id="Path_14672"
                      data-name="Path 14672"
                      d="M8.676,4.922A2.677,2.677,0,0,1,8.27,3.495a2.745,2.745,0,0,1,5.489,0,2.677,2.677,0,0,1-.406,1.427,2.38,2.38,0,0,1-.29.395,1.043,1.043,0,0,1-.11.116,2.734,2.734,0,0,1-3.987-.116,2.38,2.38,0,0,1-.29-.395"
                      transform="translate(-3.81 -0.75)"
                      fill="none"
                      stroke={activeBtn === 0 ? '#fff' : '#000'}
                    />
                  </g>
                </g>
                <script xmlns="" />
              </svg>
            }
            txt="배달"
            isActive={activeBtn === 0}
            onClick={() => setActiveBtn(0)}
          ></ActiveBtn>
          <ActiveBtn
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="ic_pickup_h24" transform="translate(-3.106 -3.192)">
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    transform="translate(3.106 3.192)"
                    fill="none"
                  />
                  <g
                    id="Group_140"
                    data-name="Group 140"
                    transform="translate(6.489 5.803)"
                  >
                    <g
                      id="Union_37"
                      data-name="Union 37"
                      transform="translate(2.616 0.389)"
                      fill="none"
                    >
                      <path
                        d="M2.783,18V6.517L0,0H12.218L15,6.517V16a2,2,0,0,1-2,2Z"
                        stroke="none"
                      />
                      <path
                        d="M 12.99960041046143 16.5 C 13.27519035339355 16.5 13.49940013885498 16.275390625 13.49940013885498 15.99930000305176 L 13.49940013885498 6.823656558990479 L 11.22686576843262 1.5 L 2.27154541015625 1.5 L 4.162290096282959 5.927840232849121 C 4.241809844970703 6.114049911499023 4.282800197601318 6.314430236816406 4.282800197601318 6.516900062561035 L 4.282800197601318 16.5 L 12.99960041046143 16.5 M 12.99960041046143 18 L 2.782799959182739 18 L 2.782799959182739 6.516900062561035 L 6.942748598248727e-08 0 L 12.21749973297119 0 L 14.99940013885498 6.516900062561035 L 14.99940013885498 15.99930000305176 C 14.99940013885498 17.10449981689453 14.10389995574951 18 12.99960041046143 18 Z"
                        stroke="none"
                        fill={activeBtn === 1 ? '#fff' : '#000'}
                      />
                    </g>
                    <path
                      id="Path_14723"
                      data-name="Path 14723"
                      d="M173.745,592.264h3"
                      transform="translate(-165 -587.966)"
                      fill="none"
                      stroke={activeBtn === 1 ? '#fff' : '#000'}
                    />
                  </g>
                  <path
                    id="Path_14724"
                    data-name="Path 14724"
                    d="M7,12H2.635A1.471,1.471,0,0,1,1,10.313V1.425l2.664-6.3"
                    transform="translate(6.106 11.442)"
                    fill="none"
                    stroke={activeBtn === 1 ? '#fff' : '#000'}
                  />
                </g>
                <script xmlns="" />
              </svg>
            }
            txt="매장픽업"
            isActive={activeBtn === 1}
            onClick={() => setActiveBtn(1)}
          ></ActiveBtn>
        </div>

        {/* 주소를 설정해 주세요! */}
        <div>
          <div className="flex justify-between mt-[20px]">
            <div className="inline-flex items-center gap-x-[5px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <rect
                    id="사각형_4613"
                    data-name="사각형 4613"
                    width="20"
                    height="20"
                    fill="none"
                  />
                  <path
                    id="빼기_13"
                    data-name="빼기 13"
                    d="M7.055,18h0l-4.7-5.217A7.466,7.466,0,0,1,0,7.314,7.17,7.17,0,0,1,7,0a7.171,7.171,0,0,1,7,7.314,7.4,7.4,0,0,1-2.215,5.337L7.056,18ZM7,6A1.454,1.454,0,0,0,5.6,7.5,1.454,1.454,0,0,0,7,9,1.454,1.454,0,0,0,8.4,7.5,1.454,1.454,0,0,0,7,6Z"
                    transform="translate(3 1)"
                    fill="#b8c1c9"
                  />
                </svg>
              </span>
              <strong className="text-[14px] text-black font-bold">
                주소를 설정해 주세요!
              </strong>
            </div>
            <button
              type="button"
              className="h-[24px] rounded-[20px] px-[10px] bg-white border border-[#D6DCE1] text-[12px] text-black leading-[16px]"
              onClick={handleSettingAddress}
            >
              주소설정
            </button>
            {isShowAddr ? (
              <AddressSearch
                isShowAddr={isShowAddr}
                setIsShowAddr={setIsShowAddr}
              />
            ) : null}
          </div>
        </div>

        {/* 가까운 매장 -- 버튼 */}
        <div className="flex justify-between items-center pt-[19px] mt-[20px] border-t-[1px] border-dashed border-[#DDE0E3] mb-[10px]">
          <div>
            <button
              type="button"
              onClick={() => setActiveBtn2(0)}
              className={`text-[13px] text-[#666] h-[32px] py-[6px] px-[14px] rounded-[4px] 
                ${
                  activeBtn2 === 0
                    ? 'text-white bg-[#00A5B9]'
                    : 'bg-[rgba(221,224,227,0.4)]'
                }
                `}
            >
              가까운 매장
            </button>
            <button
              type="button"
              onClick={() => setActiveBtn2(1)}
              className={`text-[13px] text-[#666] h-[32px] py-[6px] px-[14px] rounded-[4px] ml-[6px]
                ${
                  activeBtn2 === 1
                    ? 'text-white bg-[#00A5B9]'
                    : 'bg-[rgba(221,224,227,0.4)]'
                }
                `}
            >
              나의 매장
            </button>
          </div>
          <button className="inline-flex gap-x-[6px] text-[13px] text-black h-[32px] py-[6px] px-[14px]  border border-[#DDE0E3] bg-white rounded-[4px]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g transform="translate(-266 -183)">
                  <g transform="translate(266.045 184.984)">
                    <rect
                      width="16"
                      height="16"
                      transform="translate(-0.045 -1.984)"
                      fill="none"
                    />
                    <g
                      transform="translate(1.955 0.016)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    >
                      <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
                      <circle cx="5.5" cy="5.5" r="4.75" fill="none" />
                    </g>
                    <line
                      x2="3"
                      y2="3"
                      transform="translate(10.955 9.016)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <span>매장찾기</span>
          </button>
        </div>

        {/* 가까운 매장 나의 매장 연결 */}
        {activeBtn2 === 0 && (
          <div className="border border-dashed border-[#DDE0E3] p-[20px] h-[185px] bg-[rgba(239,241,243,0.4)]">
            <div className="leading-[18px] text-center text-[14px] text-[#999] flex items-center flex-col gap-[10px] mt-[20px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                >
                  <g
                    id="ic_mmy_noshop_h60"
                    transform="translate(-9753.885 -2047.984)"
                  >
                    <rect
                      id="사각형_4426"
                      data-name="사각형 4426"
                      width="59.778"
                      height="60"
                      transform="translate(9753.885 2047.984)"
                      fill="red"
                      opacity="0"
                    />
                    <path
                      id="합치기_163"
                      data-name="합치기 163"
                      d="M7.982,48.333a3,3,0,0,1-3-3V29h-.02C2.3,29-.675,27.427.136,24.4L6.571,4.6C7.268,2,8.732,0,11.4,0H40.355c2.666,0,4.152,2.083,4.827,4.6L51.617,24.4c.335,2.878-2.148,4.595-4.806,4.6V45.333a3,3,0,0,1-3,3Z"
                      transform="translate(9757.049 2053.031)"
                      fill="#e4e6e8"
                    />
                    <path
                      id="패스_15222"
                      data-name="패스 15222"
                      d="M13.4,0A13.391,13.391,0,0,1,26.8,13.382C26.8,24.6,13.4,32.5,13.4,32.5S0,24.6,0,13.382A13.391,13.391,0,0,1,13.4,0Z"
                      transform="translate(9787.087 2072.197)"
                      fill="#c2c7cc"
                    />
                    <line
                      id="선_110"
                      data-name="선 110"
                      x1="3.321"
                      y2="11.667"
                      transform="translate(9765.999 2062.197)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      id="선_111"
                      data-name="선 111"
                      x1="3.321"
                      y2="11.667"
                      transform="translate(9770.641 2062.197)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      id="선_112"
                      data-name="선 112"
                      x1="8"
                      y2="8"
                      transform="translate(9796.885 2081.983)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <line
                      id="선_113"
                      data-name="선 113"
                      x2="8"
                      y2="8"
                      transform="translate(9796.885 2081.983)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p>
                인근 매장 검색을 위해
                <br />
                주소를 설정해 주세요.
              </p>
            </div>
          </div>
        )}
        {activeBtn2 === 1 && (
          <div className="border border-dashed border-[#DDE0E3] p-[20px] h-[185px] bg-[rgba(239,241,243,0.4)]">
            <div className="leading-[18px] text-center text-[14px] text-[#999] flex items-center flex-col gap-[10px] mt-[20px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                >
                  <g
                    id="ic_mmy_noshop_h60"
                    transform="translate(-9753.885 -2047.984)"
                  >
                    <rect
                      id="사각형_4426"
                      data-name="사각형 4426"
                      width="59.778"
                      height="60"
                      transform="translate(9753.885 2047.984)"
                      fill="red"
                      opacity="0"
                    />
                    <path
                      id="합치기_163"
                      data-name="합치기 163"
                      d="M7.982,48.333a3,3,0,0,1-3-3V29h-.02C2.3,29-.675,27.427.136,24.4L6.571,4.6C7.268,2,8.732,0,11.4,0H40.355c2.666,0,4.152,2.083,4.827,4.6L51.617,24.4c.335,2.878-2.148,4.595-4.806,4.6V45.333a3,3,0,0,1-3,3Z"
                      transform="translate(9757.049 2053.031)"
                      fill="#e4e6e8"
                    />
                    <path
                      id="패스_15222"
                      data-name="패스 15222"
                      d="M13.4,0A13.391,13.391,0,0,1,26.8,13.382C26.8,24.6,13.4,32.5,13.4,32.5S0,24.6,0,13.382A13.391,13.391,0,0,1,13.4,0Z"
                      transform="translate(9787.087 2072.197)"
                      fill="#c2c7cc"
                    />
                    <line
                      id="선_110"
                      data-name="선 110"
                      x1="3.321"
                      y2="11.667"
                      transform="translate(9765.999 2062.197)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      id="선_111"
                      data-name="선 111"
                      x1="3.321"
                      y2="11.667"
                      transform="translate(9770.641 2062.197)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      id="선_112"
                      data-name="선 112"
                      x1="8"
                      y2="8"
                      transform="translate(9796.885 2081.983)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <line
                      id="선_113"
                      data-name="선 113"
                      x2="8"
                      y2="8"
                      transform="translate(9796.885 2081.983)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p>
                나의 매장을 등록하시면
                <br />
                빠르게 정보를 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
