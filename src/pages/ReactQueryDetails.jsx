import { useUserId } from '@/hooks/useUserId';
import { useParams } from 'react-router';

export default function ReactQueryDetails() {
  const { userId } = useParams();
  const { isLoading, data, isError, error } = useUserId(userId);
  // console.log(data, '===', typeof data);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <>
      {data?.length > 0 ? (
        <div>
          <p>Id: {data[0].id}</p>
          <p>Name : {data[0].name}</p>
          <p>Country : {data[0].country}</p>
        </div>
      ) : (
        <p>찾는페이지없음</p>
      )}
    </>
  );
}
