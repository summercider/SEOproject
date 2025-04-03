import { useUser } from '@/hooks/useUser';
import { Link } from 'react-router';

export default function ReactQuery() {
  const { isLoading, isError, data, error } = useUser();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <main>
      <h2>React Query page</h2>

      <ul className="list">
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`/react-query/${user.id}`}> {user.name} </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
