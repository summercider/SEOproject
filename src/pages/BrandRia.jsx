import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';
import divide from '@/assets/images/ico_breadcrumb_divide.svg';
import home from '@/assets/images/comm_ico_home.svg';
import { Link } from 'react-router';
// 가격 적용된곳 전부 toLocaleString() 할것 ,있음

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
          className=" pb-[30px] text-[#5f5e5e] text-[26px] flex justify-between
          max-sm:hidden "
        >
          <h3 className="font-[500] text-gray-600">{riaDefault.name}</h3>

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
                <span>{riaDefault.name}</span>
              </li>
            </ul>
          </div>
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
