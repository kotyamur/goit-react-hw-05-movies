import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from './App.styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <Layout>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/movies" element={<div>movies</div>} />
        <Route path="/movies/:movieId" element={<div>movieId</div>} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </Layout>
  );
};
