import { useEffect } from 'react';

export default function LoginTimer({ time, setTime }) {
  // 클린업때문에 uesEffect
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    //언마운트시 타이머 삭제
    return () => clearInterval(timer);
    //time의 상태값이 바뀔떄마다 실행
  }, [time]);

  //시간을 분+초
  const formatTime = (timeV) => {
    const minutes = Math.floor(timeV / 60);
    const seconds = timeV % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return <>{formatTime(time)}</>;
}
