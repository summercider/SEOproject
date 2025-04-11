import { useEffect, useRef } from 'react';

export default function BsidePop({ setShow, show }) {
  // 외부 클릭시 팝업닫기
  // show의 상태값을 false로 줄거임
  // 클릭위치는 화면 어디든 pop이 아닌 곳
  const popRef = useRef(null);

  useEffect(() => {
    const outsideClick = (e) => {
      // console.log(popRef.current);
      // if (popRef.current) {
      if (!popRef.current.contains(e.target)) {
        // console.log(e.target);
        setShow(false);
      }
      // }
    };
    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);

  const closeClick = () => {
    setShow(false);
  };

  // show :true일떄 opa 1 , visible
  // default - false일떄 opa 0 , invisible
  return (
    <div
      className={`fixed  left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]
          ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible'}
        `}
    >
      <div
        ref={popRef}
        className={`w-[400px]  bg-[#fff] rounded-[10px] pt-[20px] pb-[30px] px-[20px]
        max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:transition-all 
        ${show ? 'max-sm:translate-y-0' : 'max-sm:translate-y-[100%]'}  `} //100%내려놓음
      >
        {/* 위 div fadeup 어떻게주지 */}
        <div className="relative  mb-[20px]">
          <h1 className="text-[22px] text-gray-600">
            <span className="font-[600] text-point1">주문유형</span>을<br></br>
            선택해 주세요!
          </h1>
          <button
            type="btn"
            onClick={closeClick}
            className=" w-[44px] h-[44px] absolute -top-[10px] -right-[20px] "
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
        <div className="flex gap-[6px] ">
          <div className="border border-[#DDE0E3] rounded-[4px] w-1/2 h-[74px] flex flex-col gap-[7px] justify-center items-center">
            <i>
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
                      stroke="#000"
                    />
                    <path
                      id="Path_14670"
                      data-name="Path 14670"
                      d="M16.53,8.62a6.217,6.217,0,0,1,5.489,6.03V19.2a2.6,2.6,0,0,1-2.675,2.53H17.285"
                      transform="translate(-7.609 -4.074)"
                      fill="none"
                      stroke="#000"
                    />
                    <path
                      id="Path_14671"
                      data-name="Path 14671"
                      d="M12.4,29.944v.477a2.136,2.136,0,0,1-2.061,2.2,2.133,2.133,0,0,1-2.056-2.2V26.593a2.133,2.133,0,0,1,2.056-2.2,2.136,2.136,0,0,1,2.061,2.2v3.35"
                      transform="translate(-2.898 -12.314)"
                      fill="none"
                      stroke="#000"
                    />
                    <path
                      id="Path_14622"
                      data-name="Path 14622"
                      d="M9.914,3.293h2.417"
                      transform="translate(0.656 -0.331)"
                      fill="none"
                      stroke="#000"
                    />
                    <path
                      id="Path_14668"
                      data-name="Path 14668"
                      d="M9.914,3.293h2.417"
                      transform="translate(-8.49 -0.331)"
                      fill="none"
                      stroke="#000"
                    />
                    <path
                      id="Path_14672"
                      data-name="Path 14672"
                      d="M8.676,4.922A2.677,2.677,0,0,1,8.27,3.495a2.745,2.745,0,0,1,5.489,0,2.677,2.677,0,0,1-.406,1.427,2.38,2.38,0,0,1-.29.395,1.043,1.043,0,0,1-.11.116,2.734,2.734,0,0,1-3.987-.116,2.38,2.38,0,0,1-.29-.395"
                      transform="translate(-3.81 -0.75)"
                      fill="none"
                      stroke="#000"
                    />
                  </g>
                </g>
                <script xmlns="" />
              </svg>
            </i>
            <p className="text-[14px]">배달</p>
          </div>
          <div className="border border-[#DDE0E3] rounded-[4px] w-1/2  h-[74px] flex flex-col gap-[7px] justify-center items-center">
            <i>
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
                        fill="#000"
                      />
                    </g>
                    <path
                      id="Path_14723"
                      data-name="Path 14723"
                      d="M173.745,592.264h3"
                      transform="translate(-165 -587.966)"
                      fill="none"
                      stroke="#000"
                    />
                  </g>
                  <path
                    id="Path_14724"
                    data-name="Path 14724"
                    d="M7,12H2.635A1.471,1.471,0,0,1,1,10.313V1.425l2.664-6.3"
                    transform="translate(6.106 11.442)"
                    fill="none"
                    stroke="#000"
                  />
                </g>
                <script xmlns="" />
              </svg>
            </i>
            <p className="text-[14px]">매장픽업</p>
          </div>
        </div>
      </div>
    </div>
  );
}
