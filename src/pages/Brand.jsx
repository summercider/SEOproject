import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';

export default function Brand() {
  return (
    <div className="wrapper pt-[30px] pb-[100px] w-[1110px] my-0 mx-auto">
      {/* brand header 컴포넌트만들기 */}
      <div className=" pb-[30px] bg-[#ddd] text-[#000] text-[26px] ">
        <h3>롯데리아</h3>
      </div>
      {/* main */}
      <div className=" flex h-[1000px]">
        {/* div h제거필요 */}
        <Aside />
        <Bside />
      </div>
    </div>
  );
}
