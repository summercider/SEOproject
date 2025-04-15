import { Link } from 'react-router';

export default function FooterMenuList({ children }) {
  return (
    <>
      <li className="group mb-[20px]">
        <Link
          className="block group-first:font-medium text-black text-[13px] leading-[18px] 
          tracking-[-0.025em] relative group-first:pl-0 pl-[10px] ml-[9px]  before:content-[''] before:absolute before:left-0 before:top-[3.5px] before:w-[1px] before:h-[10px] before:border before:border-[#DDE0E3]  group-first:before:border-none group-first:ml-0"
        >
          {children}
        </Link>
      </li>
    </>
  );
}
