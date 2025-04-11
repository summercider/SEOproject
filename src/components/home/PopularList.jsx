import PopularItem from '@/components/home/PopularItem';

export default function PopularList({ popList }) {
  // console.log(popList);
  return (
    <div>
      <ul className="flex">
        {popList.map((list) => (
          <PopularItem key={list.id} list={list} />
        ))}
      </ul>
    </div>
  );
}
