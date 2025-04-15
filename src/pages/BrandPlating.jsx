import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';
import divide from '@/assets/images/ico_breadcrumb_divide.svg';
import home from '@/assets/images/comm_ico_home.svg';
import { Link } from 'react-router';

const platingDefault = {
  menus: [
    '플레:이팅 라운지',
    '플레:이팅 헬시',
    '플레:이팅 파크',
    '무쿄쿠',
    '효자곰탕',
    '공평왕돈까스',
    '서해칼국수',
  ],
  brand: 'plating',
  name: '플레:이팅',
  color: '#373737',
  actionAdd: true,
  banner: false,
  logo: true,
};

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
          className=" pb-[30px] text-[#000] text-[26px]  flex justify-between
          max-sm:hidden "
        >
          <h3 className="font-[500]">플레:이팅</h3>
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
                <span>{platingDefault.name}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* main */}
        <div
          className=" flex
        max-sm:flex-col"
        >
          <Aside defaultData={platingDefault} />
          <Bside defaultData={platingDefault} />
        </div>
      </div>
    </div>
  );
}
