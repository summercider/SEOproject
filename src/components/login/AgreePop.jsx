import { useEffect } from 'react';

export default function AgreePop({ agreePopShow, setAgreePopShow }) {
  //팝업 띄우면 scroll 막기
  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //클린업
  useEffect(() => {
    if (agreePopShow) {
      stopScroll();
    }
    return () => {
      if (agreePopShow) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [agreePopShow]);
  //  닫기버튼
  const closeClick = (e) => {
    e.stopPropagation;
    setAgreePopShow(false);
  };
  return (
    <div
      className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${agreePopShow ? 'visible opacity-[100%]' : 'opacity-0 invisible'}
      `}
    >
      <div
        className={` p-[20px] bg-[#fff] rounded-[10px] z-301 w-[800px] 
          max-sm:w-full max-sm:absolute max-sm:top-0  max-sm:left-0  max-sm:h-full
        `}
      >
        <div className="">
          <div className="relative">
            <h1 className="pb-[20px] text-[18px] font-medium text-gray-600 leading-[22px] ">
              비회원이용약관 및 개인정보 수집이용 동의
            </h1>
            <button
              type="btn"
              onClick={closeClick}
              className=" w-[44px] h-[44px] absolute -top-[10px] -right-[20px] text-center "
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
          <p className="underline mt-[20px]">
            귀하께서는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가
            있습니다. 그러나 필수 수집항목에 대한 동의를 거부할 경우, 롯데잇츠
            비회원 로그인 서비스를 이용할 수 없습니다.
          </p>
          <div className="overflow-x-auto">
            <table
              className=" w-full mt-[20px]  border-t-2 border-[#333] text-center leading-[20px]
            max-sm:w-[180%] "
            >
              <thead className="text-[#222] text-[14px]">
                <tr className="[&>*]:bg-[#F5F5F5] [&>*]:border-[#E5E5E5] [&>*]:p-[10PX]">
                  <th className="border-1 border-l-0 w-[113px] max-sm:w-[220px]">
                    구분
                  </th>
                  <th className=" border-1">수집 및 이용 목적</th>
                  <th className="border-1">수집 개인정보 항목</th>
                  <th>보유기간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="[&>*]:p-[10PX] [&>*]:border-[#E5E5E5]">
                  <th className="bg-[#F5F5F5] border-1 border-l-0  border-t-0 text-[14px] text-[#222]">
                    롯데잇츠
                  </th>
                  <td className="border-1 border-t-0 text-[13px] text-[#555]">
                    비회원 로그인
                  </td>
                  <td className="border-1 border-t-0 text-[13px] text-[#555]">
                    - 필수정보 : 휴대폰 번호
                  </td>
                  <td className="border-1 border-r-0 text-[14px] text-[#555] ">
                    <span>
                      <strong className="font-bold">
                        로그아웃 후 즉시 삭제
                      </strong>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-[138px] pt-[30px] max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:left-0 max-sm:px-[20px] ">
          <button
            type="btn"
            onClick={closeClick}
            className="w-full h-[44px]  text-[#fff] border bg-[#00A5B9] border-[#00A5B9] rounded-[4px] text-[14px] 
            hover:bg-point1 "
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
