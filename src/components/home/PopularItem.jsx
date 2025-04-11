import { Link } from 'react-router';

export default function PopularItem({ list }) {
  console.log(list);
  return (
    <li>
      <Link>{list.title}</Link>
    </li>
  );
}
