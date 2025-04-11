import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';

const riaDefault = {
  menus: ['추천메뉴', '버거', '디저트', '치킨', '음료', '아이스샷'],
  brand: 'ria',
  name: '롯데리아',
  color: '#f00028',
  actionAdd: false,
  banner: false,
  logo: false,
  url: 'https://www.lottegrs.com/kor/business/lotteria.jsp',
};

export default function BrandRia() {
  return (
    <div
      className="wrapper pt-[30px]  pb-[100px] relative
      before:w-full before:h-[1px] before:bg-[#DDE0E3] before:absolute before:top-[90px] before:left-0
      max-sm:pt-0 max-sm:pb-[65px]"
    >
      <div
        className="inner  max-w-[1150px] my-0 mx-auto px-[20px]
      max-sm:p-0"
      >
        <div
          className=" pb-[30px] text-[#000] text-[26px]
          max-sm:hidden "
        >
          <h3 className="font-[500]">{riaDefault.name}</h3>
        </div>
        <div
          className=" flex
        max-sm:flex-col"
        >
          <Aside defaultData={riaDefault} />
          <Bside defaultData={riaDefault} />
        </div>
      </div>
    </div>
  );
}
