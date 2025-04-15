import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';
import divide from '@/assets/images/ico_breadcrumb_divide.svg';
import home from '@/assets/images/comm_ico_home.svg';
import { Link } from 'react-router';

const creamDefault = {
  menus: ['추천메뉴', '도넛 더즌', '도넛 단품', '커피', '아더드링크'],
  brand: 'cream',
  name: '크리스피크림',
  color: '#31955B',
  actionAdd: false,
  banner: true,
  logo: false,
};

export default function BrandCream() {
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
          className=" pb-[30px] text-[#000] text-[26px]  flex justify-between
          max-sm:hidden "
        >
          <h3 className="font-[500]">크리스피크림</h3>
          <div>
            <ul className="flex text-[13px] leading-[16px] items-center gap-[8px] text-gray-400 ">
              <li>
                <Link to={'/'}>
                  <img src={`${home}`} className="-mt-[1px]" />
                </Link>
              </li>
              <li>
                <img src={`${divide}`} />
              </li>
              <li>브랜드</li>
              <li>
                <img src={`${divide}`} />
              </li>
              <li>
                <span>{creamDefault.name}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* main */}
        <div
          className=" flex
        max-sm:flex-col"
        >
          <Aside defaultData={creamDefault} />
          <Bside defaultData={creamDefault} />
        </div>
      </div>
    </div>
  );
}
