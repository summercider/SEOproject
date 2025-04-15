import { Link } from 'react-router';

export default function FooterBtnList({ children }) {
  return (
    <>
      <li className="mr-[6px]">
        <Link
          className="btn text-[13px] leading-[18px] tracking-[-0.025em]
        border border-[#DDE0E3] h-[32px] bg-white rounded-[4px]"
        >
          {children}
        </Link>
      </li>
    </>
  );
}
