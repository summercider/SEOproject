import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import MoMenuWrap from '@/pages/MoMenuWrap';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <Header />
      <MoMenuWrap />
      {/* 중첩된 내부ㅡRoute는 outlet으로 들어옴 */}
      <Outlet />
      <Footer />
    </div>
  );
}
