import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    // console.log('Scrolling to top');
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
}
