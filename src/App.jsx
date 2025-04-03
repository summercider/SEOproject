import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import { Routes, Route } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Brand from '@/pages/Brand';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          {/* <Route path="/evnet" /> */}
          {/* <Route path="/store" /> */}
          {/* <Route path="/voc" /> */}
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
