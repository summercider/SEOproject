import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';

const engelDefault = {
  menus: [
    '♥신제품♥',
    '커피',
    '드링크',
    '스노우',
    'TEA',
    '샌드위치',
    '케이크',
    '베이커리',
    '병음료',
    '디저트',
  ],
  brand: 'engel',
  name: '엔제리너스',
  color: '#DAD6CB',
  actionAdd: false,
  banner: false,
  logo: false,
};

export default function BrandEngel() {
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
          <h3 className="font-[500]">엔제리너스</h3>
        </div>
        {/* main */}
        <div
          className=" flex
        max-sm:flex-col"
        >
          <Aside defaultData={engelDefault} />
          <Bside defaultData={engelDefault} />
        </div>
      </div>
    </div>
  );
}
