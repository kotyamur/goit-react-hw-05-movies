import { Suspense } from 'react';
import { Header, Layout, Link } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
