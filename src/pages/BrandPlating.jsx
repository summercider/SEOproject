import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';

const menus = [
  '플레:이팅 라운지',
  '플레:이팅 헬시',
  '플레:이팅 파크',
  '무쿄쿠',
  '효자곰탕',
  '공평왕돈까스',
  '서해칼국수',
];
const brand = 'plating';
const name = '플레:이팅';
const color = '#373737';

export default function BrandPlating() {
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
          <h3 className="font-[500]">플레:이팅</h3>
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
