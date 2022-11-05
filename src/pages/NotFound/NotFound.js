import { ErrorTitle, Layout, Link } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Layout>
      <ErrorTitle>404</ErrorTitle>
      <p>Sorry, we couldn't find that page :(</p>
      <Link to="/" end>
        Please go to the main page
      </Link>
    </Layout>
  );
};
