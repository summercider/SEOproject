//브랜드 각 페이지  다 만들어야함
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router'; //라우터 path  parameter확인하기

export default function RiaDetail() {
  let { brand, id } = useParams();

  // 데이터를 가져올건데 브랜드 전체가아닌 id에 해당하는 값만
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['brand', id],
    queryFn: () => fetch(`/brand/${brand}/${id}`).then((res) => res.json()),
  });
  console.log(data);
  console.log(brand, id);

  return <div>데이터:{data?.[0].name}</div>;
}
