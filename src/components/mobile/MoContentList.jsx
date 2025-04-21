import { Link } from 'react-router';

export default function MoContentList({ moContents }) {
  // console.log(moContents);

  return (
    <ul className="p-[20px] bg-[rgba(239,241,243,0.4)]">
      {moContents.map((item, index) => (
        <li key={index} className="first:mt-0 mt-[16px]">
          <Link to={item.path} className="block text-[16px] leading-[22px]">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
