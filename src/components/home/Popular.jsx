import PopularBrand from '@/components/home/PopularBrand';
import PopularList from '@/components/home/PopularList';
import PopularOrder from '@/components/home/PopularOrder';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Popular() {
  const [activeBrand, setActiveBrand] = useState('크리스피크림 도넛');
  const [popList, setPopList] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['popular'],
    queryFn: () => fetch('/popular').then((res) => res.json()),
  });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="pt-[40px] pr-[20px]">
      <PopularOrder />
      <PopularBrand
        activeBrand={activeBrand}
        setActiveBrand={setActiveBrand}
        data={data}
      />
      <PopularList popList={data} />
    </div>
  );
}
