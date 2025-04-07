import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';

export default function BrandRia() {
  return (
    <div className="wrapper pt-[30px]  pb-[100px]">
      <div className="inner  max-w-[1150px] my-0 mx-auto px-[20px]">
        <div className=" pb-[30px] text-[#000] text-[26px] ">
          <h3 className="font-[500]">롯데리아</h3>
        </div>
        {/* main */}
        <div className=" flex h-[1000px]  ">
          {/* div h제거필요 */}
          <Aside />
          <Bside />
        </div>
      </div>
    </div>
  );
}
