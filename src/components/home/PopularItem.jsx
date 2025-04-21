import { Link } from 'react-router';

export default function PopularItem({ list }) {
  // console.log(list);
  return (
    <li>
      <Link className="max-sm:flex max-sm:gap-x-[15px] max-sm:items-center">
        <div
          className="w-[175px] h-[175px] max-sm:w-[90px] max-sm:h-[90px]"
          style={{
            backgroundImage: `url(${list.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            border: '1px solid #EFF1F3',
            borderRadius: '4px',
          }}
        ></div>
        <div className="text-[14px] text-black mt-[12px] break-keep">
          <span className="leading-[18px]">{list.title}</span>
          {list.price && (
            <p className="mt-[6px] font-bold">
              <span>{list.price.toLocaleString('ko-KR')}</span>
              <span>원</span>
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}
