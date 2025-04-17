import { useEffect, useState } from 'react';

export default function LoginTimer() {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);

  // effect로 클린업해야함
  useEffect(() => {}, []);

  return (
    <>
      {min}:{sec}
    </>
  );
}
