import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';

const menus = ['추천메뉴', '버거', '디저트', '치킨', '음료', '아이스샷'];
const brand = 'ria';
const name = '롯데리아';
const color = '#f00028';

export default function BrandRia() {
  return (
    <div
      className="wrapper pt-[30px]  pb-[100px] relative
      before:content-[''] before:w-full before:h-[1px] before:bg-[#DDE0E3] before:absolute before:top-[90px] before:left-0
      max-sm:before:hidden max-sm:pt-0 max-sm:pb-[65px]"
    >
      <div
        className="inner  max-w-[1150px] my-0 mx-auto px-[20px]
      max-sm:p-0"
      >
        <div
          className=" pb-[30px] text-[#000] text-[26px]
          max-sm:hidden "
        >
          <h3 className="font-[500]">롯데리아</h3>
        </div>
        {/* main */}
        <div
          className=" flex
        max-sm:flex-col"
        >
          <Aside brandexam={name} brandtest={brand} colortest={color} />
          <Bside menustest={menus} brandtest={brand} />
        </div>
      </div>
    </div>
  );
}
