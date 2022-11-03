import { Routes, Route } from 'react-router-dom';
import { Header, Layout, Link } from './App.styled';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>movieId</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
