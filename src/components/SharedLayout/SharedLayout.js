import { Header, Layout, Link } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

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

      <Outlet />
    </Layout>
  );
};
