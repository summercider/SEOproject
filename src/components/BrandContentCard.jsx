import { Link } from 'react-router';

export default function BrandContentCard({ brandData }) {
  // console.log(brandData);

  return (
    <li
      className="w-[calc(100%/3-40px/3)] text-[14px] 
    max-sm:w-[calc(50%-20px/2)]"
    >
      {/* 링크를 누르면
      brandData정보가지고 새페이지 */}

      <Link
        onClick={() => {
          // console.log(brandData.id);
        }}
        to={`/brand/${brandData.brand}/${brandData.id}`}
      >
        <div className=" border aspect-square flex items-center border-[#EFF1F3] ">
          <img
            className="w-full "
            src={`${brandData.img}`}
            alt={`${brandData.name}`}
          />
        </div>
        <p className="mt-[12px] text-gray-600 break-keep">{brandData.name}</p>
        {brandData.price ? (
          <p className="mt-[6px] text-gray-600 font-semibold">
            {brandData.price}
            <span className="ml-[2px]">원</span>
          </p>
        ) : (
          ''
        )}
      </Link>
    </li>
  );
}
