import DailyCheckNav from '@/components/event/DailyCheckNav';
import NoResult from '@/components/NoResult';

export default function DailyCheck() {
  const txt = '현재 진행중인 \n출석체크가 없습니다.';

  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px] max-w-[1150px] mx-auto my-0">
      <div className="flex justify-between items-start mb-[30px] ">
        <h2 className="text-[26px] font-semibold text-gray-600 ">출석체크</h2>
        <DailyCheckNav />
      </div>
      <NoResult txt={txt} />
    </div>
  );
}
