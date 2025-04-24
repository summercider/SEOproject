import InNav from '@/components/InNav';
import NoResult from '@/components/NoResult';

export default function EatTV() {
  const txt = '현재 진행중인 이벤트가 없습니다.';
  const dataInit = {
    global: '이벤트',
    local: 'EATZ TV',
  };

  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px] max-w-[1150px] mx-auto my-0">
      <div className="flex justify-between items-start mb-[30px] ">
        <h2 className="text-[26px] font-semibold text-gray-600 ">
          {dataInit.local}
        </h2>
        <InNav dataInit={dataInit} />
      </div>
      <NoResult txt={txt} />
    </div>
  );
}
