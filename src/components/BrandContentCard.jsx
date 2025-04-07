import { Link } from 'react-router';

export default function BrandContentCard({ brandData }) {
  // console.log(brandData);
  return (
    <>
      <li className=" w-[calc((100%/3)-20px)]  ">
        <Link>
          <div className=" border ">
            <img src={`${brandData.img}`} alt={`${brandData.name}`} />
          </div>
          <p>{brandData.name}</p>
          <p>{brandData.price} 원</p>
        </Link>
      </li>
    </>
  );
}
