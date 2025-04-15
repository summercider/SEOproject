import PopularItem from '@/components/home/PopularItem';
import PopularViewMore from '@/components/home/PopularViewMore';

export default function PopularList({ selectData, activeBrand }) {
  return (
    <div>
      <ul className="flex gap-[20px] mt-[20px]">
        {selectData.map((list) => (
          <PopularItem key={list.id} list={list} />
        ))}
      </ul>
      <PopularViewMore activeBrand={activeBrand} />
    </div>
  );
}
